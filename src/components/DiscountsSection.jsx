import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import { discountProducts } from "../data/products";

const DiscountSection = () => {
  const [wishlist, setWishlist] = useState(new Set());

  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId);
      } else {
        newWishlist.add(productId);
      }
      return newWishlist;
    });
  };

  return (
    <section className="py-8 sm:py-12 px-2 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      {/* Animated Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 animate-pulse">
          Discounts up to -50%
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
        {discountProducts.map((product, index) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-2xl shadow-lg p-4 sm:p-6 
                     transform transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                     hover:-translate-y-2 border border-gray-100 overflow-hidden animate-fade-in-up
                     flex flex-col h-full"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Gradient Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            
            {/* Discount Badge */}
            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-gradient-to-r from-red-500 to-pink-500 
                          text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg
                          animate-bounce z-20">
              -50%
            </div>

            {/* Heart Icon with Animation */}
            <button
              onClick={() => toggleWishlist(product.id)}
              aria-label="Add to wishlist"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 transform transition-all duration-200 
                       hover:scale-125 active:scale-95"
            >
              {wishlist.has(product.id) ? (
                <HeartSolidIcon className="h-6 w-6 text-red-500 animate-pulse" />
              ) : (
                <HeartIcon className="h-6 w-6 text-gray-400 hover:text-red-500 transition-colors" />
              )}
            </button>

            {/* Content Container - grows to fill available space */}
            <div className="flex flex-col items-center flex-grow">
              {/* Product Image with Hover Effect */}
              <div className="relative mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 
                              rounded-full blur-xl opacity-0 group-hover:opacity-20 
                              transition-opacity duration-300 -z-10"></div>
              </div>

              {/* Product Name with Slide Animation */}
              <div className="text-center mb-2 sm:mb-3 text-xs sm:text-sm font-medium text-gray-800 
                            transform group-hover:-translate-y-0.5 transition-transform duration-200
                            relative z-10 flex-grow flex items-center">
                {product.name}
              </div>

              {/* Product Price with Pulse Effect */}
              <div className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-600 to-blue-600 
                            bg-clip-text text-transparent group-hover:scale-110 
                            transition-transform duration-200 relative z-10">
                ${product.price}
              </div>
            </div>

            {/* Buy Now Button - Always at bottom */}
            <button
              className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-2 sm:py-3 
                       rounded-xl font-semibold relative overflow-hidden group/btn
                       transform transition-all duration-200 hover:scale-105 
                       active:scale-95 shadow-lg hover:shadow-xl z-10
                       hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600
                       mt-auto text-sm sm:text-base"
              aria-label={`Buy ${product.name} now`}
            >
              {/* Button text */}
              <span className="relative z-10 flex items-center justify-center gap-2">
                Buy Now
                <svg 
                  className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscountSection;