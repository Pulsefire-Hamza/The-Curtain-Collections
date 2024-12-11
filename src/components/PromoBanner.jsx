import React from 'react';
import { Link } from 'react-router-dom';

// Replace with your image URLs
const bannerImage1 = 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/promo1.webp?alt=media&token=a9f0e406-6798-4bb8-9324-5d8031750927'; 
const bannerImage2 = 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/promo2.webp?alt=media&token=71b3588f-f84f-4f8c-b153-ec8ccb3f5e0d';

function PromoBanner() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0 px-4 py-16">
      {/* First Banner */}
      <div className="relative w-full md:w-1/2 h-[450px] md:h-[550px] bg-cover bg-center rounded-lg overflow-hidden shadow-xl group">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImage1})` }}
        />
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 p-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide mb-4 leading-tight text-center transform transition-all duration-500 group-hover:translate-y-5">
            Discover Our Latest Products
          </h2>
          <p className="text-lg md:text-xl text-white mb-6 text-center opacity-90 transform transition-all duration-500 group-hover:opacity-100">
            Amazing products at unbeatable prices! Explore our latest collection now.
          </p>
          <Link to="/shop">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 group-hover:bg-yellow-400">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      {/* Second Banner */}
      <div className="relative w-full md:w-1/2 h-[450px] md:h-[550px] bg-cover bg-center rounded-lg overflow-hidden shadow-xl group">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImage2})` }}
        />
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 p-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide mb-4 leading-tight text-center transform transition-all duration-500 group-hover:translate-y-5">
            Exclusive Deals Just for You
          </h2>
          <p className="text-lg md:text-xl text-white mb-6 text-center opacity-90 transform transition-all duration-500 group-hover:opacity-100">
            Grab your favorites at incredible discounts! Don’t miss out on these deals.
          </p>
          <Link to="/shop">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 group-hover:bg-yellow-400">
              Explore Offers
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PromoBanner;
