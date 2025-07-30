import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Zap, User, Trophy, BookOpen, LogOut, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar: React.FC = () => {
  const { currentUser, logout } = useAuth()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const isActive = (path: string) => location.pathname === path

  if (!currentUser) {
    return null
  }

  const navItems = [
    { path: '/dashboard', label: 'Courses', icon: BookOpen },
    { path: '/leaderboard', label: 'Leaderboard', icon: Trophy }
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass-card sticky top-0 z-50 border-b border-orange-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-3 group">
            <div className="relative">
              <Zap className="h-8 w-8 text-orange-500 group-hover:text-yellow-400 transition-colors pulse-glow" />
            </div>
            <span className="text-2xl font-bold gradient-text">Unoverse</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  isActive(item.path) 
                    ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' 
                    : 'text-gray-300 hover:text-orange-400 hover:bg-orange-500/10'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {/* XP Progress */}
            <div className="hidden sm:flex items-center space-x-3 glass-card px-4 py-2 border border-orange-500/20">
              <span className="text-sm font-medium text-orange-400">
                Level {currentUser.level}
              </span>
              <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentUser.xp / 1000) * 100}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full"
                />
              </div>
              <span className="text-xs text-gray-400">
                {currentUser.xp}/1000 XP
              </span>
            </div>

            {/* User Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-2 p-2 rounded-xl hover:bg-orange-500/10 transition-colors">
                <img
                  src={currentUser.photoURL || `https://ui-avatars.com/api/?name=${currentUser.displayName}&background=ff6b35&color=fff`}
                  alt={currentUser.displayName}
                  className="h-8 w-8 rounded-full border-2 border-orange-500/30"
                />
              </button>
              
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-56 glass-card border border-orange-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                >
                  <div className="p-4 border-b border-orange-500/20">
                    <p className="font-semibold text-white">{currentUser.displayName}</p>
                    <p className="text-sm text-gray-400">{currentUser.email}</p>
                    <div className="mt-2 flex items-center space-x-2">
                      <Trophy className="h-4 w-4 text-orange-400" />
                      <span className="text-sm text-orange-400">Level {currentUser.level}</span>
                    </div>
                  </div>
                  
                  <Link
                    to="/profile"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 transition-colors"
                  >
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                  
                  <button
                    onClick={logout}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-red-400 hover:bg-red-500/10 transition-colors w-full text-left"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-orange-500/10 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-orange-500/20 py-4"
            >
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                      isActive(item.path) 
                        ? 'bg-orange-500/20 text-orange-400' 
                        : 'text-gray-300 hover:text-orange-400 hover:bg-orange-500/10'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                ))}
                
                {/* Mobile XP Display */}
                <div className="px-4 py-3">
                  <div className="glass-card p-3 border border-orange-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-orange-400">
                        Level {currentUser.level}
                      </span>
                      <span className="text-xs text-gray-400">
                        {currentUser.xp}/1000 XP
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full transition-all duration-500"
                        style={{ width: `${(currentUser.xp / 1000) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar