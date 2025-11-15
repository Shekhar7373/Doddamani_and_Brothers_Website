import { motion } from 'framer-motion'
import { Filter } from 'lucide-react'

const ProjectFilter = ({ filter, setFilter }) => {
  const filters = ['all', 'ongoing', 'completed', '2024', '2023', '2022', '2021']

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-4 mb-12"
    >
      <Filter size={20} className="text-gray-500 mt-4" />
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            filter === f
              ? 'bg-primary text-white shadow-lg'
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </motion.div>
  )
}

export default ProjectFilter