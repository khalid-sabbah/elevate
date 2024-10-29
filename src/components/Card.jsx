import React from 'react';

const Card = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl flex flex-col h-full">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 text-xs font-bold rounded-lg shadow-lg">
          ${product.price}
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold mb-1 text-gray-800 line-clamp-2">
            {product.title}
          </h2>
          <p className="text-gray-500 text-sm mb-2 line-clamp-3">
            {product.description}
          </p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400 mr-2">
              {'★'.repeat(Math.round(product.rating.rate))}
            </span>
            <span className="text-gray-500 text-sm">{product.rating.rate}</span>
            <span className="text-gray-400 text-sm ml-2">
              ({product.rating.count} reviews)
            </span>
          </div>
        </div>
        <button className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 rounded-lg hover:from-purple-500 hover:to-indigo-500 transition duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
