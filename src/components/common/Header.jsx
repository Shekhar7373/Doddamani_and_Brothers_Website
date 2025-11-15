import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-gradient-to-br from-slate-900/40 via-blue-900/30 to-slate-900/40 border-b border-blue-400/20 shadow-2xl">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Header Content */}
      <div className="relative z-10 container mx-auto px-4 py-4">
        <div className="flex justify-between items-center gap-4">
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 flex-shrink-0 group"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <img
                src="https://res.cloudinary.com/dqojj8h2u/image/upload/v1759133176/Logo_yebaxd.webp"
                alt="Doddamani & Brothers Logo"
                className="h-14 w-14 rounded-full shadow-xl border-2 border-blue-400/50 relative bg-white/10 backdrop-blur-sm"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex flex-col"
            >
              <span className="text-lg font-black bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent drop-shadow-lg">
                Doddamani
              </span>
              <span className="text-xs font-bold text-blue-300 tracking-widest">& BROTHERS</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  className="relative group px-5 lg:px-6 py-3 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300"
                >
                  {/* Background */}
                  {isActive(item.to) ? (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 rounded-lg shadow-lg"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-300"></div>
                  )}

                  {/* Text */}
                  <span className={`relative z-10 ${
                    isActive(item.to)
                      ? 'text-white drop-shadow-lg'
                      : 'text-gray-100 group-hover:text-white'
                  }`}>
                    {item.label}
                  </span>

                  {/* Hover effect */}
                  {!isActive(item.to) && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-3/4 transition-all duration-300"></div>
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-all duration-300 backdrop-blur-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden relative z-10 bg-gradient-to-b from-blue-950/80 to-slate-950/80 backdrop-blur-xl border-t border-blue-400/20 overflow-hidden"
        >
          {/* Mobile Menu Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-cyan-600/5 pointer-events-none"></div>

          <div className="relative z-10 px-4 py-6 space-y-2 container mx-auto">
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  className={`block px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                    isActive(item.to)
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                      : 'text-gray-100 hover:bg-white/10 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  )
}

export default Header