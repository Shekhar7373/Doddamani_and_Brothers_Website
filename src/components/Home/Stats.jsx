import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { Users, Building2, Award, Clock } from 'lucide-react'

const Stats = () => {
  const stats = [
    { 
      icon: <Building2 size={40} />, 
      number: 250, 
      label: "Projects Completed", 
      suffix: "+",
      color: "from-blue-600 to-cyan-600"
    },
    { 
      icon: <Users size={40} />, 
      number: 50, 
      label: "Happy Clients", 
      suffix: "+",
      color: "from-purple-600 to-pink-600"
    },
    { 
      icon: <Award size={40} />, 
      number: 10, 
      label: "Years Experience", 
      suffix: "+",
      color: "from-orange-600 to-red-600"
    },
    { 
      icon: <Clock size={40} />, 
      number: 98, 
      label: "On Time Delivery", 
      suffix: "%",
      color: "from-green-600 to-emerald-600"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            By The Numbers
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Our track record speaks for itself - trusted by hundreds of clients
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Card Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>

              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  {stat.icon}
                </motion.div>

                {/* Number */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-5xl lg:text-6xl font-black mb-3 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
                >
                  <CountUp 
                    end={stat.number} 
                    duration={2.5}
                    suffix={stat.suffix}
                    preserveValue={true}
                  />
                </motion.div>

                {/* Label */}
                <p className="text-lg text-blue-100 font-semibold">{stat.label}</p>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-b-2xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats