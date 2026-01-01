import React, { useState } from 'react';
import { Play, UserPlus, CreditCard, Link, DollarSign } from 'lucide-react';

export default function ForexTutorial() {
  const [activeSection, setActiveSection] = useState('path');

  const tutorials = [
    {
      id: 1,
      title: "Forex Trading for Beginners",
      youtubeId: "qvPuj03zpRk", // Replace with actual YouTube video ID
      duration: "15:30",
      description: "Complete introduction to forex trading"
    },
    {
      id: 2,
      title: "Technical Analysis Basics",
      youtubeId: "d_DiEDE-9MY", // Replace with actual YouTube video ID
      duration: "12:45",
      description: "Learn chart reading and indicators"
    },
    {
      id: 3,
      title: "Risk Management Essentials",
      youtubeId: "M7lc1UVf-VE", // Replace with actual YouTube video ID
      duration: "10:20",
      description: "Protect your capital effectively"
    }
  ];

  const [selectedVideo, setSelectedVideo] = useState(tutorials[0]);

  const learningPath = [
    {
      id: 1,
      icon: UserPlus, // Registration → User icon
      title: "Register & Verify Your Account",
      description: "Create and verify your trading account with CPT Markets. Use the official referral link to ensure your account is correctly connected to AI SmartFlu’s system.",
    },
    {
      id: 2,
      icon: CreditCard, // Funding → Card icon
      title: "Fund Your Account (Minimum $100)",
      description: "Deposit at least $50 to start trading. The AI trades based on a percentage of your equity — higher capital may generate higher profits.",
    },
    {
      id: 3,
      icon: Link, // Connecting accounts → Link icon
      title: "Connect to the Provider Account",
      description: "Link your CPT Markets account to the AI SmartFlu Provider Account via our copy-trading system to mirror all trades executed by the AI in real-time.",
    },
    {
      id: 4,
      icon: DollarSign, // Profit → Dollar icon
      title: "Earn & Share Profits Weekly",
      description: "AI trades automatically using advanced trading strategies. You keep 70% of the weekly profit while a 30% performance fee is deducted. No hidden fees.",
    },
  ];

  return (


    <section id='start'>

<div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto p-6">

    
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-5xl font-bold mb-4 bg-amber-400 bg-clip-text text-transparent">
            Get Started Guide
          </h1>
          <p className="text-xl text-white">
            Learn to trade currencies like a professional
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-700">
          
          <button
            onClick={() => setActiveSection('path')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeSection === 'path'
                ? 'border-b-4 border-amber-500 text-white'
                : 'text-amber-400 hover:text-amber-400'
            }`}
          >
            How to Begin
          </button>
          
          <button
            onClick={() => setActiveSection('video')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeSection === 'video'
                ? 'border-b-4 border-amber-500 text-white'
                : 'text-amber-400 hover:text-amber-400'
            }`}
          >
            Video Tutorials
          </button>




        </div>

        {/* Video Section */}
        {activeSection === 'video' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Video Player */}
            <div className="lg:col-span-2">
              <div className="bg-[rgb(13,29,44)] rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h2 className="text-3xl font-bold mb-3">{selectedVideo.title}</h2>
                  <p className="text-gray-400 mb-4">{selectedVideo.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      {selectedVideo.duration}
                    </span>
                    <span>•</span>
                    <span>Free Tutorial</span>
                  </div>
                </div>
              </div>

              
              
            </div>

            {/* Playlist Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[rgb(13,29,44)] rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Tutorial Playlist</h3>
                <div className="space-y-3">
                  {tutorials.map((tutorial, index) => (
                    <button
                      key={tutorial.id}
                      onClick={() => setSelectedVideo(tutorial)}
                      className={`w-full text-left p-4 rounded-xl transition-all ${
                        selectedVideo.id === tutorial.id
                          ? 'bg-amber-600 shadow-lg shadow-blue-500/50'
                          : 'bg-slate-700 hover:bg-slate-600'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          selectedVideo.id === tutorial.id
                            ? 'bg-black'
                            : 'bg-slate-600'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold mb-1 truncate">{tutorial.title}</h4>
                          <p className="text-sm text-gray-400">{tutorial.duration}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Additional Resources */}
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <h4 className="font-bold mb-3">Additional Resources</h4>
                  <div className="space-y-2">
                    <a
                      href="https://www.babypips.com/learn/forex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
                    >
                      <span className="font-semibold">BabyPips School</span>
                      <p className="text-sm text-gray-400">Free forex education</p>
                    </a>
                    <a
                      href="https://www.tradingview.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
                    >
                      <span className="font-semibold">TradingView</span>
                      <p className="text-sm text-gray-400">Charting platform</p>
                    </a>
                    <a
                      href="https://www.forexfactory.com/calendar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
                    >
                      <span className="font-semibold">Economic Calendar</span>
                      <p className="text-sm text-gray-400">Track news events</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Learning Path Section */}


{activeSection === 'path' && (
  <div className="relative">
    {/* Animated Background */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
      {learningPath.map((step, index) => {
        const Icon = step.icon;
        const isLast = index === learningPath.length - 1;
        const progress = ((index + 1) / learningPath.length) * 100;

        return (
          <div
            key={step.id}
            className="group relative"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Glow Effect on Hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-amber-500 to-blue-500 rounded-[20px] opacity-0 group-hover:opacity-75 blur-lg transition-all duration-500"></div>
            
            {/* Card Container */}
            <div className="relative h-full bg-[rgb(13,29,44)] rounded-2xl overflow-hidden border border-gray-800 group-hover:border-amber-500/50 transition-all duration-500 group-hover:-translate-y-2">
              
              {/* Top Gradient Bar */}
              <div className="h-1 bg-gradient-to-r from-blue-500 via-amber-500 to-blue-500" style={{ 
                width: `${progress}%`,
                transition: 'width 1s ease-out'
              }}></div>

              {/* Connecting Line with Pulse Animation */}
              {!isLast && (
                <>
                  <div className="hidden lg:block absolute top-20 left-[calc(100%)] w-8 h-0.5 bg-gradient-to-r from-gray-600 to-transparent z-0" />
                  <div className="hidden lg:block absolute top-20 left-[calc(100%+2rem)] w-2 h-2 bg-amber-500 rounded-full animate-ping z-0" />
                </>
              )}

              {/* Step Number Badge */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center font-bold text-xl text-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Icon + Title with Animation */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300 leading-tight">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Description with improved readability */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-5 group-hover:text-gray-200 transition-colors">
                  {step.description}
                </p>

                {/* Highlight Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {index === 0 && (
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold">
                      Quick Setup
                    </span>
                  )}
                  {index === 1 && (
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                      Flexible Capital
                    </span>
                  )}
                  {index === 2 && (
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-semibold">
                      Auto-Trading
                    </span>
                  )}
                  {index === 3 && (
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-xs font-semibold">
                      Weekly Profits
                    </span>
                  )}
                </div>

                {/* Step Counter with Enhanced Progress */}
                <div className="pt-6 border-t border-gray-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400 font-medium">
                      Step {index + 1} of {learningPath.length}
                    </span>
                    <span className="text-sm font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                      {progress.toFixed(0)}%
                    </span>
                  </div>
                  
                  {/* Animated Progress Bar */}
                  <div className="relative bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 via-amber-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${progress}%` }}
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                  
                  {/* Completion Message */}
                  {progress === 100 && (
                    <div className="mt-3 flex items-center gap-2 text-green-400 text-xs font-semibold animate-fade-in">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Ready to start earning!</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Gradient Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </div>
        );
      })}
    </div>

    {/* Add required animations to your CSS/Tailwind config */}
    <style jsx>{`
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .animate-shimmer {
        animation: shimmer 2s infinite;
      }
      
      .animate-fade-in {
        animation: fade-in 0.5s ease-out;
      }
      
      .line-clamp-5 {
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `}</style>
  </div>
)}
      </div>
    </div>




    </section>
    
  );
}