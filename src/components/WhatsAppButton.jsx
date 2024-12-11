import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+923056667208"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-5 shadow-lg flex items-center justify-center transition-transform transform hover:scale-110 hover:shadow-2xl"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={35} />
    </a>
  );
};

export default WhatsAppButton;
