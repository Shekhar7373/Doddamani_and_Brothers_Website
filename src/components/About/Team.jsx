import { motion } from "framer-motion";
import { Briefcase, Mail, Phone, Linkedin, Award } from "lucide-react";
import AnandImg from "../../assets/images/Anand.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Anand N Doddamani",
      role: "CEO & Founder",
      image: AnandImg,
      bio: "With 10+ years in construction, Anand leads our vision for excellence and innovation.",
      mail: "doddamani.brothers@gmail.com",
      phone: "94807 50444",
      speciality: "Construction Management",
      badge: "Industry Leader"
    },
  ];

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
            Meet Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to delivering excellence and innovation
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-300">
                
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="text-white text-center">
                      <div className="flex justify-center gap-3 mb-3">
                        <motion.a
                          whileHover={{ scale: 1.2 }}
                          href={`mailto:${member.mail}`}
                          className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
                        >
                          <Mail size={20} />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.2 }}
                          href={`tel:${member.phone}`}
                          className="bg-cyan-600 hover:bg-cyan-700 p-3 rounded-full transition-colors"
                        >
                          <Phone size={20} />
                        </motion.a>
                      </div>
                      <p className="text-sm font-semibold">{member.speciality}</p>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Award size={14} />
                    {member.badge}
                  </div>
                </div>

                {/* Info */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold">
                        <Briefcase size={18} />
                        {member.role}
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>

                  {/* Contact Info */}
                  <div className="space-y-3 border-t border-gray-200 pt-6">
                    <a 
                      href={`mailto:${member.mail}`}
                      className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors group/link"
                    >
                      <Mail size={18} className="text-blue-600 group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm break-all">{member.mail}</span>
                    </a>
                    <a 
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-3 text-gray-700 hover:text-cyan-600 transition-colors group/link"
                    >
                      <Phone size={18} className="text-cyan-600 group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm">+91 {member.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-12">
            <p className="text-lg text-gray-700 mb-4">
              Have a project in mind? Connect with our team today!
            </p>
            <a 
              href="tel:+919480750444"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              <Phone size={20} />
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
