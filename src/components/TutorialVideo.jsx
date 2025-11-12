import React, { useState } from 'react';
import { Play, BookOpen, TrendingUp, BarChart3, CheckCircle2 } from 'lucide-react';

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
      icon: BookOpen,
      title: "Understanding Forex",
      topics: [
        "What is Forex Trading?",
        "Major Currency Pairs",
        "How the Market Works",
        "Trading Sessions"
      ]
    },
    {
      icon: BarChart3,
      title: "Technical Analysis",
      topics: [
        "Reading Price Charts",
        "Support & Resistance",
        "Key Indicators (RSI, MACD)",
        "Chart Patterns"
      ]
    },
    {
      icon: TrendingUp,
      title: "Trading Strategies",
      topics: [
        "Trend Following",
        "Breakout Trading",
        "Range Trading",
        "Risk Management"
      ]
    },
    {
        icon: BookOpen,
        title: "Understanding Forex",
        topics: [
          "What is Forex Trading?",
          "Major Currency Pairs",
          "How the Market Works",
          "Trading Sessions"
        ]
      }
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
          <p className="text-xl text-black">
            Learn to trade currencies like a professional
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-700">
          
          <button
            onClick={() => setActiveSection('path')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeSection === 'path'
                ? 'border-b-4 border-amber-500 text-black'
                : 'text-black hover:text-amber-400'
            }`}
          >
            Learning Path
          </button>
          
          <button
            onClick={() => setActiveSection('video')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeSection === 'video'
                ? 'border-b-4 border-amber-500 text-black'
                : 'text-black hover:text-amber-400'
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
          <div className="grid md:grid-cols-4 gap-6">
            {learningPath.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
  key={index}
  className="relative bg-[rgb(13,29,44)] rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/20 transition-all"
>

                    {/* Connecting Line (hidden on mobile, shown on desktop between cards) */}
              {index < learningPath.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(100%)] w-8 h-0.5 bg-gray-300 z-0" />
              )}

                  
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="text-sm text-gray-400">
                      Step {index + 1} of 4
                    </div>
                    <div className="mt-2 bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all"
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>




    </section>
    
  );
}