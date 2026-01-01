import React, { useState, useEffect, useRef } from 'react';
import logo from "../../assets/images/okay.png";
import {X, Users} from "lucide-react"

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [openCommunity, setOpenCommunity] = useState(false);
  const statsRef = useRef(null);

  // Avoid scrolling
  useEffect(() => {
    if (openCommunity || mobileMenuOpen) {
      // Disable scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scroll
      document.body.style.overflow = 'auto';
    }
  
    // Cleanup on unmount (safety)
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openCommunity, mobileMenuOpen]);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div id='home' className="relative min-h-screen flex flex-col overflow-hidden bg-[url('./assets/images/hero.png')] bg-cover bg-center bg-no-repeat">
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/85"></div>

      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-500/5 via-transparent to-transparent"></div>

      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-3xl animate-pulse-slow"></div>

      
     {/* Navbar */}
<nav className={`fixed top-0 left-0 w-full z-20 transition-all duration-500 ${scrolled ? 'bg-slate-900/90 backdrop-blur-xl shadow-2xl shadow-black/20' : 'bg-slate-900/90 lg:bg-transparent'}`}>
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="flex items-center justify-between py-5">
      {/* Logo */}
      <a href="/" className="flex items-center space-x-3 group">
        <div className="w-40 h-12 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            <img src={logo} alt="" />
          </div>
        </div>
      </a>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8">
        <ul className="flex items-center space-x-8">
          {['Home', 'About Us', 'Services'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-300 hover:text-amber-400 font-medium text-sm transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="w-px h-6 bg-gray-700"></div>

        <div className="flex items-center space-x-3">
          <a href="#contact" className="inline-block px-5 py-2.5 border-2 border-amber-500/50 text-amber-400 rounded-lg hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 text-sm font-semibold backdrop-blur-sm">
            Contact Us
          </a>

          <button
            onClick={() => setOpenCommunity(true)}
            className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 transition-all px-5 py-3 rounded-xl font-semibold text-white shadow-lg hover:scale-105"
          >
            <Users className="w-5 h-5" />
            Join our communities
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>

    {/* Mobile Menu */}
    {mobileMenuOpen && (
      <div className="lg:hidden pb-6 animate-fade-in-down">
        <ul className="space-y-4 mb-6">
          {['Home', 'About Us', 'Services'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block text-gray-300 hover:text-amber-400 font-medium transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col space-y-3 px-4">
          <a href="#contact" className="block w-full text-center px-5 py-2.5 border-2 border-amber-500/50 text-amber-400 rounded-lg hover:bg-amber-500 hover:text-white transition-all duration-300 font-semibold">
            Contact Us
          </a>

          <button
            onClick={() => setOpenCommunity(true)}
            className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 transition-all px-5 py-3 rounded-xl font-semibold text-white shadow-lg hover:scale-105"
          >
            <Users className="w-5 h-5" />
            Join our communities
          </button>
        </div>
      </div>
    )}
  </div>
</nav>

{/* Community Popup */}
{openCommunity && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
    <div className="bg-[rgb(13,29,44)] w-full max-w-sm rounded-2xl p-6 shadow-2xl animate-[pop_0.25s_ease-out]">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">Join Our Community</h2>
        <button
          className="text-gray-300 hover:text-white"
          onClick={() => setOpenCommunity(false)}
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Community Links */}
      <div className="space-y-3">
        <a
          href="https://discord.gg/6eX4tTdX"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-slate-800 hover:bg-slate-700 p-3 rounded-xl transition flex items-center gap-3"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/906/906361.png" className="w-6 h-6" alt="Discord" />
          <span className="text-white font-medium">Discord</span>
        </a>

        <a
          href="https://t.me/SmartFlu"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-slate-800 hover:bg-slate-700 p-3 rounded-xl transition flex items-center gap-3"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" className="w-6 h-6" alt="Telegram" />
          <span className="text-white font-medium">Telegram</span>
        </a>

        {/* <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-slate-800 hover:bg-slate-700 p-3 rounded-xl transition flex items-center gap-3"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" className="w-6 h-6" alt="Twitter" />
          <span className="text-white font-medium">Twitter / X</span>
        </a> */}

        <a
          href="https://whatsapp.com/channel/0029VbBGaIU42DchbyYOnd3c"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-slate-800 hover:bg-slate-700 p-3 rounded-xl transition flex items-center gap-3"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="w-6 h-6" alt="WhatsApp" />
          <span className="text-white font-medium">Whatsapp Channel</span>
        </a>
      </div>
    </div>
  </div>
)}
        <div className="pb-24"></div>
      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-8 leading-tight animate-slide-up">
            <span className="block">AI SmartFlu</span>
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent inline-block animate-gradient">
              Trading
            </span>
          </h1>

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 mb-8 animate-fade-in hover:bg-white/10 transition-all duration-300">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse-fast"></span>
            <span className="text-gray-300 text-sm font-semibold tracking-wide">Our Mission</span>
          </div>

          {/* Description */}
          <p className="text-white text-lg md:text-l lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up-delay">
          To help Traders and investors earn confidently through AI-driven institutional trading, eliminating emotional decisions and promoting long-term financial growth
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-slide-up-delay-2 mb-20">
  <button
    onClick={() => {
      const section = document.getElementById("start");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
    className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:from-amber-600 hover:to-amber-700 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
  >
    <span className="flex items-center justify-center space-x-2">
      <span>Get Started</span>
      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </span>
  </button>
</div>



        

          {/* Stats with Counter Animation */}
          <div ref={statsRef}
  className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-12 border-t border-white/10
    transition-all duration-700 transform
    ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {[
              { value: 500, suffix: '+', label: 'Active Traders' },
              { value: 98, suffix: '%', label: 'Success Rate' },
              { value: 100, suffix: 'M+', label: 'Trading Volume' }
            ].map((stat, index) => (
              <StatCounter 
                key={stat.label}
                targetValue={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                isVisible={statsVisible}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow">
        <div className="flex flex-col items-center space-y-2 text-gray-500 hover:text-amber-400 transition-colors cursor-pointer">
          <span className="text-xs font-medium">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -30px) scale(1.1);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-30px, 30px) scale(1.1);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.1;
          }
        }

        @keyframes pulse-fast {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(-10px) translateX(-50%);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.5) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.4s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.2s both;
        }

        .animate-slide-up-delay-2 {
          animation: slide-up 0.8s ease-out 0.4s both;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-fast {
          animation: pulse-fast 1.5s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
};

// Animated Counter Component
const StatCounter = ({ targetValue, suffix, label, isVisible, delay }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
        
        const duration = 2000;
        const steps = 60;
        const increment = targetValue / steps;
        const stepDuration = duration / steps;
        let currentStep = 0;

        const counter = setInterval(() => {
          currentStep++;
          if (currentStep <= steps) {
            setCount(Math.min(Math.floor(increment * currentStep), targetValue));
          } else {
            setCount(targetValue);
            clearInterval(counter);
          }
        }, stepDuration);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, hasAnimated, targetValue, delay]);

  return (
    <div
      className={`text-center group cursor-default transition-all duration-[800ms] ease-out transform
        ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative mb-2">
        <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-br from-amber-400 to-amber-600 bg-clip-text text-transparent mb-3 
          group-hover:scale-110 transition-transform duration-300">
          {count}{suffix}
        </div>

        {isVisible && (
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-600/20 blur-2xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        )}
      </div>

      <div className="text-gray-400 text-sm md:text-base font-medium group-hover:text-gray-300 transition-colors duration-300">
        {label}
      </div>
    </div>
  );
};

export default Hero;