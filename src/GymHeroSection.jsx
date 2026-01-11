import React from 'react';
import Memberpic from './assets/membershippic.png';

const GymHeroSection = () => {
  return (
    <div className="relative bg-black flex items-center justify-center overflow-hidden 
                    h-[65vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">

      {/* === 🖼️ Background Image Wrapper === */}
      <div className="absolute inset-0 flex justify-center items-center px-3 sm:px-6">
        <div
          className="
            h-full 
            w-full sm:w-[90%] md:w-[85%] lg:w-[80%]
            bg-cover bg-center 
            rounded-2xl shadow-2xl
            transition-all duration-300
          "
          style={{
            backgroundImage: `url(${Memberpic})`,
            opacity: 0.9,
          }}
        ></div>
      </div>

      {/* === 🌑 Dark Overlay === */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
      ></div>

      {/* === ✍️ Text Content === */}
      <div className="relative z-10 text-white text-center px-4 sm:px-6 md:px-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-2 leading-tight">
          No More Waiting
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Just Training
        </h2>

        <p className="text-base sm:text-lg md:text-xl font-medium mb-8 text-gray-300">
          Real Results. Build the Body <br className="hidden sm:block" /> You Deserve
        </p>

        <button
          className="
            bg-red-600 hover:bg-red-700 
            text-white font-bold 
            py-3 px-6 sm:px-8 rounded 
            shadow-xl uppercase tracking-wider 
            text-base sm:text-lg 
            transition duration-300 
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

