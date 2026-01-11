import React from 'react';
import Serviceimage from './assets/service.png';

const Services = () => {
  return (
    <section className="bg-black text-white py-8 sm:py-12 px-4 sm:px-6 md:px-20
                        flex flex-col md:flex-row items-center justify-between gap-10">

      {/* Left Side: Text */}
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Services
        </h2>

        <ul className="text-gray-300 space-y-4">
          <li className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-white text-xl sm:text-2xl">•</span>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              Muscle Building
            </span>
          </li>

          <li className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-white text-xl sm:text-2xl">•</span>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              Fat Burn Training
            </span>
          </li>

          <li className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-white text-xl sm:text-2xl">•</span>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              Strength + Conditioning
            </span>
          </li>
        </ul>

        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold
                           py-3 px-6 rounded-lg transition duration-300
                           mt-8">
          Level Up Your Body
        </button>
      </div>

      {/* Right Side: Image */}
      <div className="max-w-md w-full flex justify-center">
        <img
          src={Serviceimage}
          alt="Gym Training"
          className="w-full h-auto rounded-xl shadow-lg shadow-red-600/40"
        />
      </div>

    </section>
  );
};

export default Services;

