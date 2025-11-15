import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Bhoomika Balikai",
      text: "Excellent work, good service, also good response & perfect finishing. The team exceeded our expectations on every level.",
      rating: 4,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Anusha T",
      text: "We had an outstanding experience with Doddamani & Brothers Construction. Right from initial discussions to final handover, everything was handled with professionalism, care, and dedication. A big shoutout to Anand Doddamani for his technical expertise and friendly nature.",
      rating: 5,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Iranna Huchchannavar",
      text: "Your dedication to building strong foundations both literally and in teamwork is truly commendable. Your attention to detail and commitment to quality make every project a success. Keep up the great work!",
      rating: 4.8,
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Prashant D",
      text: "I highly recommend Doddamani & Brothers. The owner did the estimate and stayed right on target. The crew is very skilled, efficient, responsive and easy to communicate with.",
      rating: 4,
      color: "from-green-500 to-green-600"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
            What Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from satisfied clients who trust our expertise
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop={true}
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="group relative"
                >
                  {/* Card Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                  {/* Card */}
                  <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 p-10 md:p-12">
                    {/* Quote Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 bg-gradient-to-r ${testimonial.color} rounded-xl flex items-center justify-center mb-8 shadow-lg`}
                    >
                      <Quote size={28} className="text-white" />
                    </motion.div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star 
                            size={20} 
                            className={`${
                              i < Math.floor(testimonial.rating) 
                                ? 'text-yellow-400 fill-yellow-400' 
                                : i < testimonial.rating
                                ? 'text-yellow-400 fill-yellow-200'
                                : 'text-gray-300'
                            }`} 
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-xl text-gray-700 italic leading-relaxed mb-8">
                      "{testimonial.text}"
                    </p>

                    {/* Divider */}
                    <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>

                    {/* Client Name */}
                    <div>
                      <h4 className={`text-lg font-bold bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent`}>
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">Verified Client</p>
                    </div>

                    {/* Bottom Accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.color} rounded-b-2xl`}></div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="swiper-button-prev-custom p-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="swiper-button-next-custom p-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600">
            <span className="font-bold text-gray-900">100+ Happy Clients</span> trust Doddamani & Brothers for their construction needs
          </p>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style>{`
        .mySwiper .swiper-pagination-bullet {
          background: #1e40af;
          opacity: 0.5;
        }
        .mySwiper .swiper-pagination-bullet-active {
          background: #1e40af;
          opacity: 1;
        }
      `}</style>
    </section>
  )
}

export default Testimonials