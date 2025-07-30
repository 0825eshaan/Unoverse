import React, { createContext, useContext, useState, useEffect } from 'react'
import { UserProgress } from '../types'
import { useAuth } from './AuthContext'

interface ProgressContextType {
  userProgress: Record<string, UserProgress>
  updateProgress: (courseId: string, lessonId: string, score?: number) => void
  getCourseProgress: (courseId: string) => UserProgress | undefined
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

export const useProgress = () => {
  const context = useContext(ProgressContext)
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider')
  }
  return context
}

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth()
  const [userProgress, setUserProgress] = useState<Record<string, UserProgress>>({})

  useEffect(() => {
    if (currentUser) {
      // Load user progress from localStorage or Firebase
      const savedProgress = localStorage.getItem(`progress_${currentUser.uid}`)
      if (savedProgress) {
        setUserProgress(JSON.parse(savedProgress))
      }
    }
  }, [currentUser])

  const updateProgress = (courseId: string, lessonId: string, score: number = 0) => {
    if (!currentUser) return

    setUserProgress(prev => {
      const courseProgress = prev[courseId] || {
        courseId,
        completedLessons: [],
        currentLesson: 0,
        score: 0,
        timeSpent: 0,
        lastAccessed: new Date()
      }

      const updatedProgress = {
        ...prev,
        [courseId]: {
          ...courseProgress,
          completedLessons: courseProgress.completedLessons.includes(lessonId) 
            ? courseProgress.completedLessons 
            : [...courseProgress.completedLessons, lessonId],
          score: courseProgress.score + score,
          lastAccessed: new Date()
        }
      }

      // Save to localStorage
      localStorage.setItem(`progress_${currentUser.uid}`, JSON.stringify(updatedProgress))
      
      return updatedProgress
    })
  }

  const getCourseProgress = (courseId: string): UserProgress | undefined => {
    return userProgress[courseId]
  }

  const value = {
    userProgress,
    updateProgress,
    getCourseProgress
  }

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  )
}