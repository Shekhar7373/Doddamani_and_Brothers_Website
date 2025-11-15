import { motion } from 'framer-motion'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '400px'
}

// Replace with your actual coordinates
const center = {
  lat: 15.432728115099382,
  lng: 75.63467920898597
}

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY // Use your .env variable
  })

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 text-center">Our Location</h3>
        <p className="text-gray-600 text-center mb-6">Shop no 45, Kumaravyasa Complex, Basaveshwara Nagar, Gadag-Betigeri, Karnataka 582101</p>
      </div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <div className="h-96 flex items-center justify-center">Loading Map...</div>
      )}
    </motion.section>
  )
}

export default Map