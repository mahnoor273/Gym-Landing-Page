import React from 'react';
import Aboutimage from './assets/about.png';

const Aboutus = () => {
  return (
    <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-20 
                        flex flex-col md:flex-row items-center justify-between gap-10">

      {/* Text Section */}
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
          About Us
        </h2>

        <p className="text-gray-300 text-base sm:text-lg md:text-2xl 
                      font-medium mb-8 leading-relaxed">
          At Muscle Lift, we don’t just build <br className="hidden sm:block" />
          bodies — we build mindsets. <br className="hidden sm:block" />
          Every rep, every drop of sweat, is a <br className="hidden sm:block" />
          step toward the strongest version <br className="hidden sm:block" />
          of you.
        </p>

        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold 
                           py-3 px-6 rounded-lg transition duration-300">
          Start Now
        </button>
      </div>

      {/* Image Section */}
      <div className="max-w-md w-full flex justify-center">
        <img
          src={Aboutimage}
          alt="About Muscle Lift"
          className="w-full h-auto rounded-xl shadow-lg shadow-red-600/40"
        />
      </div>

    </section>
  );
};

export default Aboutus;

