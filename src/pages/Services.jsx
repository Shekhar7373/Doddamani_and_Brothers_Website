import { useState } from 'react'
import projectsData from '../data/projectsData'
import ServiceCard from '../components/Services/ServiceCard'

const ITEMS_PER_PAGE = 8

export default function Services() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)
  const visibleServices = projectsData.slice(0, visibleCount)

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your construction and consulting needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {visibleServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        {visibleCount < projectsData.length && (
          <div className="text-center mt-8">
            <button
              className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
              onClick={() => setVisibleCount(visibleCount + ITEMS_PER_PAGE)}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  )
}