import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const clients = [
//   'Gadag Hospital'
]

const ClientLogos = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-lg font-semibold text-gray-700 mb-6">Trusted by local clients & partners</h3>
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 2200, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 }
            }}
          >
            {clients.map((c, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex items-center justify-center p-4">
                  <div className="bg-gray-100 rounded-lg px-6 py-4 shadow-sm text-center text-gray-700 text-sm font-medium">
                    {c}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default ClientLogos
