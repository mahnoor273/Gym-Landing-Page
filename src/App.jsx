import React from 'react'
import './index.css'
import Heroimage from './assets/herosection.png'
import logo from './assets/logo.png'
import review from './assets/customerpic.png'
import Aboutimage from './assets/about.png'
import Serviceimage from './assets/service.png'
import GymFacilities from './GymFacility.jsx'
import MeetOurTrainer from './MeetOurTrainers.jsx'
import Customer from './Customer.jsx'

import GymHeroSection from './GymHeroSection.jsx'
import Footer from './Footer.jsx'
const App = () => {
  return (
    <div>
   {/* Navigation Bar */}
    <nav className="relative z-10 w-full px-6 md:px-12 py-4 flex justify-between items-center bg-black">
  {/* Logo */}
  <div className="flex items-center space-x-2">
    <img src={logo} alt="Logo" className="w-40 md:w-56" />
  </div>

  {/* Nav Links */}
  <div className="hidden sm:flex space-x-6 md:space-x-10">
    <a
      href="#"
      className="hover:text-red-500 hover:border-b border-red-600 transition duration-300 text-white"
    >
      Home
    </a>
    <a
      href="#"
      className="hover:text-red-500 hover:border-b border-red-600 transition duration-300 text-white"
    >
      About
    </a>
    <a
      href="#"
      className="hover:text-red-500 hover:border-b border-red-600 transition duration-300 text-white"
    >
      Membership Plans
    </a>
    <a
      href="#"
      className="hover:text-red-500 hover:border-b border-red-600 transition duration-300 text-white"
    >
      Contact Us
    </a>
  </div>

  {/* Mobile Menu Icon (Optional for responsiveness) */}
  <div className="sm:hidden text-white">
    <button className="focus:outline-none">
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
    <div className="relative bg-black text-white min-h-screen flex flex-col">
      {/* Background Image/Overlay Container */}
      <div className="absolute inset-0">
        {/* You'd replace this with a proper background image/video if needed, 
           or use an actual Image component for the athlete */}
        {/* Placeholder for the dramatic gym background with red lighting */}
        <div className="absolute inset-0 bg-cover bg-center opacity-70 " 
             style={{ backgroundImage: `url(${Heroimage})`}}>
        </div>
       
      </div>

     

      {/* Hero Content (Text and Buttons) */}
      <div className="relative z-10 flex-grow flex items-center justify-start p-4 md:p-12 lg:pl-32">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Power Isn't Given,<br />
            It's Lifted
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Muscles don't grow on wishes they <br />grow with work
          </p>
          
          {/* Buttons */}
          <div className="flex space-x-4 mb-16">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition duration-300">
              Start Lifting
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-black transition duration-300">
              Learn More
            </button>
          </div>
          
          {/* Happy Builders Section */}
          <div className="flex items-center space-x-3 mt-10">
            {/* Image Avatars - Replace with actual images/avatars */}
            <div className="flex -space-x-2">
             
              <img src={review} alt="" />
            </div>
            <p className="text-lg font-bold  text-gray-200">
              50+ happy builders
            </p>
          </div>
        </div>
      </div>
      
      {/* Optional: Add a subtle overlay for better text contrast if not using a dark background image */}
      <div className="absolute inset-0 bg-black opacity-30 pointer-events-none"></div>

    </div>


 {/* Aboutus */}
 <section className="bg-black text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Text Section */}
      <div className="max-w-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">About Us</h2>
        <p className="text-gray-300 text-2xl font-medium mb-8 leading-relaxed">
          At Muscle Lift, we
          don’t just build <br />bodies — we build mindsets. <br /> Every rep, every drop of
          sweat, is a <br />step toward the strongest version <br />of you.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
          Start Now
        </button>
      </div>

      {/* Image Section */}
      <div className="max-w-md">
        <img
          src={Aboutimage}
          alt="About Muscle Lift"
          className="rounded-xl shadow-lg shadow-red-600/40"
        />
      </div>
    </section>


{/* Services */}

    <section className="bg-black text-white py-5 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
      
      {/* Left Side: Text */}
      <div className="max-w-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Services</h2>
        
        <ul className="text-gray-300 text-base md:text-lg leading-relaxed space-y-3">
          <li className="flex items-center gap-2">
            <span className="text-white text-2xl">•</span>
            <span className='text-2xl font-medium'>Muscle Building</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-white text-2xl">•</span>
            <span className='text-2xl font-medium'>Fat Burn Training</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-white text-2xl">•</span>
            <span className='text-2xl font-medium'>Strength + Conditioning</span>
          </li>
        </ul>

        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 mt-17">
          Level Up Your Body
        </button>
      </div>

      {/* Right Side: Image */}
      <div className="max-w-md">
        <img
          src={Serviceimage}
          alt="Gym Training"
          className="rounded-xl shadow-lg shadow-red-600/40"
        />
      </div>
    </section>


{/* GymFacility */}
<GymFacilities />

<MeetOurTrainer />
<Customer />
<GymHeroSection />
<Footer />
    </div>
  )
}

export default App
