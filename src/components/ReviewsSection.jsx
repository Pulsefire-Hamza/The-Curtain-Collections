import React from "react";

const reviews = [
  {
    id: 1,
    name: "Ali Ahmad",
    rating: 5,
    comment:
      "Excellent curtains! The quality is superb and they look amazing in my living room.",
  },
  {
    id: 2,
    name: "Usama Khan",
    rating: 5,
    comment:
      "Very good quality curtains, worth the price. They hang beautifully and block out light effectively.",
  },
  {
    id: 3,
    name: "M. Ismail",
    rating: 5,
    comment:
      "Great curtains with a premium feel. Delivery was on time and the customer service was excellent.",
  },
  {
    id: 4,
    name: "Ayesha Noor",
    rating: 5,
    comment:
      "Absolutely fantastic curtains! The fabric is high quality, and they fit perfectly. Highly recommended!",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-16">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-200 relative"
            >
              {/* Decorative Shape */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full shadow-lg"></div>
              <div className="text-center mt-6 mb-6">
                <p className="text-lg font-medium text-gray-700 uppercase tracking-wider">
                  {review.name}
                </p>
                <div className="flex justify-center mt-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 15l-5 3 1-6-5-5 6.5-.5L10 1l2.5 6 6.5.5-5 5 1 6-5-3z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-center leading-relaxed italic">
                "{review.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
