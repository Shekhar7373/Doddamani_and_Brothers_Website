import { motion } from 'framer-motion'
import { HardHat, ClipboardCheck, Home, Building, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const ServicesHighlight = () => {
  const services = [
    {
      icon: <HardHat size={56} />,
      title: "Construction",
      description: "Full-service construction from planning to completion",
      gradient: "from-blue-600 to-cyan-600",
      accent: "blue"
    },
    {
      icon: <ClipboardCheck size={56} />,
      title: "Consulting",
      description: "Expert advice for your construction projects",
      gradient: "from-purple-600 to-pink-600",
      accent: "purple"
    },
    {
      icon: <Home size={56} />,
      title: "Interior Design",
      description: "Modern and functional interior solutions",
      gradient: "from-orange-600 to-red-600",
      accent: "orange"
    },
    {
      icon: <Building size={56} />,
      title: "Civil Engineering",
      description: "Infrastructure and structural engineering services",
      gradient: "from-green-600 to-emerald-600",
      accent: "green"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction and consulting solutions tailored to your project needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300`}></div>

              {/* Card */}
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300">
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all`}
                >
                  <span className="text-white">{service.icon}</span>
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 min-h-12">{service.description}</p>

                {/* Learn More Link */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-blue-600 font-semibold group/link"
                >
                  <span>Learn More</span>
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </motion.div>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Explore All Services
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesHighlight