import React, { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { useProgress } from '../contexts/ProgressContext'
import { courses } from '../data/courses'
import { ChevronLeft, ChevronRight, CheckCircle, Play, Code, HelpCircle } from 'lucide-react'
import toast from 'react-hot-toast'

const CoursePage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>()
  const { updateUserProgress } = useAuth()
  const { updateProgress, getCourseProgress } = useProgress()
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [userCode, setUserCode] = useState('')
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)

  const course = courses.find(c => c.id === courseId)
  const courseProgress = getCourseProgress(courseId!)

  useEffect(() => {
    if (course && courseProgress) {
      const lastCompletedIndex = course.lessons.findIndex(
        lesson => !courseProgress.completedLessons.includes(lesson.id)
      )
      if (lastCompletedIndex !== -1) {
        setCurrentLessonIndex(lastCompletedIndex)
      }
    }
  }, [course, courseProgress])

  if (!course) {
    return <Navigate to="/dashboard" />
  }

  const currentLesson = course.lessons[currentLessonIndex]
  const isLessonCompleted = courseProgress?.completedLessons.includes(currentLesson.id) || false

  const handleNextLesson = () => {
    if (currentLessonIndex < course.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1)
      setUserCode('')
      setQuizAnswers({})
      setShowResults(false)
    }
  }

  const handlePreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1)
      setUserCode('')
      setQuizAnswers({})
      setShowResults(false)
    }
  }

  const handleCompleteLesson = async () => {
    if (!isLessonCompleted) {
      updateProgress(courseId!, currentLesson.id)
      await updateUserProgress(currentLesson.xpReward)
      toast.success(`Lesson completed! +${currentLesson.xpReward} XP`)
    }
  }

  const checkCode = () => {
    const requiredKeywords = ['pinMode', 'digitalWrite', 'delay']
    const hasAllKeywords = requiredKeywords.every(keyword => 
      userCode.toLowerCase().includes(keyword.toLowerCase())
    )

    if (hasAllKeywords) {
      handleCompleteLesson()
      toast.success('Code looks great! Well done!')
    } else {
      const missing = requiredKeywords.filter(keyword => 
        !userCode.toLowerCase().includes(keyword.toLowerCase())
      )
      toast.error(`Missing: ${missing.join(', ')}`)
    }
  }

  const submitQuiz = () => {
    if (!currentLesson.quiz) return

    let correctAnswers = 0
    currentLesson.quiz.forEach(question => {
      if (quizAnswers[question.id] === question.correctAnswer) {
        correctAnswers++
      }
    })

    const score = (correctAnswers / currentLesson.quiz.length) * 100
    setShowResults(true)

    if (score >= 70) {
      handleCompleteLesson()
      toast.success(`Quiz completed! Score: ${score.toFixed(0)}%`)
    } else {
      toast.error(`Score too low: ${score.toFixed(0)}%. Try again!`)
    }
  }

  const renderLessonContent = () => {
    switch (currentLesson.type) {
      case 'theory':
        return (
          <div className="prose max-w-none">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: currentLesson.content
                  .replace(/```cpp\n([\s\S]*?)\n```/g, '<pre class="code-block"><code>$1</code></pre>')
                  .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">$1</code>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/## (.*)/g, '<h3 class="text-xl font-semibold mt-6 mb-3 text-gray-900">$1</h3>')
                  .replace(/# (.*)/g, '<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900">$1</h2>')
                  .replace(/\n/g, '<br>')
              }}
            />
          </div>
        )

      case 'code':
        return (
          <div className="space-y-6">
            <div className="text-gray-700">
              <p className="text-lg mb-4">{currentLesson.content}</p>
              {currentLesson.expectedOutput && (
                <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                  <strong>Expected Result:</strong> {currentLesson.expectedOutput}
                </p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Code:
              </label>
              <textarea
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                placeholder={currentLesson.codeTemplate || 'Write your Arduino code here...'}
                className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <button
              onClick={checkCode}
              className="btn-primary"
            >
              <Code className="h-4 w-4" />
              Check Code
            </button>
          </div>
        )

      case 'quiz':
        return (
          <div className="space-y-6">
            <p className="text-lg text-gray-700 mb-6">{currentLesson.content}</p>
            
            {currentLesson.quiz?.map((question, qIndex) => (
              <div key={question.id} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Question {qIndex + 1}: {question.question}
                </h4>
                
                <div className="space-y-2">
                  {question.options.map((option, oIndex) => (
                    <label
                      key={oIndex}
                      className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                        quizAnswers[question.id] === oIndex
                          ? 'bg-primary-100 border-primary-300'
                          : 'bg-white border-gray-200 hover:bg-gray-50'
                      } border`}
                    >
                      <input
                        type="radio"
                        name={question.id}
                        value={oIndex}
                        checked={quizAnswers[question.id] === oIndex}
                        onChange={() => setQuizAnswers(prev => ({
                          ...prev,
                          [question.id]: oIndex
                        }))}
                        className="mr-3"
                      />
                      {option}
                    </label>
                  ))}
                </div>

                {showResults && (
                  <div className="mt-4 p-3 rounded-lg bg-blue-50">
                    <p className="text-sm text-blue-800">
                      <strong>Explanation:</strong> {question.explanation}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {!showResults && (
              <button
                onClick={submitQuiz}
                disabled={Object.keys(quizAnswers).length !== currentLesson.quiz?.length}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <HelpCircle className="h-4 w-4" />
                Submit Quiz
              </button>
            )}
          </div>
        )

      default:
        return <div>Unknown lesson type</div>
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Course Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span>Lesson {currentLessonIndex + 1} of {course.lessons.length}</span>
          <span>•</span>
          <span>{currentLesson.xpReward} XP</span>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Course Progress</span>
          <span>{Math.round(((courseProgress?.completedLessons.length || 0) / course.lessons.length) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((courseProgress?.completedLessons.length || 0) / course.lessons.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Lesson Sidebar */}
        <div className="lg:col-span-1">
          <div className="card sticky top-24">
            <h3 className="font-semibold text-gray-900 mb-4">Lessons</h3>
            <div className="space-y-2">
              {course.lessons.map((lesson, index) => {
                const completed = courseProgress?.completedLessons.includes(lesson.id)
                const current = index === currentLessonIndex
                
                return (
                  <button
                    key={lesson.id}
                    onClick={() => setCurrentLessonIndex(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      current
                        ? 'bg-primary-100 text-primary-700 border border-primary-200'
                        : completed
                        ? 'bg-green-50 text-green-700 hover:bg-green-100'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{lesson.title}</span>
                      {completed && <CheckCircle className="h-4 w-4 text-green-600" />}
                    </div>
                    <div className="flex items-center mt-1 text-xs">
                      {lesson.type === 'theory' && <Play className="h-3 w-3 mr-1" />}
                      {lesson.type === 'code' && <Code className="h-3 w-3 mr-1" />}
                      {lesson.type === 'quiz' && <HelpCircle className="h-3 w-3 mr-1" />}
                      <span>{lesson.xpReward} XP</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentLesson.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="card"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{currentLesson.title}</h2>
                {isLessonCompleted && (
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-1" />
                    <span className="text-sm font-medium">Completed</span>
                  </div>
                )}
              </div>

              {renderLessonContent()}

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={handlePreviousLesson}
                  disabled={currentLessonIndex === 0}
                  className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </button>

                <div className="flex space-x-3">
                  {currentLesson.type === 'theory' && !isLessonCompleted && (
                    <button
                      onClick={handleCompleteLesson}
                      className="btn-primary"
                    >
                      <CheckCircle className="h-4 w-4" />
                      Mark Complete
                    </button>
                  )}

                  <button
                    onClick={handleNextLesson}
                    disabled={currentLessonIndex === course.lessons.length - 1}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default CoursePage