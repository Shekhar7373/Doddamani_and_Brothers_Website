import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { sendToSheet } from '../../utils/sheetdb'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    try {
      await sendToSheet(formData)
      setIsSuccess(true)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (err) {
      setError('Failed to submit. Please try again.')
    }
    setIsLoading(false)
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-8 text-center"
      >
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-full">
            <CheckCircle className="text-white" size={32} />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h3>
        <p className="text-green-700">
          Your message has been received. We'll get back to you soon with more information about your project.
        </p>
      </motion.div>
    )
  }

  const formFields = [
    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com', required: true },
    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210', required: true },
    { name: 'service', label: 'Service Interested In', type: 'text', placeholder: 'e.g., Construction, Consulting', required: true },
  ]

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Form Fields */}
      <div className="grid md:grid-cols-2 gap-6">
        {formFields.slice(0, 2).map((field, index) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white"
            />
          </motion.div>
        ))}
      </div>

      {/* Second row */}
      <div className="grid md:grid-cols-2 gap-6">
        {formFields.slice(2, 4).map((field, index) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
            viewport={{ once: true }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white"
            />
          </motion.div>
        ))}
      </div>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project requirements and goals..."
          required
          rows="5"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white resize-none"
        />
      </motion.div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border-2 border-red-300 rounded-lg p-4 flex items-start gap-3"
        >
          <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
          <p className="text-red-700 font-medium">{error}</p>
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send size={20} />
        {isLoading ? 'Sending...' : 'Send Message'}
      </motion.button>

      {/* Privacy Notice */}
      <p className="text-xs text-gray-500 text-center">
        We respect your privacy. Your information will be used only to contact you regarding your inquiry.
      </p>
    </form>
  )
}

export default ContactForm