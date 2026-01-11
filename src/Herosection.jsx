import React from 'react';
import Heroimage from './assets/herosection.png';
import logo from './assets/logo.png';
import review from './assets/customerpic.png';

const Herosection = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="relative z-20 w-full px-4 sm:px-6 md:px-12 py-4 flex justify-between items-center bg-black">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-32 sm:w-40 md:w-56" />
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-8">
          {['Home', 'About', 'Membership Plans', 'Contact Us'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white hover:text-red-500 hover:border-b border-red-600 transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-black text-white min-h-screen flex flex-col">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${Heroimage})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 flex-grow flex items-center 
                        justify-center md:justify-start 
                        px-4 sm:px-6 md:px-12 lg:pl-32">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Power Isn't Given,<br />
              It's Lifted
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
              Muscles don't grow on wishes <br className="hidden sm:block" />
              they grow with work
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition duration-300">
                Start Lifting
              </button>
              <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-black transition duration-300">
                Learn More
              </button>
            </div>

            {/* Happy Builders */}
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <img src={review} alt="Happy customers" className="w-24 sm:w-28" />
              <p className="text-base sm:text-lg font-bold text-gray-200">
                50+ happy builders
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;

