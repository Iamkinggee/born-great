// "use client";

// import React, { useState } from 'react';
// import { Check } from 'lucide-react';

// export default function Info() {
//   const [hoveredFeature, setHoveredFeature] = useState(null);
//   const [hoveredImage, setHoveredImage] = useState(null);

//   return (
//     <div className="w-full bg-white">
//       {/* First Section - Importance of Postpartum Care */}
//       <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
//             {/* Left - Image */}
//             <div className="order-2 lg:order-1 flex justify-center">
//               <div className="relative w-full max-w-sm">
//                 {/* Image Container with subtle shadow */}
//                 <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-102">
//                   <div className="aspect-square bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center">
//                     <div className="text-6xl">👩‍🍼</div>
//                   </div>
//                 </div>
                
//                 {/* Decorative circle background */}
//                 <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-3xl bg-orange-100/40 blur-xl"></div>
//               </div>
//             </div>

//             {/* Right - Content */}
//             <div className="order-1 lg:order-2">
//               <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//                 The Importance of Proper Postpartum Care
//               </h2>
              
//               <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
//                 Postpartum care is crucial for the mother's physical and emotional recovery. Our team of experts ensures comfortable recovery through proper nutrition in breast feeding and attentive care.
//               </p>

//               {/* Features List */}
//               <div className="space-y-4 mb-10">
//                 {[
//                   "Best Quality Services",
//                   "Highly Professional Team",
//                   "Commitment to Customers"
//                 ].map((feature, index) => (
//                   <div
//                     key={index}
//                     // onMouseEnter={() => setHoveredFeature(index)}
//                     onMouseLeave={() => setHoveredFeature(null)}
//                     className="flex items-center gap-3 transition-all duration-300 transform"
//                   >
//                     <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300
//                       ${hoveredFeature === index 
//                         ? 'bg-pink-500 scale-110' 
//                         : 'bg-pink-300'
//                       }
//                     `}>
//                       <Check size={18} className="text-white" strokeWidth={3} />
//                     </div>
//                     <span className={`text-gray-700 font-medium transition-all duration-300 
//                       ${hoveredFeature === index ? 'text-gray-900 translate-x-1' : ''}
//                     `}>
//                       {feature}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA Button */}
//               <button className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Second Section - What We Do */}
//       <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
//             {/* Left - Content */}
//             <div>
//               <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//                 What We Do
//               </h2>
              
//               <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
//                 Our goal is to ensure you're confident in your baby's growth and development. We are experienced, trained and equipped with safe, standard procedures and evidence to provide excellence.
//               </p>

//               {/* Services List */}
//               <div className="space-y-4 mb-10">
//                 {[
//                   "Free Medical Services",
//                   "Personalized Care",
//                   "State of the art facility"
//                 ].map((service, index) => (
//                   <div
//                     key={index}
//                     // onMouseEnter={() => setHoveredFeature(index + 3)}
//                     onMouseLeave={() => setHoveredFeature(null)}
//                     className="flex items-center gap-3 transition-all duration-300"
//                   >
//                     <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 transform
//                       ${hoveredFeature === index + 3
//                         ? 'bg-pink-500 scale-110 rotate-12'
//                         : 'bg-pink-300'
//                       }
//                     `}>
//                       <Check size={18} className="text-white" strokeWidth={3} />
//                     </div>
//                     <span className={`text-gray-700 font-medium transition-all duration-300
//                       ${hoveredFeature === index + 3 ? 'text-gray-900 translate-x-1' : ''}
//                     `}>
//                       {service}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA Button */}
//               <button className="px-8 py-3 bg-pink-400 hover:bg-pink-500 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95">
//                 Learn More
//               </button>
//             </div>

//             {/* Right - Image Grid */}
//             <div className="grid grid-cols-2 gap-4 sm:gap-6">
//               {/* Large image top */}
//               <div
//                 // onMouseEnter={() => setHoveredImage(0)}
//                 onMouseLeave={() => setHoveredImage(null)}
//                 className="col-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-102 cursor-pointer"
//               >
//                 <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
//                   <div className={`text-5xl transition-all duration-500 transform
//                     ${hoveredImage === 0 ? 'scale-110 rotate-3' : 'scale-100'}
//                   `}>
//                     👨‍👩‍👧‍👦
//                   </div>
//                 </div>
//               </div>

//               {/* Bottom left image */}
//               <div
//                 // onMouseEnter={() => setHoveredImage(1)}
//                 onMouseLeave={() => setHoveredImage(null)}
//                 className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
//               >
//                 <div className="aspect-square bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
//                   <div className={`text-4xl transition-all duration-500 transform
//                     ${hoveredImage === 1 ? 'scale-110 -rotate-3' : 'scale-100'}
//                   `}>
//                     👶
//                   </div>
//                 </div>
//               </div>

//               {/* Bottom right image */}
//               <div
//                 // onMouseEnter={() => setHoveredImage(2)}
//                 onMouseLeave={() => setHoveredImage(null)}
//                 className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
//               >
//                 <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
//                   <div className={`text-4xl transition-all duration-500 transform
//                     ${hoveredImage === 2 ? 'scale-110 rotate-3' : 'scale-100'}
//                   `}>
//                     👩‍⚕️
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }






"use client";

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';

