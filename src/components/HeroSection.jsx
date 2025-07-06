import React from "react";
import { motion } from "framer-motion";
import iphoneImage from "../assets/iphone14.png";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative bg-[#1d192a] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1d192a] via-[#2a2342] to-[#1d192a] opacity-80"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pt-4 pb-0 md:pt-0 md:pb-0 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <motion.p
              className="text-gray-300 uppercase text-base sm:text-lg md:text-xl tracking-widest"
              variants={itemVariants}
            >
              PRO.BEYOND.
            </motion.p>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Pro
              </span>{" "}
              iPhone 15
            </motion.h1>

            <motion.p
              className="text-gray-300 text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0"
              variants={itemVariants}
            >
              Created to change everything for the better. For everyone
            </motion.p>

            <motion.div variants={itemVariants}>
              <button
                className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border-2 border-white hover:bg-white hover:text-[#1d192a] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 font-medium"
                aria-label="Shop iPhone 14 Pro"
              >
                Shop Now
              </button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="w-full flex justify-center items-center mb-0 md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={iphoneImage}
              alt="iPhone 14 Pro"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
              loading="lazy"
              width="600"
              height="600"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);