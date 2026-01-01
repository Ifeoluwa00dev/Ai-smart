import React from 'react';
import logo from '../assets/images/okay.png'

export default function AboutUs() {
  return (
    <div id='about-us' className="min-h-screen bg-[rgb(13,29,44)] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 bg-[rgb(13,29,44)] rounded-2xl flex items-center justify-center shadow-xl">
               <img src={logo} alt="" />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  AI SMART FLUID TRADING is an AI-powered copy trading system that lets you earn passively while AI trades for you 
                </p>
                <p>
                  Our system uses institutional and psychological Trading concepts to mirror trades from a master provider account directly into your CPT Markets account. No guesswork. Just automated, smart and disciplined trading.
                </p>
                <p>
                  Trading Days: The AI trades only on Tuesday, Wednesday and Thursday to focus on the most optimal market conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}