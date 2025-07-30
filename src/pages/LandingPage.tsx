import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, BookOpen, Trophy, Users, Code, Cpu, ArrowRight, Play, Star } from 'lucide-react'

const LandingPage: React.FC = () => {
  const { currentUser, signInWithGoogle } = useAuth()

  if (currentUser) {
    return <Navigate to="/dashboard" />
  }

  const features = [
    {
      icon: BookOpen,
      title: 'Interactive Learning',
      description: 'Master Arduino through hands-on lessons, real-world projects, and step-by-step tutorials',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Code,
      title: 'Live Code Practice',
      description: 'Write and test Arduino code directly in your browser with instant feedback and validation',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Trophy,
      title: 'Gamified Progress',
      description: 'Earn XP, unlock achievements, level up, and compete with makers worldwide',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      icon: Users,
      title: 'Maker Community',
      description: 'Connect with fellow electronics enthusiasts, share projects, and learn together',
      color: 'from-orange-600 to-amber-500'
    }
  ]

  const stats = [
    { number: '10,000+', label: 'Active Learners' },
    { number: '50+', label: 'Interactive Lessons' },
    { number: '25+', label: 'Real Projects' },
    { number: '95%', label: 'Success Rate' }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Robotics Student',
      content: 'Unoverse made Arduino programming finally click for me. The interactive lessons are amazing!',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=ff6b35&color=fff'
    },
    {
      name: 'Mike Rodriguez',
      role: 'IoT Developer',
      content: 'Best Arduino learning platform I\'ve used. The projects are practical and well-explained.',
      avatar: 'https://ui-avatars.com/api/?name=Mike+Rodriguez&background=f7931e&color=fff'
    },
    {
      name: 'Emma Wilson',
      role: 'Maker Enthusiast',
      content: 'The gamification keeps me motivated. I\'ve learned more in 2 months than in years of trying alone.',
      avatar: 'https://ui-avatars.com/api/?name=Emma+Wilson&background=ffd700&color=000'
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="flex justify-center mb-6">
              <div className="glass-card flex items-center space-x-3 px-6 py-3">
                <Zap className="h-10 w-10 text-yellow-400 pulse-glow" />
                <span className="text-3xl font-bold gradient-text">Unoverse</span>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Master
              <br />
              <span className="gradient-text typewriter">Arduino Programming</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into reality with interactive Arduino courses, 
              hands-on projects, and a thriving maker community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={signInWithGoogle}
                className="btn-primary text-lg px-8 py-4 group"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Start Learning Free</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4 group"
              >
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating Arduino Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 text-orange-500/20"
          >
            <Cpu className="h-16 w-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute top-1/3 right-1/4 text-yellow-500/20"
          >
            <Code className="h-12 w-12" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            className="absolute bottom-1/4 left-1/3 text-amber-500/20"
          >
            <Zap className="h-14 w-14" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="gradient-text">Unoverse</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The most comprehensive and engaging platform for learning Arduino programming and electronics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="card hover-lift text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Loved by <span className="gradient-text">Makers</span> Worldwide
            </h2>
            <p className="text-xl text-gray-300">
              See what our community has to say about their learning journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card hover-lift"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your
              <br />
              <span className="gradient-text">Arduino Journey</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of makers who are already building amazing projects with Arduino. 
              Start learning today with our interactive courses and hands-on projects.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={signInWithGoogle}
              className="btn-primary text-lg px-8 py-4 group"
            >
              <span>Begin Your Adventure</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <p className="text-gray-400 text-sm mt-4">
              Free forever • No credit card required • Start immediately
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage