import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Send, ArrowRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Educational Service', href: '#services' },
    { name: 'VVIP Trading Alerts', href: '#services' },
    { name: 'Affiliate Program', href: '#services' },
    
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', name: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Instagram, href: '#', name: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Linkedin, href: '#', name: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Youtube, href: '#', name: 'YouTube', color: 'hover:bg-red-600' }
  ];

  return (
    <footer className="bg-gradient-to-b from-[rgb(13,29,44)] to-[rgb(8,20,32)] text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                AI SmartFlu
              </h3>
              <p className="text-amber-500 text-sm font-semibold mt-1">Trading Intelligence</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering traders with AI-driven strategies and automated trading solutions for consistent profits.
            </p>
            
            {/* Social Links */}
            {/* <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 hover:-translate-y-1`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-amber-500 to-amber-600 rounded-full"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-amber-500 to-amber-600 rounded-full"></div>
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-amber-500 to-amber-600 rounded-full"></div>
              Get In Touch
            </h4>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <a href="mailto:support@aismartflu.com" className="flex items-start gap-3 text-gray-400 hover:text-amber-400 transition-colors text-sm group">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>support@aismartflu.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-start gap-3 text-gray-400 hover:text-amber-400 transition-colors text-sm group">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>+44 7886 980102</span>
              </a>
              {/* <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Global Trading Hub</span>
              </div> */}
            </div>

            {/* Newsletter */}
            <div className="bg-slate-800/50 rounded-xl p-4 border border-gray-700">
              <p className="text-sm text-gray-400 mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-slate-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
                <button className="bg-gradient-to-r from-amber-500 to-amber-600 p-2 rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} AI SmartFlu Trading. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-amber-400 transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-700">|</span>
            <a href="#terms" className="text-gray-400 hover:text-amber-400 transition-colors">
              Terms of Service
            </a>
            <span className="text-gray-700">|</span>
            <a href="#disclaimer" className="text-gray-400 hover:text-amber-400 transition-colors">
              Risk Disclaimer
            </a>
          </div>
        </div>

        {/* Risk Warning */}
        <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            <span className="text-amber-400 font-semibold">Risk Warning:</span> Trading forex and CFDs carries a high level of risk and may not be suitable for all investors. 
            Past performance is not indicative of future results. Only invest capital you can afford to lose.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;