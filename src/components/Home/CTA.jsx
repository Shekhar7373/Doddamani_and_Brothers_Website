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
        {/* Top Badge - subtle */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-6 backdrop-blur-sm"
        >
          <CheckCircle2 size={16} className="text-blue-200" />
          <span className="text-sm text-blue-200">Free consultation — no obligation</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug"
        >
          Ready to discuss your next project?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Request a free site visit or an on-site estimate — no obligation. We'll provide a clear timeline and realistic quote.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          {/* Primary CTA */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200"
            >
              Request a Quote
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <a
              href="tel:+919480750444"
              className="group inline-flex items-center gap-2 border-2 border-white/20 bg-white/5 text-white px-6 py-3 rounded-lg font-semibold text-base shadow-sm hover:bg-white/10 transition-all duration-200"
            >
              <Phone size={18} />
              Schedule a Call
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