import { useState } from 'react'
import { motion } from 'framer-motion'
import { Image, Video } from 'lucide-react'
import ProjectFilter from '../components/Portfolio/ProjectFilter'
import ProjectGallery from '../components/Portfolio/ProjectGallery'
import VideoGallery from '../components/Portfolio/VideoGallery'

const ITEMS_PER_PAGE = 8

const Portfolio = () => {
  const [projectFilter, setProjectFilter] = useState('all')
  const [projectVisibleCount, setProjectVisibleCount] = useState(ITEMS_PER_PAGE)
  const [videoVisibleCount, setVideoVisibleCount] = useState(ITEMS_PER_PAGE)

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete showcase of construction projects, designs, and visual documentation
            </p>
          </motion.div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <Image size={32} className="text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Project Gallery</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl">
              Discover our extensive collection of completed and ongoing projects across residential, commercial, and industrial sectors. Each image tells the story of our commitment to quality and excellence.
            </p>
          </motion.div>
          <ProjectFilter filter={projectFilter} setFilter={setProjectFilter} />
          <ProjectGallery 
            filter={projectFilter} 
            visibleCount={projectVisibleCount} 
            setVisibleCount={setProjectVisibleCount} 
          />
        </div>
      </div>

      {/* Videos Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <Video size={32} className="text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Video Showcase</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl">
              Watch our projects come to life through dynamic video content. From site tours to time-lapses and client testimonials, see the full scope of our work.
            </p>
          </motion.div>
          <VideoGallery 
            filter="all" 
            visibleCount={videoVisibleCount} 
            setVisibleCount={setVideoVisibleCount} 
          />
        </div>
      </div>
    </div>
  )
}

export default Portfolio