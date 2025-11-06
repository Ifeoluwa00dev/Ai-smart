import React from 'react';
import logo from '../assets/images/Logo.png'

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
                  We are a forward-thinking company dedicated to delivering innovative solutions 
                  that make a difference. Our mission is to empower businesses and individuals 
                  through cutting-edge technology and exceptional service.
                </p>
                <p>
                  Founded with a vision to transform the industry, we've grown into a trusted 
                  partner for clients around the world. Our team of experts brings together 
                  diverse skills and perspectives to tackle complex challenges with creativity 
                  and precision.
                </p>
                <p>
                  We believe in building lasting relationships, fostering innovation, and 
                  maintaining the highest standards of quality in everything we do. Join us 
                  on our journey to shape the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}