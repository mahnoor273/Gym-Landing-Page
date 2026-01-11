import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 sm:px-10 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* === Quick Links === */}
        <div className="md:ml-10">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-red-500 transition-colors">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition-colors">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition-colors">Reviews</a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition-colors">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* === Opening Hours === */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <FiClock className="text-red-500 text-xl" />
              <span>Male — Mon–Sat 7am – 10pm</span>
            </li>
            <li className="flex items-center gap-2">
              <FiClock className="text-red-500 text-xl" />
              <span>Female — Mon–Sat 7am – 9pm</span>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="bg-white text-black p-2 rounded-md hover:bg-red-600 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-white text-black p-2 rounded-md hover:bg-red-600 hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-white text-black p-2 rounded-md hover:bg-red-600 hover:text-white transition">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* === Footer Bottom === */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm">
        Copyright © 2025{" "}
        <span className="text-white font-semibold">Muscle Lift</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

