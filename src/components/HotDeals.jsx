import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  { id: 1, src: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/1st.webp?alt=media&token=21285bc4-3962-42ea-8a01-bf66c2eb5edc', name: '2 Piece Luxury Plain Velvet Curtain-GREY', originalPrice: 'Rs.9,798.00', discountedPrice: 'Rs.4,899.00' },
  { id: 2, src: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/2.webp?alt=media&token=8b158f4b-794f-4f66-9d61-b6f07a6d8a70', name: '2 Piece Luxury Plain Velvet Curtain', originalPrice: 'Rs.9,798.00', discountedPrice: 'Rs.4,899.00' },
  { id: 3, src: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/3%20(2).webp?alt=media&token=e88fc50d-d2f8-4071-82cd-01d99c391336', name: '2 Piece Luxury Plain Velvet Curtain-Navy Blue', originalPrice: 'Rs.9,798.00', discountedPrice: 'Rs.4,899.00' },
  { id: 4, src: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/4.jpg?alt=media&token=18abe250-a7da-45cb-9037-cb168b0f0e4e', name: '2 PIECE OF PREMIUM VELVET CURTAINS BORDER DESIGN (GREY & OFFWHITE)', originalPrice: 'Rs.12,998.00', discountedPrice: 'Rs.6,499.00' },
  { id: 5, src: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/5.webp?alt=media&token=bf469b38-d058-4ec7-830a-f8de6e3cfd9a', name: 'Luxury Velvet Curtains Grey & Cream LEC-136', originalPrice: 'Rs.9,798.00', discountedPrice: 'Rs.4,899.00' },
  { id: 6, src: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/6.jpg?alt=media&token=8249238c-23c3-4740-a0b9-2615a40603a6', name: 'Luxury Embossed Velvet Curtains (2 Panels with 2 belts) Beige LEC-103', originalPrice: 'Rs.13,978.00', discountedPrice: 'Rs.6,989.00' },
];

function HotDeals() {
  return (
    <div className="bg-gray-100 p-6 max-w-screen-xl mx-auto">
      {/* Title and Tagline */}
      <div className="relative bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 p-8 rounded-xl shadow-lg mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center relative z-10">
          Hot Deals
        </h2>
        <p className="text-white text-sm md:text-lg text-center mt-2">
          Hurry! Up to 50% Off on Premium Duvets & Curtains – Don’t Miss Out!
        </p>
        <div className="absolute inset-0 border-4 border-blue-300 rounded-xl -z-10"></div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <Link to={`/product/${item.id}`} className="w-full">
              <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-lg relative">
                <img src={item.src} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  50% OFF
                </div>
              </div>
            </Link>
            <div className="flex flex-col flex-grow p-4">
              {/* Product Name */}
              <h3 className="text-base font-semibold text-gray-800 mb-2 text-center text-ellipsis overflow-hidden whitespace-nowrap">
                {item.name}
              </h3>

              {/* Original Price (with strikethrough) */}
              <p className="text-gray-500 mb-1 text-center line-through text-sm">{item.originalPrice}</p>

              {/* Discounted Price */}
              <p className="text-gray-800 text-lg font-semibold mb-4 text-center">{item.discountedPrice}</p>

              {/* Add to Cart Button */}
              <div className="flex justify-center mt-auto">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotDeals;
