import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

const CallFloating = () => {
  return (
    <motion.a
      href="tel:+919480750444"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="fixed right-6 bottom-6 z-50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg flex items-center justify-center text-white">
        <Phone size={20} />
      </div>
    </motion.a>
  )
}

export default CallFloating
