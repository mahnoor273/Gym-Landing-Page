import React from 'react';
import Trainer from './assets/Trainer.png';
import Trainer1 from './assets/Trainer2.png';

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

// ✅ Trainer Card
const TrainerProfile = ({ trainer }) => (
  <div
    className="
      bg-black text-white p-6 rounded-xl
      border-2 border-white shadow-xl
      w-full max-w-sm
      transition duration-300 hover:border-red-600
      mx-auto md:mx-0
    "
  >
    <div className="flex items-center mb-4">
      <img
        src={trainer.imageUrl}
        alt={`${trainer.name}'s profile`}
        className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-red-700"
      />

      <div>
        <h3 className="text-xl sm:text-2xl font-bold">{trainer.name}</h3>
        <div className="flex items-center text-yellow-400">
          <span className="text-lg sm:text-xl">★</span>
          <span className="ml-1 text-base font-medium">{trainer.rating}</span>
        </div>
      </div>
    </div>

    <p className="text-base sm:text-lg mb-6 text-gray-300">
      {trainer.description}
    </p>

    <div className="flex justify-center md:justify-end">
      <button className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
        Train Now
      </button>
    </div>
  </div>
);

// ✅ Section
const MeetOurTrainers = () => {
  return (
    <section className="bg-black pt-10 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-12 text-center md:text-left md:ml-14">
          Meet Our Trainers
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:pl-14">
          {trainers.map((trainer, index) => (
            <TrainerProfile key={index} trainer={trainer} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default MeetOurTrainers;

