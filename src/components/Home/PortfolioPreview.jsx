import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Eye, ArrowRight, Maximize2 } from 'lucide-react'
import projectsData from '../../data/projectsData'

const PortfolioPreview = () => {
  // Fetch only first 3 projects for preview
  const projects = projectsData.slice(0, 3)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our excellence in construction, design, and innovation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-72"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={`${project.title} - ${project.category}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                loading="lazy"
              />

              {/* Overlay - Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="mb-4 p-3 bg-blue-600/80 rounded-full backdrop-blur-sm"
                >
                  <Eye size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-blue-100 font-semibold uppercase tracking-wider">
                  {project.category}
                </p>
                <p className="text-xs text-gray-200 mt-2">{project.year}</p>
              </motion.div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 size={20} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            to="/portfolio" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group"
          >
            <span>View All Projects</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-gray-600 text-sm mt-4">
            Explore 50+ completed projects in our portfolio
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioPreview