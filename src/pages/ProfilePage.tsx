import React from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { Trophy, Zap, BookOpen, Calendar, Award } from 'lucide-react'

const ProfilePage: React.FC = () => {
  const { currentUser } = useAuth()

  if (!currentUser) return null

  const achievements = [
    { name: 'First Steps', description: 'Completed your first lesson', icon: '🎯', unlocked: true },
    { name: 'Code Warrior', description: 'Wrote your first Arduino program', icon: '⚔️', unlocked: true },
    { name: 'Quiz Master', description: 'Scored 100% on a quiz', icon: '🧠', unlocked: false },
    { name: 'Speed Learner', description: 'Completed a course in one day', icon: '⚡', unlocked: false },
    { name: 'Dedicated Student', description: '7-day learning streak', icon: '🔥', unlocked: false },
    { name: 'Arduino Expert', description: 'Completed all courses', icon: '🏆', unlocked: false }
  ]

  const stats = [
    { label: 'Current Level', value: currentUser.level, icon: Trophy, color: 'text-yellow-500' },
    { label: 'Total XP', value: currentUser.totalXP, icon: Zap, color: 'text-blue-500' },
    { label: 'Courses Completed', value: currentUser.completedCourses.length, icon: BookOpen, color: 'text-green-500' },
    { label: 'Days Active', value: Math.floor((Date.now() - currentUser.joinedAt.getTime()) / (1000 * 60 * 60 * 24)), icon: Calendar, color: 'text-purple-500' }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <img
          src={currentUser.photoURL || `https://ui-avatars.com/api/?name=${currentUser.displayName}&background=3b82f6&color=fff&size=128`}
          alt={currentUser.displayName}
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
        />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentUser.displayName}</h1>
        <p className="text-gray-600">{currentUser.email}</p>
        <div className="mt-4 inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full">
          <Trophy className="h-5 w-5 mr-2" />
          Level {currentUser.level} Arduino Developer
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
            className="card text-center"
          >
            <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-2`} />
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Progress Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card mb-8"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-4">Level Progress</h2>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Level {currentUser.level}</span>
          <span className="text-sm text-gray-600">Level {currentUser.level + 1}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-500"
            style={{ width: `${(currentUser.xp / 1000) * 100}%` }}
          />
        </div>
        <p className="text-center text-sm text-gray-600">
          {currentUser.xp}/1000 XP ({1000 - currentUser.xp} XP to next level)
        </p>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="card"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <Award className="h-6 w-6 mr-2" />
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              className={`p-4 rounded-lg border-2 transition-all ${
                achievement.unlocked
                  ? 'border-green-200 bg-green-50'
                  : 'border-gray-200 bg-gray-50 opacity-60'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{achievement.icon}</span>
                <div>
                  <h3 className={`font-semibold ${
                    achievement.unlocked ? 'text-green-800' : 'text-gray-600'
                  }`}>
                    {achievement.name}
                  </h3>
                  <p className={`text-sm ${
                    achievement.unlocked ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    {achievement.description}
                  </p>
                </div>
              </div>
              {achievement.unlocked && (
                <div className="mt-2 text-right">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Unlocked
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default ProfilePage