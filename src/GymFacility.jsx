import React from "react";
import Facilities from './assets/gymfacility.png'
import Facilities1 from './assets/gymfacility1.png'
import Facilities2 from './assets/gymfacility2.png'
import Facilities3 from './assets/gymfacility3.png'
import Facilities4 from './assets/gymfacility4.png'
import Facilities5 from './assets/gymfacility5.png'

const GymFacilities = () => {
  const facilities = [
    {
      title: "Strength Training Zone",
      img: Facilities,
    },
    {
      title: "Cardio Area",
      img:Facilities1,
    },
    {
      title: "Functional Training Area",
      img: Facilities2,
    },
    {
      title: "Personal Training",
      img: Facilities3,
    },
    {
      title: "Locker Rooms & Showers",
      img: Facilities4,
    },
    {
      title: "Supplement Bar",
      img: Facilities5,
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Gym Facilities
      </h2>

      {/* Grid of Facilities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg shadow-red-600/30 group"
          >
            {/* Image */}
            <img
              src={facility.img}
              alt={facility.title}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-semibold mb-4">
                {facility.title}
              </h3>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
                Start Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GymFacilities;
