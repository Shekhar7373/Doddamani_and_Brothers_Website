import { Link } from 'react-router-dom'
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Doddamani & Brothers</h3>
          <p className="text-gray-300">Leading in construction and consulting excellence.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
            <li><Link to="/portfolio" className="text-gray-300 hover:text-white">Portfolio</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li className="text-gray-300 hover:text-white">Construction</li>
            <li className="text-gray-300 hover:text-white">Consulting</li>
            <li className="text-gray-300 hover:text-white">Interior Design</li>
            <li className="text-gray-300 hover:text-white">Civil Engineering</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact Info</h4>
          <div className="space-y-2 text-gray-300">
            <p><Phone size={16} className="inline mr-2" /> +91 94807 50444</p>
            <p><Mail size={16} className="inline mr-2" /> doddamani.brothers@gmail.com</p>
            <p><MapPin size={16} className="inline mr-2" />Shop no 45, Kumaravyasa Complex, Basaveshwara Nagar, Gadag-Betigeri, Karnataka 582101</p>
          </div>
          <div className="flex space-x-4 mt-4">
            {/* <Facebook className="w-5 h-5 hover:text-primary cursor-pointer" /> */}
            <Twitter className="w-5 h-5 hover:text-primary cursor-pointer" />
            {/* <Linkedin className="w-5 h-5 hover:text-primary cursor-pointer" /> */}
            <Instagram className="w-5 h-5 hover:text-primary cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-300">
        <p>&copy; 2024 Doddamani & Brothers. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer