import React from 'react';
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="container mx-auto flex flex-wrap justify-between space-y-12 md:space-y-0 md:flex-nowrap">
        {/* Left Section: Logo and Subscribe */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start space-y-8">
          <div className="bg-white p-4 rounded-full shadow-lg">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/logo.png?alt=media&token=0fe12fc6-a71f-48d6-961d-641c2b141e89"
              alt="Logo"
              className="w-32 h-32 md:w-40 md:h-40" // Adjusted for responsive sizing
            />
          </div>
          <h4 className="text-3xl font-bold text-gray-200">Stay Updated!</h4>
          <p className="text-gray-400 text-sm md:text-base">
            Subscribe to get the latest updates on new products, offers, and more.
          </p>
          <div className="flex flex-col w-full max-w-sm space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-4 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Center Section: Find Us */}
        <div className="w-full md:w-1/3 text-center md:text-left space-y-8 mt-8 md:mt-0">
          <h4 className="text-3xl font-semibold text-gray-200">Find Us</h4>
          <div className="flex justify-center md:justify-start mt-6"> {/* Added margin-top */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.787517894853!2d73.10777259075809!3d33.53290967628697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed38cb5241a1%3A0x63fcffae759ad7a3!2sThe%20Curtain%20Shop!5e0!3m2!1sen!2sus!4v1731619824960!5m2!1sen!2sus"
              width="280"
              height="180"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-xl"
            ></iframe>
          </div>
          <p className="text-gray-400 text-sm md:text-base mt-4">
            Our outlets are located in Bahawalpur, Rawalpindi, and Multan.
          </p>
          {/* Added extra information */}
          <div className="mt-6">
            <p className="text-gray-400 text-sm md:text-base">
              Business Hours: <br />
              Mon - Thur: 11:00 AM - 9:00 PM <br />
              Sat - Sun: 10:00 AM - 6:00 PM
            </p>
            <p className="text-gray-400 text-sm md:text-base mt-4">
              For inquiries, call us at: <br />
              <span className="text-green-400 font-semibold">+92 3056667208</span>
            </p>
          </div>
        </div>

        {/* Right Section: Contact Us */}
        <div className="w-full md:w-1/3 text-center md:text-left space-y-8 mt-8 md:mt-0">
          <h4 className="text-3xl font-bold text-gray-200">Contact Us</h4>
          <p className="text-gray-400 text-sm md:text-base">The Curtain Collection</p>
          <p className="text-gray-400 text-sm md:text-base">
            Amir Furniture, Railway Road, Welcome Chowk, Bahawalpur
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=61570211156759"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition-colors duration-300"
            >
              <FaFacebookF size={30} />
            </a>
            <a
              href="https://www.instagram.com/curtaincollectionspk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition-colors duration-300"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="mailto:contact@mystore.com"
              className="text-white hover:text-green-400 transition-colors duration-300"
            >
              <FaEnvelope size={30} />
            </a>
          </div>
          <p className="text-gray-400 text-sm md:text-base mt-4">
            Shop Name: The Curtain Collection <br />
            Location: Railway Road, Welcome Chowk, Bahawalpur, Punjab 63100
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        <p>
          Designed & Developed with ❤️ by{' '}
          <a
            href="https://devrexdigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 font-semibold"
          >
            Devrex Digital
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;