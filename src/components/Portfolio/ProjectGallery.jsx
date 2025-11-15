import { motion } from 'framer-motion'
import { Eye, ExternalLink, X } from 'lucide-react'
import { useState } from 'react'
import projectsData from '../../data/projectsData.js'

const ITEMS_PER_PAGE = 8

const ProjectGallery = ({ filter, visibleCount, setVisibleCount }) => {
  const [selectedProject, setSelectedProject] = useState(null)

  let filteredProjects = projectsData
  if (filter === 'ongoing' || filter === 'completed') {
    filteredProjects = projectsData.filter(p => p.status === filter)
  } else if (filter !== 'all') {
    filteredProjects = projectsData.filter(p => p.year === Number(filter))
  }

  const visibleProjects = filteredProjects.slice(0, visibleCount)

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-center text-white p-4">
                <Eye size={32} className="mx-auto mb-4 opacity-80" />
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
              </div>
            </div>
            <div className="p-6">
              <span className="text-primary font-semibold">{project.category.toUpperCase()}</span>
              <h3 className="text-xl font-bold mt-1 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {visibleCount < filteredProjects.length && (
        <div className="text-center mt-8">
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
            onClick={() => setVisibleCount(visibleCount + ITEMS_PER_PAGE)}
          >
            Load More
          </button>
        </div>
      )}

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg overflow-hidden max-w-4xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Section */}
            <div className="relative bg-black max-h-96 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details Section */}
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">{selectedProject.category}</span>
                  <h2 className="text-3xl font-bold mt-3 mb-4 text-gray-900">{selectedProject.title}</h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">{selectedProject.description}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Meta Information */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <p className="text-sm text-gray-500 uppercase font-semibold">Year</p>
                  <p className="text-lg font-bold text-gray-900 mt-1">{selectedProject.year}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-semibold">Status</p>
                  <p className="text-lg font-bold text-gray-900 mt-1 capitalize">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      selectedProject.status === 'completed' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {selectedProject.status}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-semibold">Category</p>
                  <p className="text-lg font-bold text-gray-900 mt-1">{selectedProject.category}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default ProjectGallery