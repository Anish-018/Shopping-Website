import React from "react";
import { motion } from "framer-motion";
import PlayStation from "../assets/PlayStation.png";
import MacBook from "../assets/MacBook.png";
import AppleAirPods from "../assets/AppleAirPods.png";
import AppleVision from "../assets/AppleVision.png";
import Watch from "../assets/Watch.png";
import MacBookFull from "../assets/M2.png";
import PlayStationFull from "../assets/PS5.png";
import AppleVisionFull from "../assets/Glass.png";
import AppleAirPodsFull from "../assets/AirPodsMax.png";

const gridItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" } },
};

const imageVariants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.08,
    y: -10,
    transition: { type: "spring", stiffness: 200 },
  },
};

const textVariants = {
  rest: { opacity: 1 },
  hover: { opacity: 0.95, transition: { duration: 0.2 } },
};

const FeaturedGrid = () => {
  return (
    <div className="bg-gray-100 w-full flex justify-center">
      <div
        className="
          w-full
          max-w-[1600px]
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          grid-rows-5
          sm:grid-rows-3
          lg:grid-rows-3
          gap-0
          h-auto
          min-h-[900px]
          sm:min-h-[700px]
          lg:h-[600px]
        "
      >
        {/* PlayStation 5 */}
        <motion.div
          className="row-span-1 col-span-1 bg-gray-200 flex flex-col sm:block items-center justify-center relative overflow-hidden min-h-[250px] sm:min-h-[200px]"
          variants={gridItemVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          {/* Mobile: Full PlayStation image */}
          <motion.img
            src={PlayStationFull}
            alt="PlayStation 5"
            className="object-contain mb-2 sm:hidden mx-auto"
            variants={imageVariants}
            initial="rest"
            animate="rest"
            whileHover="hover"
          />
          {/* Desktop/Tablet: Original PlayStation image */}
          <motion.img
            src={PlayStation}
            alt="PlayStation 5"
            className="hidden sm:block sm:absolute sm:left-0 sm:top-12 sm:h-[80%] object-contain"
            variants={imageVariants}
            initial="rest"
            animate="rest"
            whileHover="hover"
          />
          <motion.div
            className="relative z-10 p-4 sm:p-6 md:p-10 text-center sm:text-right w-full"
            variants={textVariants}
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2">
              PlayStation5
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-900">
              Incredibly powerful CPUs, GPUs,
              <br /> and an SSD with integrated I/O will <br />
              redefine your PlayStation experience.
            </p>
          </motion.div>
        </motion.div>
        {/* Macbook Air */}
        <motion.div
          className="
    row-span-2
    col-span-1
    sm:col-span-2
    lg:col-span-2
    bg-[#EDEDED]
    flex flex-col sm:block justify-center
    pl-4 sm:pl-10 md:pl-20 lg:pl-40
    relative
    min-h-[250px] sm:min-h-[200px]
  "
          variants={gridItemVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          {/* Mobile: Full MacBook image */}
          <motion.img
            src={MacBookFull}
            alt="Macbook Air"
            className=" object-contain mb-2 sm:hidden mx-auto"
            variants={imageVariants}
            initial="rest"
            animate="rest"
            whileHover="hover"
          />
          {/* Desktop/Tablet: Original MacBook image */}
          <motion.img
            src={MacBook}
            alt="Macbook Air"
            className="hidden sm:block sm:absolute sm:right-0 sm:bottom-0 sm:h-[80%] md:h-[90%] object-contain"
            variants={imageVariants}
            initial="rest"
            animate="rest"
            whileHover="hover"
          />
          <motion.div
            className="relative z-10 p-4 sm:p-6 md:p-10 text-center sm:text-left w-full"
            variants={textVariants}
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-thin leading-none">
              Macbook
            </h2>
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-4 leading-none">
              Air
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-xl mb-4 sm:mb-8">
              The new 15-inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
          </motion.div>
        </motion.div>

        {/* Apple Vision Pro */}
        <motion.div
          className="row-span-1 col-span-1 bg-gray-700 flex flex-col sm:block items-center justify-center relative overflow-hidden min-h-[200px]"
          variants={gridItemVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          {/* Mobile: Full Vision Pro image */}
          <motion.img
            src={AppleVisionFull}
            alt="Apple Vision Pro"
            className="object-contain mb-2 sm:hidden mx-auto"
            variants={imageVariants}
            initial="rest"
            animate="rest"
            whileHover="hover"
          />
          {/* Desktop/Tablet: Original Vision Pro image */}
          <motion.img
            src={AppleVision}
            alt="Apple Vision Pro"
            className="hidden sm:block sm:absolute sm:left-0 sm:-top-7 sm:h-[150%] w-auto object-contain opacity-80"
            variants={imageVariants}
            initial="rest"
            animate="rest"
            whileHover="hover"
          />
          <motion.div
            className="relative z-10 p-4 sm:p-6 md:p-10 text-center sm:text-right w-full text-white"
            variants={textVariants}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-thin">Apple</h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              Vision <span className="font-black">Pro</span>
            </h3>
            <p className="text-xs sm:text-sm md:text-md text-gray-200">
              An immersive way to <br />
              experience entertainment.
            </p>
          </motion.div>
        </motion.div>

        {/* Apple AirPods Max */}
        <motion.div
          className="row-span-1 col-span-1 bg-gray-200 flex flex-col sm:block items-center justify-center relative overflow-hidden min-h-[200px]"
          variants={gridItemVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          {/* Mobile: Full AirPods Max image */}
          <motion.img
            src={AppleAirPodsFull}
            alt="Apple AirPods Max"
            className="object-contain mb-2 sm:hidden mx-auto"
            variants={imageVariants}
            initial="rest"
            animate="rest"
            whileHover="hover"
          />
          {/* Desktop/Tablet: Original AirPods Max image */}
          <motion.img
            src={AppleAirPods}
            alt="Apple AirPods Max"
            className="hidden sm:block sm:absolute sm:left-0 sm:top-0 sm:h-full object-contain opacity-80"
            variants={imageVariants}
            initial="rest"
            animate="rest"
            whileHover="hover"
          />
          <motion.div
            className="relative z-10 p-4 sm:p-6 md:p-10 text-center sm:text-right w-full"
            variants={textVariants}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-thin">
              Apple
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              AirPods <span className="font-black">Max</span>
            </h3>
            <p className="text-xs sm:text-sm md:text-md text-gray-600">
              Computational audio. <br /> Listen, it's powerful.
            </p>
          </motion.div>
        </motion.div>

        {/* Apple Watch */}
        <motion.div
          className="
            row-span-2
            col-span-1
            sm:col-span-2
            lg:col-span-2
            bg-gray-700
            flex flex-col sm:block justify-center
            pl-4 sm:pl-10 md:pl-20 lg:pl-40
            relative
            overflow-hidden
            min-h-[250px] sm:min-h-[200px]
          "
          variants={gridItemVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <motion.img
            src={Watch}
            alt="Apple Watch"
            className="block mx-auto mb-4 w-32 h-32 object-contain sm:absolute sm:right-12 sm:bottom-0 sm:h-[80%] md:h-[100%] sm:w-40 sm:mb-0"
            variants={imageVariants}
            initial="rest"
            animate="rest"
            whileHover="hover"
          />
          <motion.div
            className="relative z-10 p-4 sm:p-6 md:p-10 text-center sm:text-left w-full text-white"
            variants={textVariants}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin leading-none">
              Apple
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 leading-none">
              Watch
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mb-4 sm:mb-8">
              The new Apple Watch gives you more of what you love with a
              vibrant, expansive display right on your wrist.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedGrid;
