import React from 'react';
import { StarIcon, ShieldCheckIcon, ClockIcon, GiftIcon } from '@heroicons/react/24/solid';

const features = [
  {
    id: 1,
    title: 'Unique Designs',
    description: 'Experience breathtaking, unique designs tailored to your taste.',
    icon: <StarIcon className="w-12 h-12 text-white" />,
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'Premium Quality',
    description: 'Crafted with high-quality materials to ensure durability and elegance.',
    icon: <ShieldCheckIcon className="w-12 h-12 text-white" />,
    gradient: 'from-green-400 via-teal-500 to-blue-500',
  },
  {
    id: 3,
    title: 'On-time Delivery',
    description: 'Reliability and punctuality, delivering your vision on time.',
    icon: <ClockIcon className="w-12 h-12 text-white" />,
    gradient: 'from-orange-400 via-red-500 to-pink-600',
  },
  {
    id: 4,
    title: 'Member Gifts',
    description: 'Exclusive rewards and surprises for our loyal customers.',
    icon: <GiftIcon className="w-12 h-12 text-white" />,
    gradient: 'from-yellow-400 via-orange-500 to-red-500',
  },
];

const FeaturesSection = () => {
  return (
    <section
      className="py-16 relative bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden"
      style={{
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/soft-wallpaper.png")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-white to-gray-200 opacity-90 pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-gray-800 mb-12 tracking-wide whitespace-nowrap">
  Our Premium Features
</h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-8 rounded-2xl bg-white bg-opacity-60 backdrop-blur-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              <div
                className={`flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${feature.gradient} shadow-md mb-6`}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
