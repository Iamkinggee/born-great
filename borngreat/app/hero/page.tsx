


"use client";

import React from 'react';
import {  Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-300 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-white font-semibold text-lg sm:text-xl">Born-great</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#" className="text-white text-xs sm:text-sm font-medium hover:opacity-80 transition">Home</a>
              <a href="#" className="text-white text-xs sm:text-sm font-medium hover:opacity-80 transition">About</a>
              <a href="#" className="text-white text-xs sm:text-sm font-medium hover:opacity-80 transition">Courses</a>
              {/* <a href="#" className="text-white text-xs sm:text-sm font-medium hover:opacity-80 transition">Pricing</a>
              <a href="#" className="text-white text-xs sm:text-sm font-medium hover:opacity-80 transition">Products</a>
              <a href="#" className="text-white text-xs sm:text-sm font-medium hover:opacity-80 transition">Pages</a>
              <a href="#" className="text-white text-xs sm:text-sm font-medium hover:opacity-80 transition">Contact</a> */}
            </div>

            {/* Right Section */}
            <div className="hidden md:flex items-center gap-4">
              <button className="relative">
       
              
              </button>
              <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 lg:px-6 py-2 text-sm rounded-lg font-medium transition">
               Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-gradient-to-b from-cyan-500 to-blue-500 py-4 px-4 space-y-3 border-t border-cyan-400">
              <a href="#" className="block text-white text-sm font-medium hover:opacity-80 transition py-2">Home</a>
              <a href="#" className="block text-white text-sm font-medium hover:opacity-80 transition py-2">About</a>
              <a href="#" className="block text-white text-sm font-medium hover:opacity-80 transition py-2">Courses</a>
              <a href="#" className="block text-white text-sm font-medium hover:opacity-80 transition py-2">Pricing</a>
              <a href="#" className="block text-white text-sm font-medium hover:opacity-80 transition py-2">Products</a>
              <a href="#" className="block text-white text-sm font-medium hover:opacity-80 transition py-2">Pages</a>
              <a href="#" className="block text-white text-sm font-medium hover:opacity-80 transition py-2">Contact</a>
              <button className="w-full bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 text-sm rounded-lg font-medium transition">
                Guardian Login
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen lg:min-h-[calc(100vh-100px)] py-8">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center z-10 order-2 lg:order-1">
            {/* Decorative Elements - Hidden on Mobile */}
            <div className="hidden sm:block absolute left-0 top-20 w-20 h-20 sm:w-24 sm:h-24 opacity-40">
              <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-300">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M50 20 L60 40 L80 45 L65 58 L70 80 L50 70 L30 80 L35 58 L20 45 L40 40 Z" fill="currentColor"/>
              </svg>
            </div>

            <div className="hidden lg:block absolute right-0 top-1/3 w-32 h-32 opacity-30">
              <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                <path d="M50 10 L80 40 L90 70 L60 90 L20 80 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Here Little
              <br />
              <span className="inline-flex items-center gap-2 sm:gap-3">
                Minds Shine
                <svg className="w-12 h-12 sm:w-16 sm:h-16 animate-bounce" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" className="text-white"/>
                  <circle cx="50" cy="50" r="8" fill="currentColor" className="text-yellow-300"/>
                  <path d="M50 15 L55 25 M50 85 L55 75 M15 50 L25 45 M85 50 L75 45" stroke="currentColor" strokeWidth="2" className="text-yellow-300"/>
                </svg>
              </span>
              <br />
              Bright
            </h1>

            <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-md leading-relaxed">
              We believe in nurturing curiosity, fostering creativity, and laying the foundation for a lifelong love of learning.
            </p>

            <button className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 sm:px-8 rounded-lg transition transform hover:scale-105 w-fit text-sm sm:text-base">
              Discover More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Right - Image Section */}
          <div className="relative h-64 sm:h-80 lg:h-full flex items-center justify-center lg:justify-end order-1 lg:order-2">
            {/* Clouds Background */}
            <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
              <div className="absolute bottom-0 left-0 w-32 h-24 sm:w-48 sm:h-32 bg-white rounded-full blur-2xl sm:blur-3xl opacity-40"></div>
              <div className="absolute bottom-12 sm:bottom-16 right-0 w-40 h-32 sm:w-56 sm:h-40 bg-white rounded-full blur-2xl sm:blur-3xl opacity-30"></div>
              <div className="absolute bottom-0 right-12 sm:right-32 w-48 h-36 sm:w-64 sm:h-48 bg-white rounded-full blur-2xl sm:blur-3xl opacity-35"></div>
            </div>

       

            <Image
        src="https://res.cloudinary.com/dcla27ff5/image/upload/v1764951870/vecteezy_two-children-playing-with-a-large-stack-of-colorful-blocks_56827081_kdzxmq.png"  // Your remote URL
      alt="Two children playing with colorful blocks"
    fill
    priority
    sizes="100vw"
    style={{ objectFit: 'cover' }}   
      loader={({ src }) => `${src}?w=1920&q=75`}
      />










            {/* Floating Elements - Hidden on Mobile, Reduced on Tablet */}
            <div className="hidden sm:block absolute top-10 sm:top-20 right-5 sm:right-10 w-10 h-10 sm:w-12 sm:h-12 animate-pulse">
              <svg viewBox="0 0 100 100" className="w-full h-full text-white drop-shadow-lg">
                <path d="M50 10 Q60 40 50 70 Q40 40 50 10 Z" fill="currentColor" opacity="0.8"/>
              </svg>
            </div>

            <div className="hidden sm:block absolute bottom-20 sm:bottom-32 -left-8 sm:-left-10 w-12 h-12 sm:w-16 sm:h-16 animate-bounce" style={{animationDelay: '0.5s'}}>
              <svg viewBox="0 0 100 100" className="w-full h-full text-white drop-shadow-lg">
                <circle cx="30" cy="30" r="8" fill="currentColor"/>
                <line x1="30" y1="40" x2="30" y2="70" stroke="currentColor" strokeWidth="3"/>
                <line x1="30" y1="50" x2="15" y2="60" stroke="currentColor" strokeWidth="3"/>
                <line x1="30" y1="50" x2="45" y2="60" stroke="currentColor" strokeWidth="3"/>
                <line x1="30" y1="70" x2="20" y2="90" stroke="currentColor" strokeWidth="3"/>
                <line x1="30" y1="70" x2="40" y2="90" stroke="currentColor" strokeWidth="3"/>
              </svg>
            </div>

            <div className="hidden md:block absolute top-1/3 right-0 w-12 h-12 lg:w-14 lg:h-14 animate-bounce" style={{animationDelay: '1s'}}>
              <svg viewBox="0 0 100 100" className="w-full h-full text-white drop-shadow-lg">
                <path d="M50 10 L70 30 L60 50 L70 70 L50 60 L30 70 L40 50 L30 30 Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}