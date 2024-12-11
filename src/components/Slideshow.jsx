import React, { useState, useEffect } from 'react';

const images = [
  { src: 'https://www.anadytop.com/cdn/shop/products/blue-brown-music-curtains.jpg?v=1622779586&width=1445', text: '🔥 Discounts up to 50% OFF' },
  { src: 'https://m.media-amazon.com/images/I/71Rqm5UPkaL._AC_UF894,1000_QL80_.jpg', text: '🛒 Shop Premium Curtains Now!' },
  { src: 'https://m.media-amazon.com/images/I/71Z3awqkL1L._AC_UF894,1000_QL80_.jpg', text: '✨ Shop Smart. Save Big. ✨' },
  { src: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/9ac853fae6d8cb6195bf4c96d9666cbd.jpg', text: '🎁 Exclusive Curtain Styles Await You!' },
  { src: 'https://bunny-wp-pullzone-dspfxhl1bz.b-cdn.net/wp-content/uploads/2024/04/bedroom-curtains-1024x1024.webp', text: '⏳ Offer Ends Soon' },
  { src: 'https://cms.interiorcompany.com/wp-content/uploads/2024/01/watercolor-abstracts-design-of-curtains.jpg', text: '🏡 Your Dream Curtains Are Here!' },
  { src: 'https://www.anadytop.com/cdn/shop/products/green-forest-curtains.jpg?v=1588954622', text: '🌈 Beautiful Curtains, Great Savings!' },
];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
    setIsFading(false); // Fade in after image is fully loaded
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsFading(true);
      setIsImageLoaded(false); // Prevent showing the next image until it's loaded

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 300); // Fading duration
    }, 5000); // 5 seconds delay for slide change

    return () => clearTimeout(timeoutId);
  }, [currentIndex]);

  return (
    <div className="flex justify-center py-12 pt-32">
      <div className="relative w-full max-w-5xl h-[35rem] overflow-hidden rounded-2xl shadow-2xl">
        {/* Image */}
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].text}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 transform ${isFading || !isImageLoaded ? 'opacity-0' : 'opacity-100'} animate-zoom`}
          onLoad={handleImageLoad}
        />

        {/* Text */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/60 via-transparent to-black/60 transition-opacity duration-300 ${
            isFading || !isImageLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center px-4 drop-shadow-md">
            {images[currentIndex].text}
          </h2>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes zoom {
          0% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.1) translateY(-10px); }
          100% { transform: scale(1) translateY(0); }
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        .animate-zoom {
          animation: zoom 10s ease-in-out infinite;
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Slideshow;
