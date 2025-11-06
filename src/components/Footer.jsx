import React from "react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter,
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaArrowRight,
  FaWhatsapp
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                           radial-gradient(circle at 80% 80%, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-xl">
              <h3 className="text-3xl md:text-4xl font-light mb-3">
                Stay <span className="text-amber-400">Connected</span>
              </h3>
              <p className="text-gray-400 font-light text-lg">
                Subscribe to receive exclusive collections, design insights, and special offers.
              </p>
            </div>
            
            <div className="w-full lg:w-auto lg:min-w-[400px]">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 outline-none focus:border-amber-400 transition-all duration-300"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full font-light hover:from-amber-600 hover:to-amber-700 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 flex items-center gap-2 whitespace-nowrap">
                  Subscribe
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-light mb-2">
                Imperial<span className="text-amber-400">StoneX</span>
              </h2>
              <p className="text-gray-400 font-light leading-relaxed">
                Crafting timeless elegance with the world's finest natural stones since 1995.
              </p>
            </div>
            
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, href: "#", color: "hover:bg-blue-600" },
                { icon: <FaInstagram />, href: "#", color: "hover:bg-pink-600" },
                { icon: <FaLinkedinIn />, href: "#", color: "hover:bg-blue-700" },
                { icon: <FaTwitter />, href: "#", color: "hover:bg-sky-500" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-11 h-11 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-light mb-6 text-amber-400">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Collections", "Our Process", "Gallery", "Testimonials"].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-light flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-light mb-6 text-amber-400">Our Collections</h4>
            <ul className="space-y-3">
              {[
                "Italian Marble",
                "Granite Stones",
                "Onyx Collection",
                "Travertine",
                "Quartzite",
                "Custom Designs"
              ].map((product, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-light flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 transition-all duration-300" />
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-light mb-6 text-amber-400">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300 font-light">
                <FaMapMarkerAlt className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <span>123 Marble Street, Jaipur, Rajasthan 302001, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 font-light">
                <FaPhone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-amber-400 transition-colors">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300 font-light">
                <FaEnvelope className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href="mailto:info@imperialstonex.com" className="hover:text-amber-400 transition-colors">
                  info@imperialstonex.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300 font-light">
                <FaWhatsapp className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href="https://wa.me/911234567890" className="hover:text-amber-400 transition-colors">
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm font-light text-center md:text-left">
              © {currentYear} ImperialStoneX. All rights reserved. | Crafted with precision and passion.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors font-light">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors font-light">
                Terms of Service
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors font-light">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <FaArrowRight className="w-5 h-5 -rotate-90" />
      </button>
    </footer>
  );
};

export default Footer;