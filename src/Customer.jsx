import React from 'react';
import Review from './assets/Review.png';
import Review1 from './assets/Review1.png';
import Review2 from './assets/Review2.png';
import Review3 from './assets/Review3.png';

const customerReviews = [
  {
    name: 'Rizwan',
    rating: 4.8,
    reviewText: (
      <>
        This gym transformed my body and mindset
        <br />
        I feel unstoppable!
      </>
    ),
    imageUrl: Review,
  },
  {
    name: 'Ayan',
    rating: 4.5,
    reviewText: (
      <>
        This gym transformed my body and mindset
        <br />
        I feel unstoppable!
      </>
    ),
    imageUrl: Review1,
  },
  {
    name: 'Asad',
    rating: 4.8,
    reviewText: (
      <>
        This gym transformed my body and mindset
        <br />
        I feel unstoppable!
      </>
    ),
    imageUrl: Review2,
  },
  {
    name: 'Junaid',
    rating: 4.5,
    reviewText: (
      <>
        This gym transformed my body and mindset
        <br />
        I feel unstoppable!
      </>
    ),
    imageUrl: Review3,
  },
];

// ✅ Review Card
const ReviewCard = ({ review }) => (
  <div
    className="
      bg-black text-white p-5 rounded-xl 
      border-2 border-white shadow-xl
      w-full max-w-md
      mx-auto md:mx-0
    "
  >
    <div className="flex items-center mb-4">
      <img
        src={review.imageUrl}
        alt={`${review.name}'s profile`}
        className="w-12 h-12 rounded-full object-cover mr-4"
      />
      <div>
        <h3 className="text-lg sm:text-xl font-bold">{review.name}</h3>
        <div className="flex items-center text-yellow-400">
          <span className="text-base">★</span>
          <span className="ml-1 text-sm font-medium">{review.rating}</span>
        </div>
      </div>
    </div>

    <p className="text-sm sm:text-base text-gray-300">
      {review.reviewText}
    </p>
  </div>
);

// ✅ Main Section
const Customer = () => {
  return (
    <section className="bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-10 text-center md:text-left md:ml-14">
          Reviews
        </h2>

        <div
          className="
            grid grid-cols-1 
            md:grid-cols-2 
            gap-6
            md:pl-14
          "
        >
          {customerReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Customer;

