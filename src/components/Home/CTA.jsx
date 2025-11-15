import { motion } from 'framer-motion'
import { Phone, Mail, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
        >
          <CheckCircle2 size={18} className="text-blue-300" />
          <span className="text-sm font-semibold text-blue-200">Limited Time Offer</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black mb-6 leading-tight"
        >
          Ready to Start Your
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
            Next Project?
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Get in touch with our experts today for a <span className="font-bold text-white">free consultation</span> and personalized quote
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
        >
          {/* Primary CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              Get Free Quote
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="tel:+919480750444"
              className="group inline-flex items-center gap-3 border-2 border-white hover:bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Phone size={24} />
              Call Now
            </a>
          </motion.div>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          {/* Phone */}
          <motion.a
            href="tel:+919480750444"
            whileHover={{ y: -5 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 rounded-xl p-6 transition-all duration-300 group"
          >
            <div className="flex items-center justify-center gap-3 text-blue-100 hover:text-white transition-colors">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
                <Phone size={24} className="text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs text-blue-200 uppercase tracking-wider">Call Us</p>
                <p className="font-bold text-lg group-hover:text-white transition-colors">+91 94807 50444</p>
              </div>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:doddamani.brothers@gmail.com"
            whileHover={{ y: -5 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 rounded-xl p-6 transition-all duration-300 group"
          >
            <div className="flex items-center justify-center gap-3 text-blue-100 hover:text-white transition-colors">
              <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                <Mail size={24} className="text-white" />
              </div>
              {/* <div className="text-left">
                <p className="text-xs text-blue-200 uppercase tracking-wider">Email Us</p>
                <p className="font-bold text-lg group-hover:text-white transition-colors">doddamani.brothers@gmail.com</p>
              </div> */}
            </div>
          </motion.a>
        </motion.div>

        {/* Bottom Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-blue-200 text-sm">
            ✓ Free Consultation • ✓ No Hidden Costs • ✓ 24/7 Support
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA