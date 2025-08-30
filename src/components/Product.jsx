import React from "react";

const products = [
  {
    id: 1,
    name: "Sarah Johnson",
    username: "@sarahjohnson",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Mike Chen",
    username: "@mikechen",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "Emma Brown",
    username: "@emmabrown",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: 4,
    name: "David Lee",
    username: "@davidlee",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: 5,
    name: "Sophia Martinez",
    username: "@sophiamartinez",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 6,
    name: "James Wilson",
    username: "@jameswilson",
    img: "https://randomuser.me/api/portraits/men/70.jpg",
  },
];

const ProductCards = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center p-6">
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gradient-to-b from-blue-500 to-indigo-600 rounded-2xl shadow-xl p-4 flex flex-col items-center 
            transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-300"
          >
            {/* Image */}
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg"
            />

            {/* Info */}
            <h2 className="text-white text-lg font-semibold mt-4">
              {product.name}
            </h2>
            <p className="text-gray-200">{product.username}</p>

            {/* Button */}
            <button className="mt-4 px-6 py-2 rounded-full bg-yellow-200 text-blue-600 font-semibold 
              transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
