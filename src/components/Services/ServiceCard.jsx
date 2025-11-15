import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, CheckCircle } from 'lucide-react'
import { useState } from 'react'

const ServiceCard = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative">
        <img src={service.image} alt={service.title} loading="lazy" />
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
          {service.icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96' : 'max-h-0'} mb-4`}>
          <ul className="space-y-2 text-gray-600">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-primary font-semibold hover:text-blue-800 transition-colors"
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
          {isExpanded ? <ChevronUp size={20} className="ml-1" /> : <ChevronDown size={20} className="ml-1" />}
        </button>
      </div>
    </motion.div>
  )
}

export default ServiceCard