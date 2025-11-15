import { motion } from 'framer-motion'
import { Calendar, CheckCircle2, TrendingUp } from 'lucide-react'

const Timeline = () => {
  const timelineEvents = [
    { 
      year: 2009, 
      title: "Founded", 
      description: "Doddamani & Brothers was established with a vision to revolutionize construction.",
      icon: "🚀"
    },
    { 
      year: 2012, 
      title: "First Major Project", 
      description: "Completed our first commercial building project with excellence.",
      icon: "🏗️"
    },
    { 
      year: 2015, 
      title: "Expanded Services", 
      description: "Added consulting and interior design divisions to our portfolio.",
      icon: "📈"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to industry leadership, witness our growth and commitment to excellence
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 via-cyan-600 to-blue-600"></div>

          {/* Timeline events */}
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex items-center mb-16 md:mb-20 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
                >
                  {/* Year and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="text-blue-600" size={20} />
                      <span className="font-bold text-2xl text-blue-600">{event.year}</span>
                    </div>
                    <span className="text-3xl">{event.icon}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </motion.div>
              </div>

              {/* Center circle */}
              <div className="w-0 flex justify-center">
                <motion.div
                  whileInView={{ scale: [0.8, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg z-10 flex-shrink-0"
                >
                  <CheckCircle2 className="text-white" size={28} />
                </motion.div>
              </div>

              {/* Spacer */}
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>

        {/* Future Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-2xl">
            <div className="flex items-start gap-4">
              <TrendingUp size={32} className="flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Looking Ahead</h3>
                <p className="text-lg leading-relaxed">
                  We continue to innovate and expand our services to meet the evolving needs of our clients. With cutting-edge technology and a dedicated team, we're committed to building tomorrow's infrastructure today.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline