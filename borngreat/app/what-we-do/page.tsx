"use client";

import React, { useState } from 'react';

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Babysitting",
      description: "Reliable caregivers for convenient and culturally effective care",
      icon: "🍼",
      color: "from-yellow-100 to-yellow-50"
    },
    {
      id: 2,
      title: "Nanny Care",
      description: "Professional live-in nannies for safe, nurturing and culturally effective care",
      icon: "🏠",
      color: "from-blue-100 to-blue-50"
    },
    {
      id: 3,
      title: "Mother's Helpers",
      description: "Young caregivers for affordable home and household effective care",
      icon: "🍭",
      color: "from-pink-100 to-pink-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-white relative overflow-hidden">
      {/* Decorative Floating Elements */}
      <div className="absolute top-20 left-12 w-32 h-32 opacity-40 animate-bounce" style={{animationDuration: '4s'}}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#fbbf24" strokeWidth="2"/>
          <path d="M30 50 Q50 30 70 50 Q50 70 30 50" fill="#fbbf24" opacity="0.3"/>
        </svg>
      </div>

      <div className="absolute bottom-40 right-20 w-40 h-40 opacity-30 animate-bounce" style={{animationDuration: '5s', animationDelay: '0.5s'}}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <ellipse cx="50" cy="60" rx="30" ry="20" fill="#fca5a5" opacity="0.5"/>
          <circle cx="40" cy="40" r="15" fill="#fca5a5" opacity="0.6"/>
          <circle cx="60" cy="35" r="12" fill="#fca5a5" opacity="0.5"/>
        </svg>
      </div>

      <div className="absolute top-1/3 right-10 w-48 h-48 opacity-25 animate-pulse">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="20" y="30" width="60" height="50" fill="#fcd34d" rx="8"/>
          <circle cx="35" cy="45" r="8" fill="#fff7ed"/>
          <circle cx="65" cy="45" r="8" fill="#fff7ed"/>
          <path d="M40 60 Q50 68 60 60" fill="none" stroke="#fed7aa" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Services Cards Section */}
        <div className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
              {services.map((service) => (
                <div
                  key={service.id}
                //   onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative p-6 sm:p-8 rounded-2xl transition-all duration-500 cursor-pointer transform
                    ${hoveredCard === service.id 
                      ? 'scale-105 shadow-2xl -translate-y-2' 
                      : hoveredCard !== null 
                      ? 'scale-95 opacity-70' 
                      : 'shadow-lg hover:shadow-xl'
                    }
                    bg-gradient-to-br ${service.color} border-2 border-white/50
                  `}
                >
                  {/* Card Shine Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}></div>

                  {/* Icon */}
                  <div className={`text-5xl sm:text-6xl mb-4 transition-all duration-500 transform
                    ${hoveredCard === service.id ? 'scale-125 rotate-12' : 'group-hover:scale-110 group-hover:rotate-6'}
                  `}>
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl sm:text-2xl font-bold text-gray-800 mb-3 transition-all duration-500
                    ${hoveredCard === service.id ? 'text-gray-900' : ''}
                  `}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm sm:text-base text-gray-600 leading-relaxed transition-all duration-500
                    ${hoveredCard === service.id ? 'text-gray-700' : ''}
                  `}>
                    {service.description}
                  </p>

                  {/* Animated Bottom Border */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-300 to-pink-400 transition-all duration-500 rounded-full
                    ${hoveredCard === service.id ? 'w-full' : 'w-0 group-hover:w-1/3'}
                  `}></div>
                </div>
              ))}
            </div>

            {/* Welcome Section */}
            <div className="text-center mt-12 sm:mt-16 lg:mt-20 mb-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 transition-all duration-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-400">
                Welcome to Born-great
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-500 hover:text-gray-700">
                We are trusted and recommended for experienced and skilled personnel available on short notice to enable you to work remotely or focus on what matters
              </p>

              {/* Decorative Line */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="w-12 h-1 bg-gradient-to-r from-transparent to-orange-300 rounded-full"></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div className="w-12 h-1 bg-gradient-to-l from-transparent to-pink-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

      
      </div>

 
    </div>
  );
}







