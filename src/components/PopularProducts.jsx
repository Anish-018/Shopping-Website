import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { showcaseProducts } from '../data/products';

const PopularProducts = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="w-full px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden">
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {showcaseProducts.map((product, index) => (
          <motion.div
            key={product.title}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03, 
              transition: { duration: 0.2 } 
            }}
            className={`flex flex-col h-full p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg transition-all duration-300 ${
              (index === 1 || index === 3)
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-900"
            }`}
          >
            <motion.div 
              className="overflow-hidden rounded-md mb-4 sm:mb-6 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={product.src}
                alt={product.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-40 sm:h-48 md:h-56 object-contain transform hover:scale-105 transition-transform duration-500"
                onLoad={() => {}}
              />
              {product.isNew && (
                <motion.div 
                  className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  NEW
                </motion.div>
              )}
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`font-bold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 ${
                (index === 1 || index === 3) ? "text-white" : "text-gray-900"
              }`}
            >
              {product.title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`text-sm sm:text-base mb-4 sm:mb-6 flex-1 ${
                (index === 1 || index === 3) ? "text-gray-300" : "text-gray-500"
              }`}
            >
              {product.description}
            </motion.p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`border rounded-md px-4 sm:px-6 py-2 font-medium transition-all duration-300 ${
                (index === 1 || index === 3)
                  ? "border-white text-white hover:bg-white hover:text-gray-900"
                  : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
              }`}
            >
              Shop Now
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PopularProducts;