import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useState } from 'react'
import videosData from '../../data/videosData.js'

const VideoGallery = ({ filter, visibleCount, setVisibleCount }) => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const ITEMS_PER_PAGE = 8

  let filteredVideos = videosData
  if (filter !== 'all' && filter !== 'projects' && filter !== 'ongoing' && filter !== 'completed') {
    // For year filters, only show projects
    filteredVideos = []
  } else if (filter === 'all') {
    filteredVideos = videosData
  }

  const visibleVideos = filteredVideos.slice(0, visibleCount)

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleVideos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedVideo(video)}
          >
            <div className="relative overflow-hidden h-64">
              <img
                src={video.thumbnail}
                alt={video.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                <div className="bg-primary/80 hover:bg-primary p-4 rounded-full transition-all duration-300 transform group-hover:scale-110">
                  <Play size={32} className="text-white fill-white" />
                </div>
              </div>
              <div className="absolute top-3 right-3 bg-gray-900/70 text-white px-2 py-1 rounded text-sm font-semibold">
                {video.duration}
              </div>
            </div>
            <div className="p-6">
              <span className="text-primary font-semibold text-sm uppercase">{video.category}</span>
              <h3 className="text-xl font-bold mt-2 mb-2 line-clamp-2">{video.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">{video.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {visibleCount < filteredVideos.length && (
        <div className="text-center mt-8">
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
            onClick={() => setVisibleCount(visibleCount + ITEMS_PER_PAGE)}
          >
            Load More Videos
          </button>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg overflow-hidden max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-black">
              <iframe
                width="100%"
                height="500"
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-primary font-semibold text-sm uppercase">{selectedVideo.category}</span>
                  <h2 className="text-2xl font-bold mt-2">{selectedVideo.title}</h2>
                  <p className="text-gray-600 mt-2">{selectedVideo.description}</p>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ✕
                </button>
              </div>
              <div className="text-sm text-gray-500">
                <span className="mr-4">Duration: {selectedVideo.duration}</span>
                <span>Year: {selectedVideo.year}</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default VideoGallery
