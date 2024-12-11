import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Placeholder products array with added 'date' property
const productsData = [
  { id: 7, name: '2 Piece Luxury Plain Velvet Curtain-Black', price: '4899', color: 'red', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/7.webp?alt=media&token=6c8f4905-5b00-4b61-b0c8-d4cfa447312d', date: '2023-09-01' },
  { id: 8, name: '2 Piece Luxury Plain Velvet Curtain-Black', price: '5499', color: 'Brown', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/8.webp?alt=media&token=4e0dd3d9-2b9c-4f61-af2f-27670684615d', date: '2023-09-01' },
  { id: 9, name: '2 PCS LUXURY VELVET EMBROIDERED CURTAINS(DOUBLE SHADED)', price: '7,499', color: 'dobule shade', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/9.webp?alt=media&token=7a1065b4-6bea-4315-b13a-c0ffb317778f', date: '2024-09-07' },
  { id: 10, name: '2 Piece Luxury Plain Velvet Curtain-Golden', price: '4899', color: 'golden', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/10.webp?alt=media&token=3fe40713-ba9f-4ef3-810f-792fc0a9c88c', date: '2024-09-07' },
  { id: 11, name: 'Luxury Velvet Embroidered Curtains..', price: '5999', color: 'doble shahded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/11.webp?alt=media&token=5372d3e7-61e9-4b04-8aa9-40e4d0f954ea', date: '2024-09-07' },
  { id: 12, name: 'Luxury Velvet Splendid Curtains Blackout  Black & White LEC-126', price: '7499', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/12.webp?alt=media&token=737cecb7-dc1d-4d07-9d32-846789b714e0', date: '2024-09-07' },
  { id: 13, name: '2 Panels Luxury Velvet Embroidered Curtains With 2 Belts (Gray & Black)', price: '6489', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/13.webp?alt=media&token=0d12475c-902b-4b81-a86f-c87889dc6719', date: '2024-09-07' },
  { id: 14, name: '2 Panels Luxury Velvet Embroidered Curtains With 2 Belts(Maroon & White)', price: '6489', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/14.webp?alt=media&token=2d8e76fa-d51a-4063-87b6-070b69611168', date: '2024-09-07' },
  { id: 15, name: 'Luxury Velvet Splendid Curtains Blackout – Light Golden & Black LEC-131', price: '7499', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/15.webp?alt=media&token=f99fdf45-4fe5-4dd8-8973-acf9e56f5d57', date: '2024-09-07' },
  { id: 16, name: 'Luxury Velvet Curtains Grey & Maroon LEC-134', price: '4899', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/16.webp?alt=media&token=31915bb3-8e19-429f-9c46-8fdb585742d7', date: '2024-09-07' },
  { id: 17, name: '2 Piece Luxury Plain Velvet Curtain-Maroon', price: '4899', color: 'red', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/17.webp?alt=media&token=7d6bdfe4-9931-4950-80ff-59582b5b3c1e', date: '2024-09-07' },
  { id: 18, name: '2 Piece Luxury Plain Velvet Curtain-Green', price: '4899', color: 'green', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/18.webp?alt=media&token=ccd53b08-844e-4b9d-abac-0840bdc10152', date: '2024-09-07' },
  { id: 19, name: '2 PIECE OF PREMIUM VELVET CURTAINS BORDER DESIGN(BLUE & OFFWHITE)', price: '6499', color: 'dobule shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/19.jpg?alt=media&token=1940e4c4-6635-49ef-a72a-d559dfcedaf8', date: '2024-09-07' },
  { id: 20, name: '2 PIECE OF PREMIUM VELVET CURTAINS WITH 2 BELTS (BEIGE&GOLD)', price: '7799', color: 'gold', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/20.webp?alt=media&token=ff110342-7142-4425-a251-60cca101f254', date: '2024-09-07' },
  { id: 21, name: '2 PCS LUXURY VELVET EMBROIDERED CURTAINS(DOUBLE SHADED) ', price: '7499', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/21.webp?alt=media&token=f730c64c-bcd6-4a63-9eb0-5ccfe683daf3', date: '2024-09-07' },
  { id: 22, name: 'Luxury Velvet Embroidered Curtains..', price: '5999', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/22.webp?alt=media&token=5ea8b6b2-14d7-483f-970d-aca1810b1f01', date: '2024-09-07' },
  { id: 23, name: '2 Piece Of Premium Velvet Sprinkle Curtain-1639', price: '6599', color: 'black', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/23.webp?alt=media&token=d837a16b-362f-4cfc-88bc-e3eb289e2966', date: '2024-09-07' },
  { id: 24, name: 'Luxury Velvet Splendid Curtains Blackout –Brown & Beige LEC-121', price: '7499', color: 'brown', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/24.webp?alt=media&token=a6e04e71-d801-4104-9884-f8a04d33bd06', date: '2024-09-07' },
  { id: 25, name: 'Luxury Window Curtain Panel 03', price: '3999', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/25.webp?alt=media&token=b72ffbd1-3d59-41f1-b8c7-8b3af394498c', date: '2024-09-07' },
  { id: 26, name: 'Luxury Velvet Curtain - Zinc And Off White', price: '5999', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/26.webp?alt=media&token=eb85645a-d56c-4eae-b09a-9c835aa9ae87', date: '2024-09-07' },
  { id: 27, name: '2 PIECE OF PREMIUM VELVET CURTAINS WITH 2 BELTS (BLACK&GOLD', price: '7799', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/260.webp?alt=media&token=2273b4dd-589f-4615-a30f-6ff8b5e17aef', date: '2024-09-07' },
  { id: 28, name: 'Luxury Velvet Splendid Curtains Blackout –Beige & Golden LEC-122', price: '7499', color: 'dobule shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/270.webp?alt=media&token=f9e1a1a5-4f61-410d-b340-2f0093f99b2e', date: '2024-09-07' },
  { id: 29, name: 'Luxury Velvet Embroidered Curtains..', price: '5999', color: 'green', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/27.webp?alt=media&token=f5767835-297a-4fb3-b23f-26768a232326', date: '2024-09-07' },
  { id: 30, name: '2 Panels Luxury Velvet Embroidered Curtains With 2 (Brown & White)', price: '6489', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/28.webp?alt=media&token=159d8998-1820-45a1-9916-dd6407ef06eb', date: '2024-09-07' },
  { id: 31, name: 'Luxury Velvet Splendid Curtains Blackout – Navy Blue & White LEC-131', price: '7499', color: 'bouble shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/29.webp?alt=media&token=d653aa2b-e5dd-43b2-a31a-fc42553500d5', date: '2024-09-07' },
  { id: 32, name: 'Luxury Velvet butterfly Curtains ( 2 Curtains Set )Blue LEC-109', price: '6989', color: 'blue', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/30.jpg?alt=media&token=35fa65e8-0916-4bc8-a574-0b66a5cc6c9d', date: '2024-09-07' },
  { id: 33, name: 'Luxury Embossed Velvet Curtains (2 Panels with 2 belts) Silver & Black LEC-107', price: '6989', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/31.webp?alt=media&token=48f405ac-2d34-4fb9-a777-22d567628403', date: '2024-09-07' },
  { id: 34, name: 'Luxury Velvet Curtains Grey & Blue LEC-135', price: '4899', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/32.webp?alt=media&token=e40d464e-5f42-4095-9fdb-8aae35df9601', date: '2024-09-07' },
  { id: 35, name: 'Luxury Velvet Curtains Grey & Golden LEC-133', price: '4899', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/33.webp?alt=media&token=b5b1c043-9884-4b50-97b1-1543064c9827', date: '2024-09-07' },
  { id: 36, name: 'Luxury Window Curtain Panel 04', price: '3999', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/34.webp?alt=media&token=e62ea657-7da2-4e42-a8ed-e19f3dc7ae7e', date: '2024-09-07' },
  { id: 37, name: '2 PIECE OF PREMIUM VELVET CURTAINS WITH 2 BELTS (BROWN&GOLD)', price: '7790', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/35.webp?alt=media&token=2a181dd4-8161-49a4-b4be-1f9b0d56c05f', date: '2024-09-07' },
  { id: 38, name: 'Luxury Velvet Splendid Curtains Blackout ( 2 Curtain set )Gray LEC-116', price: '7499', color: 'grey', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/36.webp?alt=media&token=7e8431b2-6df4-490b-9312-79cdc73dddd7', date: '2024-09-07' },
  { id: 39, name: '2 Piece Of Premium Velvet Sprinkle Curtain-1640', price: '6599', color: '', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/37.webp?alt=media&token=021cedf1-03c3-46be-a854-959b671782f8', date: '2024-09-07' },
  { id: 40, name: '2 PIECE OF PREMIUM VELVET CURTAINS BORDER DESIGN (ROYAL BLUE & OFFWHITE)', price: '6499', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/38.jpg?alt=media&token=885da829-0dd7-4d54-8dde-091f2a6c4020', date: '2024-09-07' },
  { id: 41, name: '2 PIECE OF PREMIUM VELVET CURTAINS BORDER DESIGN (BROWN & OFFWHITE)', price: '6499', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/39.jpg?alt=media&token=d5119870-50bc-4d3e-baf4-98c1f129f98c', date: '2024-09-07' },
  { id: 42, name: '2 Piece Of Premium Velvet Sprinkle Curtain-1645', price: '6599', color: '', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/40.webp?alt=media&token=ef08ccb9-e01d-4a28-ae84-09d8ad976f6e', date: '2024-09-07' },
  { id: 43, name: '2 Piece Of Premium Velvet Sprinkle Curtain-1644', price: '6599', color: '', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/41.webp?alt=media&token=be88d459-b096-424e-b380-8cda14dd8e2b', date: '2024-09-07' },
  { id: 44, name: '2 PCS LUXURY VELVET EMBROIDERED CURTAINS(DOUBLE SHADED)', price: '7499', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/42.webp?alt=media&token=0841fa22-7ca5-42a3-be94-3641835007d2', date: '2024-09-07' },
  { id: 45, name: '2 PIECE OF PREMIUM VELVET CURTAINS BORDER DESIGN (GREEN & OFFWHITE)', price: '6499', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/43.jpg?alt=media&token=2eaac2c1-a699-4d3a-83ed-3e8f6413aeb7', date: '2024-09-07' },
  { id: 46, name: 'Luxury Velvet Embroidered Curtains..', price: '5999', color: 'black', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/44.webp?alt=media&token=d191176c-808e-4323-b10f-72adba4a739f', date: '2024-09-07' },
  { id: 47, name: '2 Panels Luxury Velvet Embroidered Curtains With 2 Belts(Navy&offWhite)', price: '5499', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/45.webp?alt=media&token=291fab32-0aa7-43ec-98c1-5e78c984474f', date: '2024-09-07' },
  { id: 48, name: '2 PIECE OF PREMIUM VELVET CURTAINS WITH 2 BELTS (RED&GOLD)', price: ' 7799', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/46.webp?alt=media&token=c5d36d86-6d3a-479e-9a23-77b6bb6ce2bf', date: '2024-09-07' },
  { id: 49, name: 'Luxury Velvet Splendid Curtains Blackout – Beige & Black LEC-128', price: '7499', color: 'double sided', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/47.webp?alt=media&token=a4ad849a-cb8c-47fb-8ea0-e48910d27824', date: '2024-09-07' },
  { id: 50, name: 'Luxury Velvet Splendid Curtains Blackout – Brown & White LEC-127', price: '7499', color: 'brown', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/48.webp?alt=media&token=31d90e72-4e07-408c-89df-03b0173582b3', date: '2024-09-07' },
  { id: 51, name: 'Luxury Velvet Splendid Curtains Blackout ( 2 Curtain set )Cream LEC-120', price: '7499', color: 'double shaded', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/49.jpg?alt=media&token=f9fe95a6-7460-465d-82c0-9f0065d4e10b', date: '2024-09-07' },
  { id: 52, name: 'Luxury Velvet butterfly Curtains ( 2 Curtains Set )Black LEC-108', price: '6989', color: 'black', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/50.webp?alt=media&token=e2ac64e0-d3be-48b8-bb66-321a0acb95ab', date: '2024-09-07' },
  { id: 53, name: 'Luxury Embossed Velvet Curtains (2 Panels with 2 belts) Brown LEC-106', price: '6989', color: 'brown', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/51.jpg?alt=media&token=cf2bf09b-729a-4b41-a7d3-2fc995634989', date: '2024-09-07' },
  { id: 54, name: '2 Piece Of Premium Velvet Sprinkle Curtain-1641', price: '6599', color: 'yellow', image: 'https://firebasestorage.googleapis.com/v0/b/furniture-storage.appspot.com/o/52.webp?alt=media&token=0806c8c2-ad78-44f3-a70e-8deed7738de4', date: '2024-09-07' }
];

function Shop({ addToCart }) {
  const [sortOrder, setSortOrder] = useState('low-to-high');
  const [colorFilter, setColorFilter] = useState('all');

  // Sort and filter products based on state
  const filteredProducts = productsData
    .filter(product => colorFilter === 'all' || product.color === colorFilter)
    .sort((a, b) => {
      switch (sortOrder) {
        case 'low-to-high':
          return a.price - b.price;
        case 'high-to-low':
          return b.price - a.price;
        case 'a-z':
          return a.name.localeCompare(b.name);
        case 'z-a':
          return b.name.localeCompare(a.name);
        case 'old-to-new':
          return new Date(a.date) - new Date(b.date);
        case 'new-to-old':
          return new Date(b.date) - new Date(a.date);
        default:
          return 0;
      }
    });

  return (
    <div className="container mx-auto py-8 px-4">
     <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 pt-12 text-center text-blue-500 animate-slide-down">
  
</h1>


    {/* Filter Section */}
<div className="mb-6 flex flex-wrap justify-between items-center space-y-4 sm:space-y-0 sm:space-x-8">
  <div className="flex items-center space-x-6">
    <label htmlFor="sort" className="text-lg font-medium text-gray-800">Sort by:</label>
    <select
      id="sort"
      className="bg-white border border-gray-300 text-gray-700 rounded-lg p-2 transition duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
    >
      <option value="a-z">Alphabetically, A-Z</option>
      <option value="z-a">Alphabetically, Z-A</option>
      <option value="low-to-high">Price, low to high</option>
      <option value="high-to-low">Price, high to low</option>
      <option value="old-to-new">Date, old to new</option>
      <option value="new-to-old">Date, new to old</option>
    </select>
  </div>

  <div className="flex items-center space-x-6">
    <label htmlFor="color" className="text-lg font-medium text-gray-800">Color:</label>
    <select
      id="color"
      className="bg-white border border-gray-300 text-gray-700 rounded-lg p-2 transition duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      value={colorFilter}
      onChange={(e) => setColorFilter(e.target.value)}
    >
      <option value="all">All Colors</option>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="black">Black</option>
      <option value="yellow">Yellow</option>
      <option value="double-shade">Double Shaded</option>
      <option value="golden">Golden</option>
      <option value="grey">Grey</option>
    </select>
  </div>
</div>


{/* Products Grid */}
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
  {filteredProducts.map(product => (
    <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center">
      <Link to={`/product/${product.id}`} className="w-full">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain mb-4 max-w-full h-auto"
          style={{ maxWidth: '100%', height: 'auto' }} // Ensures the image maintains its original size
        />
      </Link>
      <div className="px-4 pb-4 flex flex-col w-full">
        {/* Product Name */}
        <h2 className="text-lg font-medium text-gray-800 mb-2 truncate text-center">{product.name}</h2>
        
        {/* Centering the Price */}
        <p className="text-gray-600 text-2xl font-semibold mb-4 text-center">{`Rs ${product.price}`}</p>
        
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;