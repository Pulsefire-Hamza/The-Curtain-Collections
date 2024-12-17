import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { CartContext } from '../context/CartContext'; // Import CartContext

function Navbar() {
  const { cartItems } = useContext(CartContext); // Access cart items from CartContext

  // Calculate total quantity of items in the cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white py-8 border-b border-gray-300 flex justify-between items-center px-8 md:px-12 lg:px-16">
      {/* Home Button */}
      <div className="flex-1 flex justify-start">
        <Link to="/" className="flex items-center text-black hover:text-gray-600 transition-colors duration-300">
          <HomeIcon className="h-6 w-6 md:h-8 md:w-8 mr-2" aria-hidden="true" />
          <span className="hidden md:block">Home</span>
        </Link>
      </div>

      {/* Logo in the Center */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link to="/">
          <img
            src="https:https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/Curtain_Colletcions-removebg-preview.png?alt=media&token=027d40ba-6ef8-448d-8c53-54659858e5a1"
            alt="Logo"
            className="h-32 md:h-48 lg:h-40 object-contain" // Adjusted height for a slightly smaller logo
          />
        </Link>
      </div>

      {/* Cart and Shop Icons on the Right */}
      <div className="flex-1 flex justify-end space-x-4 md:space-x-8">
        <Link to="/shop" className="flex items-center text-black hover:text-gray-600 transition-colors duration-300">
          <ShoppingBagIcon className="h-6 w-6 md:h-8 md:w-8" aria-hidden="true" />
          <span className="block text-xs md:text-base ml-2">Shop</span>
        </Link>
        <Link to="/cart" className="flex items-center text-black hover:text-gray-600 transition-colors duration-300 relative">
          <ShoppingCartIcon className="h-8 w-8 md:h-10 md:w-10" aria-hidden="true" />
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 -mt-1 -mr-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
