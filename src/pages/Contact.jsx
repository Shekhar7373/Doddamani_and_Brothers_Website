import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import ContactForm from "../components/Contact/ContactForm";
import Map from "../components/Contact/Map";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 94807 50444",
      link: "tel:+919480750444",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Mail,
      title: "Email",
      value: "doddamani.brothers@gmail.com",
      link: "mailto:doddamani.brothers@gmail.com",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Shop no 45, Kumaravyasa Complex, Basaveshwara Nagar, Gadag-Betigeri, Karnataka 582101",
      link: "#",
      color: "from-orange-600 to-red-600"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", time: "8:00 AM - 6:00 PM", isOpen: true },
    { day: "Saturday", time: "9:00 AM - 4:00 PM", isOpen: true },
    { day: "Sunday", time: "Closed", isOpen: false }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Hero Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Get In <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear about your project. Contact us for a free consultation and let's build something amazing together.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          {/* Contact Form and Info */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Contact Form - spans 2 columns on large screens */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg">
                    <CheckCircle2 className="text-white" size={24} />
                  </span>
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 block group"
                  >
                    <div className={`bg-gradient-to-r ${info.color} p-3 rounded-lg w-fit mb-4`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-1">{info.title}</h3>
                    <p className="text-gray-900 font-semibold text-lg group-hover:text-blue-600 transition-colors">
                      {info.value}
                    </p>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 p-8 mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-lg">
                <Clock className="text-white" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Business Hours</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {businessHours.map((hour, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-lg p-6 shadow-md border border-gray-200"
                >
                  <p className="text-gray-600 font-semibold mb-2">{hour.day}</p>
                  <p className={`text-lg font-bold ${hour.isOpen ? 'text-green-600' : 'text-red-600'}`}>
                    {hour.time}
                  </p>
                  {hour.isOpen && (
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                      Open
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">
                <h2 className="text-2xl font-bold">Our Location</h2>
                <p className="text-blue-100 mt-2">Find us on the map</p>
              </div>
              <Map />
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait! Contact us today for a free consultation and let our experts guide you through your construction journey.
          </p>
          <a
            href="tel:+919480750444"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Phone size={20} />
            Call Us Now
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