export default function PostpartumCareSection() {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="w-full bg-white">
      {/* First Section - Importance of Postpartum Care */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left - Image */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-sm">
                {/* Image Container with subtle shadow */}
                <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-102">
                  <div className="aspect-square bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center">
                   
                               <Image
                           src="https://res.cloudinary.com/dcla27ff5/image/upload/v1764951875/vecteezy_two-children-are-smiling-and-posing-for-the-camera_56827160_lfpxs9.png"  // Your remote URL
                         alt="Two children playing with colorful blocks"
                       fill
                       priority
                       sizes="100vw"
                       style={{ objectFit: 'cover' }}   
                         loader={({ src }) => `${src}?w=1920&q=75`}
                         />
                   
                  </div>
                </div>
                
                {/* Decorative circle background */}
                <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-3xl bg-orange-100/40 blur-xl"></div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                The Importance of Proper Postpartum Care
              </h2>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                Postpartum care is crucial for the mother's physical and emotional recovery. Our team of experts ensures comfortable recovery through proper nutrition in breast feeding and attentive care.
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-10">
                {[
                  "Best Quality Services",
                  "Highly Professional Team",
                  "Commitment to Customers"
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    // onMouseEnter={() => setHoveredFeature(idx)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    className="flex items-center gap-3 transition-all duration-300 transform"
                  >
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300
                      ${hoveredFeature === idx 
                        ? 'bg-pink-500 scale-110' 
                        : 'bg-pink-300'
                      }
                    `}>
                      <Check size={18} className="text-white" strokeWidth={3} />
                    </div>
                    <span className={`text-gray-700 font-medium transition-all duration-300 
                      ${hoveredFeature === idx ? 'text-gray-900 translate-x-1' : ''}
                    `}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - What We Do */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left - Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                What We Do
              </h2>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                Our goal is to ensure you're confident in your baby's growth and development. We are experienced, trained and equipped with safe, standard procedures and evidence to provide excellence.
              </p>

              {/* Services List */}
              <div className="space-y-4 mb-10">
                {[
                  "Free Medical Services",
                  "Personalized Care",
                  "State of the art facility"
                ].map((service, idx) => (
                  <div
                    key={idx}
                    // onMouseEnter={() => setHoveredFeature(idx + 3)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    className="flex items-center gap-3 transition-all duration-300"
                  >
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 transform
                      ${hoveredFeature === idx + 3
                        ? 'bg-pink-500 scale-110 rotate-12'
                        : 'bg-pink-300'
                      }
                    `}>
                      <Check size={18} className="text-white" strokeWidth={3} />
                    </div>
                    <span className={`text-gray-700 font-medium transition-all duration-300
                      ${hoveredFeature === idx + 3 ? 'text-gray-900 translate-x-1' : ''}
                    `}>
                      {service}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="px-8 py-3 bg-pink-400 hover:bg-pink-500 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95">
                Learn More
              </button>
            </div>

            {/* Right - Image Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Large image top */}
              <div
                // onMouseEnter={() => setHoveredImage(0)}
                onMouseLeave={() => setHoveredImage(null)}
                className="col-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-102 cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <div className={`text-5xl transition-all duration-500 transform
                    ${hoveredImage === 0 ? 'scale-110 rotate-3' : 'scale-100'}
                  `}>
                  
                  
                              <Image
                          src="https://res.cloudinary.com/dcla27ff5/image/upload/v1764951870/vecteezy_two-children-playing-with-a-large-stack-of-colorful-blocks_56827081_kdzxmq.png"  // Your remote URL
                        alt="Two children playing with colorful blocks"
                      fill
                      priority
                      sizes="100vw"
                      style={{ objectFit: 'cover' }}   
                        loader={({ src }) => `${src}?w=1920&q=75`}
                        />
                  
                  
                  </div>
                </div>
              </div>

              {/* Bottom left image */}
              <div
                // onMouseEnter={() => setHoveredImage(1)}
                onMouseLeave={() => setHoveredImage(null)}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                  <div className={`text-4xl transition-all duration-500 transform
                    ${hoveredImage === 1 ? 'scale-110 -rotate-3' : 'scale-100'}
                  `}>
                  
                  
                              <Image
                          src="https://res.cloudinary.com/dcla27ff5/image/upload/v1764951870/vecteezy_two-children-playing-with-a-large-stack-of-colorful-blocks_56827081_kdzxmq.png"  // Your remote URL
                        alt="Two children playing with colorful blocks"
                      fill
                      priority
                      sizes="100vw"
                      style={{ objectFit: 'cover' }}   
                        loader={({ src }) => `${src}?w=1920&q=75`}
                        />
                  
                  
                  </div>
                </div>
              </div>

              {/* Bottom right image */}
              <div
                // onMouseEnter={() => setHoveredImage(2)}
                onMouseLeave={() => setHoveredImage(null)}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                  <div className={`text-4xl transition-all duration-500 transform
                    ${hoveredImage === 2 ? 'scale-110 rotate-3' : 'scale-100'}
                  `}>
                  
                  
                              <Image
                          src="https://res.cloudinary.com/dcla27ff5/image/upload/v1764951870/vecteezy_two-children-playing-with-a-large-stack-of-colorful-blocks_56827081_kdzxmq.png"  // Your remote URL
                        alt="Two children playing with colorful blocks"
                      fill
                      priority
                      sizes="100vw"
                      style={{ objectFit: 'cover' }}   
                        loader={({ src }) => `${src}?w=1920&q=75`}
                        />
                  
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}