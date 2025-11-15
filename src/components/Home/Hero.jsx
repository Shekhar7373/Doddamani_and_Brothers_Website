import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1589939705882-e07fc62f36b0?w=1600&q=80')",
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Enhanced gradient overlay with better professional look */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/75 to-blue-950/80"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center text-white relative z-10 py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
        >
          <CheckCircle2 size={18} className="text-blue-300" />
          <span className="text-sm font-semibold text-blue-200">Industry Leading Excellence</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 text-white leading-tight"
        >
          Building Your <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
            Future Today
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-100 leading-relaxed"
        >
          Expert construction and consulting services for 
          <br className="hidden md:block" />
          <span className="text-blue-300 font-semibold">residential</span>, 
          <span className="text-cyan-300 font-semibold"> commercial</span>, and 
          <span className="text-blue-300 font-semibold"> industrial</span> projects
        </motion.p>

        {/* Company name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
            Doddamani & Brothers
          </p>
          <p className="text-sm text-gray-300 mt-2">10+ Years of Trusted Construction Excellence</p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/portfolio"
            className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center gap-2 text-lg"
          >
            View Portfolio
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
          </Link>
          <Link
            to="/contact"
            className="group border-2 border-white/30 hover:border-white/60 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          >
            Get Free Quote
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="mt-16"
        >
          <p className="text-gray-300 text-sm mb-2">Scroll to explore</p>
          <svg className="w-6 h-6 mx-auto text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero