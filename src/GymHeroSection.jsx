import React from 'react';
import Memberpic from './assets/membershippic.png';

const GymHeroSection = () => {
  return (
    <div className="relative bg-black flex items-center justify-center overflow-hidden h-[60vh] md:h-[80vh]">

      {/* === 🖼️ Background Image Wrapper === */}
      <div className="absolute inset-0 flex justify-center">
        <div
          className="
            h-full 
            bg-cover bg-center 
            rounded-2xl shadow-2xl
          "
          style={{
            backgroundImage: `url(${Memberpic})`,

            // 👉 customize these values:
            width: '80%',       // control side spacing (100% = full width, lower = more space on sides)
            opacity: 0.9,        // image visibility (1 = fully visible)
            transition: 'all 0.3s ease', // smooth when you tweak sizes dynamically
            marginLeft: '2px'
          }}
        ></div>
      </div>

      {/* === 🌑 Dark Overlay === */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(0,0,0,0.6)', // change 0.6 to control darkness
        }}
      ></div>

      {/* === ✍️ Text Content === */}
      <div className="relative z-10 text-white text-center p-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 leading-tight">
          No More Waiting
        </h1>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Just Training
        </h2>

        <p className="text-lg sm:text-xl font-medium mb-10 text-gray-300">
          Real Results. Build the Body <br /> You Deserve
        </p>

        <button
          className="
            bg-red-600 hover:bg-red-700 
            text-white font-bold 
            py-3 px-8 rounded 
            shadow-xl uppercase tracking-wider 
            text-lg transition duration-300 
            transform hover:scale-105
          "
          onClick={() => alert('Redirecting to membership sign-up...')}
        >
          Get Membership Now
        </button>
      </div>
    </div>
  );
};

export default GymHeroSection;
