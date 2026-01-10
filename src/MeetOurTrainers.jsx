import React from 'react';
import Trainer from './assets/Trainer.png';
import Trainer1 from './assets/Trainer2.png';

/* 
==========================================================
🔹 TRAINER DATA ARRAY
----------------------------------------------------------
Yahan aap naye trainers add kar sakte hain.
Bas ek new object add karein "name", "rating", "description", 
aur "imageUrl" ke saath.
==========================================================
*/
const trainers = [
  {
    name: 'Fatima',
    rating: 4.8,
    description: 'Fat-loss coach helping you get lean and strong.',
    imageUrl: Trainer1,
  },
  {
    name: 'Haseeb',
    rating: 4.5,
    description: 'Strength trainer focused on muscle and power.',
    imageUrl: Trainer,
  },
];

/* 
==========================================================
🔹 REUSABLE TRAINER PROFILE CARD COMPONENT
----------------------------------------------------------
Yahan aap card ka design, border color, button color, etc. 
change kar sakte hain.
==========================================================
*/
const TrainerProfile = ({ trainer }) => (
  <div className="bg-black text-white p-6 rounded-xl border-2 border-white shadow-xl w-full mb-10 max-w-sm transition duration-300 hover:border-red-600">
    <div className="flex items-center mb-4">
      <img
        src={trainer.imageUrl}
        alt={`${trainer.name}'s profile`}
        className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-red-700"
      />

      <div>
        <h3 className="text-2xl font-bold">{trainer.name}</h3>
        <div className="flex items-center text-yellow-400">
          <span className="text-xl">★</span>
          <span className="ml-1 text-base font-medium">{trainer.rating}</span>
        </div>
      </div>
    </div>

    <p className="text-lg mb-6 text-gray-300">{trainer.description}</p>

    <button className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ml-52">
      Train Now
    </button>
  </div>
);

/* 
==========================================================
🔹 MAIN SECTION COMPONENT
----------------------------------------------------------
👇👇👇
Customization points are marked clearly below.
==========================================================
*/
const MeetOurTrainers = () => {
  return (

    
<section className="bg-black pt-6 pb-4 px-4 sm:px-6 lg:px-8 mb-0">

      <div className="max-w-7xl mx-auto">
        {/*
        ==========================================================
        🔧 CUSTOMIZATION POINT 2:
        Heading margin-left control — "ml-14"
        ----------------------------------------------------------
        Heading ko left ya center karna ho to:
        - "ml-0" = left aligned
        - "text-center ml-0" = center aligned
        - "ml-20" = thoda aur right push karne ke liye
        ==========================================================
        */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-12 ml-14">
          Meet Our Trainers
        </h2>

        {/*
        ==========================================================
        🔧 CUSTOMIZATION POINT 3:
        Card alignment aur gap control
        ----------------------------------------------------------
        - "justify-start" = left aligned
        - "justify-center" = center aligned
        - "gap-8" = cards ke beech ka distance (change to gap-4 or gap-12)
        - "ml-14" = overall section ka left margin
        ==========================================================
        */}
        <div className="flex flex-col md:flex-row gap-8 justify-start items-center">
          <div className="flex flex-col md:flex-row gap-8 ml-14">
            {trainers.map((trainer, index) => (
              <TrainerProfile key={index} trainer={trainer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTrainers;
