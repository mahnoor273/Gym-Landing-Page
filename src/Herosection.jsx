import React, { useState } from 'react';
import Heroimage from './assets/herosection.png';
import logo from './assets/logo.png';
import review from './assets/customerpic.png';

const Herosection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Navigation Bar */}
    <nav className="relative z-50 bg-black px-4 sm:px-6 md:px-12 py-4 flex justify-between items-center">

      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-32 sm:w-40 md:w-56" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-white font-medium">
        <a href="#home" className="hover:text-red-500 hover:border-b border-red-600 transition duration-300">
          Home
        </a>
        <a href="#about" className="hover:text-red-500 hover:border-b border-red-600 transition duration-300">
          About
        </a>
        <a href="#membership" className="hover:text-red-500 hover:border-b border-red-600 transition duration-300">
          Membership Plans
        </a>
        <a href="#services" className="hover:text-red-500 hover:border-b border-red-600 transition duration-300">
          Services
        </a>
        <a href="#trainers" className="hover:text-red-500 hover:border-b border-red-600 transition duration-300">
          Trainers
        </a>
        <a href="#reviews" className="hover:text-red-500 hover:border-b border-red-600 transition duration-300">
          Reviews
        </a>
        <a href="#footer" className="hover:text-red-500 hover:border-b border-red-600 transition duration-300">
          Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-white">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <span className="text-2xl font-bold">✕</span>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center space-y-6 py-6 md:hidden">

          <a href="#home" onClick={() => setMenuOpen(false)} className="text-lg hover:text-red-500">
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-lg hover:text-red-500">
            About
          </a>
          <a href="#membership" onClick={() => setMenuOpen(false)} className="text-lg hover:text-red-500">
            Membership Plans
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-lg hover:text-red-500">
            Services
          </a>
          <a href="#trainers" onClick={() => setMenuOpen(false)} className="text-lg hover:text-red-500">
            Trainers
          </a>
          <a href="#reviews" onClick={() => setMenuOpen(false)} className="text-lg hover:text-red-500">
            Reviews
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-lg hover:text-red-500">
            Contact
          </a>

        </div>
      )}

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

