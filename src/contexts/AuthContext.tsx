import React, { createContext, useContext, useEffect, useState } from 'react'
import { 
  User as FirebaseUser,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { auth, googleProvider, db } from '../lib/firebase'
import { User } from '../types'
import toast from 'react-hot-toast'

interface AuthContextType {
  currentUser: User | null
  loading: boolean
  signInWithGoogle: () => Promise<void>
  logout: () => Promise<void>
  updateUserProgress: (xp: number) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const calculateLevel = (totalXP: number): number => {
    return Math.floor(totalXP / 1000) + 1
  }

  const createUserDocument = async (firebaseUser: FirebaseUser): Promise<User> => {
    const userRef = doc(db, 'users', firebaseUser.uid)
    const userSnap = await getDoc(userRef)

    if (!userSnap.exists()) {
      const newUser: User = {
        uid: firebaseUser.uid,
        email: firebaseUser.email!,
        displayName: firebaseUser.displayName!,
        photoURL: firebaseUser.photoURL || undefined,
        level: 1,
        xp: 0,
        totalXP: 0,
        completedCourses: [],
        badges: [],
        joinedAt: new Date()
      }

      await setDoc(userRef, newUser)
      return newUser
    } else {
      return userSnap.data() as User
    }
  }

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const user = await createUserDocument(result.user)
      setCurrentUser(user)
      toast.success('Welcome to Unoverse!')
    } catch (error) {
      console.error('Error signing in with Google:', error)
      toast.error('Failed to sign in. Please try again.')
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      setCurrentUser(null)
      toast.success('Signed out successfully')
    } catch (error) {
      console.error('Error signing out:', error)
      toast.error('Failed to sign out')
    }
  }

  const updateUserProgress = async (xpGained: number) => {
    if (!currentUser) return

    const newTotalXP = currentUser.totalXP + xpGained
    const newLevel = calculateLevel(newTotalXP)
    const newXP = newTotalXP % 1000

    const updatedUser: User = {
      ...currentUser,
      xp: newXP,
      totalXP: newTotalXP,
      level: newLevel
    }

    try {
      const userRef = doc(db, 'users', currentUser.uid)
      await setDoc(userRef, updatedUser, { merge: true })
      setCurrentUser(updatedUser)

      if (newLevel > currentUser.level) {
        toast.success(`🎉 Level up! You're now level ${newLevel}!`)
      } else {
        toast.success(`+${xpGained} XP earned!`)
      }
    } catch (error) {
      console.error('Error updating user progress:', error)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const user = await createUserDocument(firebaseUser)
        setCurrentUser(user)
      } else {
        setCurrentUser(null)
      }
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    loading,
    signInWithGoogle,
    logout,
    updateUserProgress
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}