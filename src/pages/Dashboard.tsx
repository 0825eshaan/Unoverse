import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { useProgress } from '../contexts/ProgressContext'
import { BookOpen, Clock, Trophy, Zap, ChevronRight, Target, Award, TrendingUp, Calendar } from 'lucide-react'
import { courses } from '../data/courses'

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth()
  const { getCourseProgress } = useProgress()

  const getProgressPercentage = (courseId: string) => {
    const progress = getCourseProgress(courseId)
    const course = courses.find(c => c.id === courseId)
    if (!progress || !course) return 0
    return Math.round((progress.completedLessons.length / course.lessons.length) * 100)
  }

  const stats = [
    {
      label: 'Current Level',
      value: currentUser?.level || 1,
      icon: Trophy,
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-500/10',
      textColor: 'text-yellow-400'
    },
    {
      label: 'Total XP',
      value: (currentUser?.totalXP || 0).toLocaleString(),
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      textColor: 'text-orange-400'
    },
    {
      label: 'Courses Completed',
      value: currentUser?.completedCourses.length || 0,
      icon: BookOpen,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      textColor: 'text-green-400'
    },
    {
      label: 'Study Streak',
      value: '7 days',
      icon: Calendar,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      textColor: 'text-purple-400'
    }
  ]

  const achievements = [
    { name: 'First Steps', icon: '🎯', unlocked: true },
    { name: 'Code Warrior', icon: '⚔️', unlocked: true },
    { name: 'Quick Learner', icon: '⚡', unlocked: false },
    { name: 'Perfectionist', icon: '💎', unlocked: false }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome back, <span className="gradient-text">{currentUser?.displayName?.split(' ')[0]}</span>! 👋
            </h1>
            <p className="text-gray-300 text-lg">
              Ready to continue your Arduino mastery journey?
            </p>
          </div>
          <div className="hidden md:block">
            <div className="glass-card p-4 border border-orange-500/20">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-green-400" />
                <div>
                  <p className="text-sm text-gray-400">Learning Streak</p>
                  <p className="text-2xl font-bold text-green-400">7 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="stat-card group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`h-6 w-6 ${stat.textColor}`} />
              </div>
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${stat.color} pulse-glow`} />
            </div>
            <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Level Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card mb-8 relative overflow-hidden"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Target className="h-6 w-6 text-orange-400" />
            <h3 className="text-xl font-semibold text-white">Level Progress</h3>
          </div>
          <span className="text-sm text-gray-400">
            {currentUser?.xp || 0}/1000 XP to Level {(currentUser?.level || 1) + 1}
          </span>
        </div>
        
        <div className="progress-bar mb-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentUser?.xp || 0) / 1000) * 100}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="progress-fill"
          />
        </div>
        
        <div className="flex justify-between text-sm text-gray-400">
          <span>Level {currentUser?.level || 1}</span>
          <span>Level {(currentUser?.level || 1) + 1}</span>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Courses Section */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Available Courses</h2>
              <div className="text-sm text-gray-400">
                {courses.length} courses available
              </div>
            </div>
            
            <div className="space-y-6">
              {courses.map((course, index) => {
                const progress = getProgressPercentage(course.id)
                return (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ x: 5 }}
                    className="card hover-lift group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative overflow-hidden rounded-xl w-24 h-24 flex-shrink-0">
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-2 left-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            course.difficulty === 'beginner' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                            course.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                            'bg-red-500/20 text-red-400 border border-red-500/30'
                          }`}>
                            {course.difficulty}
                          </span>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-gray-300 mb-3 line-clamp-2">
                          {course.description}
                        </p>

                        <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {course.estimatedTime}
                            </span>
                            <span className="flex items-center">
                              <Zap className="h-4 w-4 mr-1" />
                              {course.xpReward} XP
                            </span>
                            <span className="flex items-center">
                              <BookOpen className="h-4 w-4 mr-1" />
                              {course.lessons.length} lessons
                            </span>
                          </div>
                        </div>

                        {progress > 0 && (
                          <div className="mb-3">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-400">Progress</span>
                              <span className="text-orange-400 font-medium">{progress}%</span>
                            </div>
                            <div className="progress-bar h-2">
                              <div
                                className="progress-fill h-2"
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      <Link
                        to={`/course/${course.id}`}
                        className="btn-primary group-hover:scale-105 transition-transform"
                      >
                        {progress > 0 ? 'Continue' : 'Start'}
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recent Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="card"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Award className="h-5 w-5 text-yellow-400" />
              <h3 className="text-lg font-semibold text-white">Achievements</h3>
            </div>
            <div className="space-y-3">
              {achievements.map((achievement) => (
                <div
                  key={achievement.name}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                    achievement.unlocked
                      ? 'bg-orange-500/10 border border-orange-500/20'
                      : 'bg-gray-800/50 border border-gray-700/50 opacity-60'
                  }`}
                >
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <p className={`font-medium ${
                      achievement.unlocked ? 'text-orange-400' : 'text-gray-500'
                    }`}>
                      {achievement.name}
                    </p>
                    {achievement.unlocked && (
                      <p className="text-xs text-green-400">Unlocked!</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="card"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Lessons Completed</span>
                <span className="text-white font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Code Challenges</span>
                <span className="text-white font-medium">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Quiz Score</span>
                <span className="text-green-400 font-medium">92%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Time Spent</span>
                <span className="text-white font-medium">24h 30m</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard