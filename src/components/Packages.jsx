import React from 'react';
import { BookOpen, Bell, Users, ArrowRight, Sparkles, TrendingUp, Gift } from "lucide-react";

const Packages = () => {
  const products = [
    {
      id: 1,
      icon: BookOpen,
      title: "Educational Service",
      tagline: "Master Trading While Earning",
      description: `Unlock comprehensive trading education with step-by-step tutorials, institutional trading concepts, and weekly market insights. Perfect for both beginners starting their journey and experienced traders leveling up their skills.`,
      features: [
        "Step-by-step video tutorials",
        "Institutional trading concepts",
        "Weekly market analysis",
        "24/7 learning resources"
      ],
      badge: "Most Popular",
      buttonText: "Start Learning",
      gradient: "from-blue-500 to-cyan-500",
      bgPattern: "bg-blue-500/10"
    },
    {
      id: 2,
      icon: Bell,
      title: "VVIP Trading Alerts",
      tagline: "Premium AI-Powered Signals",
      description: `Receive exclusive, high-confidence trading alerts powered by advanced AI algorithms. Get real-time notifications for optimal entry and exit points, maximizing your profit potential with precision timing.`,
      features: [
        "Real-time AI signals",
        "High-confidence trades only",
        "Mobile push notifications",
        "Priority support access"
      ],
      badge: "Premium",
      buttonText: "Get Alerts",
      gradient: "from-amber-500 to-orange-500",
      bgPattern: "bg-amber-500/10"
    },
    {
      id: 3,
      icon: Users,
      title: "Affiliate Program",
      tagline: "Earn More, Together",
      description: `Build your income by sharing AI SmartFluid Trading with your network. Earn generous commissions on every successful referral and enjoy passive income as your network grows and thrives.`,
      features: [
        "Competitive commission rates",
        "Lifetime recurring earnings",
        "Marketing materials provided",
        "Dedicated affiliate dashboard"
      ],
      badge: "High Earning",
      buttonText: "Become Partner",
      gradient: "from-purple-500 to-pink-500",
      bgPattern: "bg-purple-500/10"
    }
  ];

  return (
    <div id='services' className="bg-gradient-to-b from-[rgb(13,29,44)] via-[rgb(15,32,48)] to-[rgb(13,29,44)] py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-amber-400 text-sm font-semibold">Premium Services</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
          Our Services
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Choose the perfect plan to accelerate your trading journey
        </p>
      </div>

      {/* Service Cards */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-16 relative z-10">
        {products.map((product, index) => {
          const Icon = product.icon;
          return (
            <div
              key={product.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${product.gradient} rounded-[24px] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`}></div>
              
              {/* Card */}
              <div className="relative h-full bg-[rgb(20,35,55)] rounded-[24px] overflow-hidden border border-gray-800 group-hover:border-amber-500/50 transition-all duration-500">
                {/* Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <div className={`px-3 py-1 bg-gradient-to-r ${product.gradient} rounded-full text-xs font-bold text-white shadow-lg`}>
                    {product.badge}
                  </div>
                </div>

                {/* Background Pattern */}
                <div className={`absolute inset-0 ${product.bgPattern} opacity-50`}>
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                  }}></div>
                </div>

                {/* Content */}
                <div className="relative p-8 flex flex-col h-full">
                  {/* Icon with animated background */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {product.title}
                    </h2>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                      {product.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-6 flex-1">
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient}`}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <button className={`group/btn relative w-full py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-95`}>
                    {/* Button Background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} transition-all duration-300`}></div>
                    <div className="absolute inset-0 bg-white/0 group-hover/btn:bg-white/10 transition-all duration-300"></div>
                    
                    {/* Button Content */}
                    <span className="relative flex items-center justify-center gap-2">
                      {product.buttonText}
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>

                {/* Hover Effect - Corner Accent */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${product.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500`}></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Section */}
      <div className="max-w-4xl mx-auto mt-20 text-center px-6 relative z-10">
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 border border-amber-500/20 rounded-2xl p-8">
          <Gift className="w-12 h-12 text-amber-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">
            Not sure which service is right for you?
          </h3>
          <p className="text-gray-400 mb-6">
            Book a free consultation with our experts to find the perfect match for your trading goals
          </p>
          <a href="#contact">
  <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
    Schedule Free Consultation
  </button>
</a>
        </div>
      </div>
    </div>
  );
};

export default Packages;