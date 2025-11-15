import { motion } from 'framer-motion'
import { Target, ShieldCheck, Award } from 'lucide-react'
import AnandImg from '../../assets/images/Anand.jpg';

const Mission = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h1 
                className="text-5xl md:text-6xl font-black text-gray-900 mb-4 leading-tight"
              >
                Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Mission & Vision</span>
              </motion.h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-6"></div>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              At <span className="font-bold text-blue-600">Doddamani & Brothers</span>, we are committed to delivering excellence in every project. Our mission is to transform visions into reality through innovative construction solutions and expert consulting.
            </p>
            
            <div className="space-y-6">
              {/* Mission Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 hover:border-blue-400 rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Target className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Mission</h3>
                    <p className="text-gray-700 leading-relaxed">To provide sustainable, high-quality construction services that exceed client expectations and set new industry standards.</p>
                  </div>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 hover:border-amber-400 rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-amber-600 to-orange-600 p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Vision</h3>
                    <p className="text-gray-700 leading-relaxed">To be the leading construction firm known for innovation, integrity, and transformative impact across all sectors.</p>
                  </div>
                </div>
              </motion.div>

              {/* Values Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 hover:border-purple-400 rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Our Values</h3>
                    <p className="text-gray-700 leading-relaxed">Quality, Integrity, Innovation, and Customer Satisfaction drive every decision we make.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Section - Portrait Orientation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group flex justify-center"
          >
            {/* Decorative background circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/15 transition-all duration-300"></div>
              <div className="absolute w-72 h-72 bg-cyan-600/10 rounded-full blur-2xl group-hover:bg-cyan-600/15 transition-all duration-300"></div>
            </div>
            
            {/* Portrait Image Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300 max-w-xs">
              <img
                src={AnandImg}
                alt="Our Mission"
                className="w-80 h-full object-cover group-hover:scale-105 transition-transform duration-300 aspect-[3/4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Badge - 10+ Years */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-8 -right-6 bg-white p-4 rounded-xl shadow-2xl border-2 border-blue-500"
            >
              <p className="text-sm font-bold text-gray-900">10+</p>
              <p className="text-xs text-blue-600 font-semibold">Years Experience</p>
            </motion.div>

            {/* Badge - Team Members */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
              className="absolute top-8 -left-6 bg-gradient-to-br from-blue-600 to-cyan-600 text-white p-4 rounded-xl shadow-2xl"
            >
              <p className="text-sm font-bold">50+</p>
              <p className="text-xs font-semibold">Team Members</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Mission