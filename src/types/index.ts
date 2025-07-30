export interface User {
  uid: string
  email: string
  displayName: string
  photoURL?: string
  level: number
  xp: number
  totalXP: number
  completedCourses: string[]
  badges: Badge[]
  joinedAt: Date
}

export interface Course {
  id: string
  title: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedTime: string
  xpReward: number
  lessons: Lesson[]
  prerequisites?: string[]
  thumbnail: string
  category: string
}

export interface Lesson {
  id: string
  title: string
  content: string
  type: 'theory' | 'code' | 'quiz' | 'simulation'
  xpReward: number
  codeTemplate?: string
  expectedOutput?: string
  quiz?: QuizQuestion[]
  completed?: boolean
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  unlockedAt: Date
}

export interface UserProgress {
  courseId: string
  completedLessons: string[]
  currentLesson: number
  score: number
  timeSpent: number
  lastAccessed: Date
}

export interface CodeSubmission {
  code: string
  isCorrect: boolean
  feedback: string
  hints?: string[]
}