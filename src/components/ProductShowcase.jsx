import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../data/products";

// Heart SVGs with animation
const HeartIcon = ({ filled, animate, ...props }) => (
  <motion.svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill={filled ? "red" : "none"}
    stroke={filled ? "red" : "currentColor"}
    strokeWidth="2"
    className={`w-6 h-6 ${filled ? "" : "text-gray-400"}`}
    animate={animate ? { scale: [1, 1.3, 1] } : false}
    transition={{ duration: 0.3 }}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
    />
  </motion.svg>
);

const TABS = [
  { label: "New Arrival", value: "new" },
  { label: "Bestseller", value: "bestseller" },
  { label: "Featured Products", value: "featured" },
];

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("new");
  const [wishlist, setWishlist] = useState([]);
  const [heartAnim, setHeartAnim] = useState(null);

  // Filter products by tab
  const filteredProducts = products.filter((p) => p.tags.includes(activeTab));

  // Wishlist toggle with animation
  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
    setHeartAnim(id);
    setTimeout(() => setHeartAnim(null), 400);
  };

  return (
    <section className="bg-white py-8 sm:py-10 px-2 sm:px-4 md:px-6 lg:px-12">
      {/* Tabs */}
      <nav
        className="flex flex-col sm:flex-row items-stretch sm:items-center border-b border-gray-200 mb-6 sm:mb-8 gap-2 sm:gap-0 sm:space-x-8"
        role="tablist"
        aria-label="Product categories"
      >
        {TABS.map((tab) => (
          <button
            key={tab.value}
            role="tab"
            aria-selected={activeTab === tab.value}
            aria-controls={`panel-${tab.value}`}
            tabIndex={activeTab === tab.value ? 0 : -1}
            className={`w-full sm:w-auto px-4 py-2 sm:py-3 text-base font-medium focus:outline-none transition whitespace-nowrap rounded-lg sm:rounded-none
        ${
          activeTab === tab.value
            ? "bg-black text-white sm:bg-transparent sm:text-black border-b-2 border-black font-bold"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200 sm:bg-transparent sm:text-gray-500 sm:hover:text-black"
        }`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Product Grid with fade animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          id={`panel-${activeTab}`}
          role="tabpanel"
          tabIndex={0}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-transform duration-200 hover:scale-[1.03] flex flex-col items-center p-4 sm:p-6 group"
              whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
              layout
            >
              {/* Heart Icon */}
              <button
                aria-label={
                  wishlist.includes(product.id)
                    ? "Remove from wishlist"
                    : "Add to wishlist"
                }
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 focus:outline-none"
                onClick={() => toggleWishlist(product.id)}
                tabIndex={0}
              >
                <HeartIcon
                  filled={wishlist.includes(product.id)}
                  animate={heartAnim === product.id}
                />
              </button>
              {/* --- WRAP CONTENT IN FLEX-1 DIV --- */}
              <div className="flex-1 w-full flex flex-col items-center">
                {/* Product Image */}
                <motion.img
                  src={product.src}
                  alt={product.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 object-contain mx-auto mb-3 sm:mb-4"
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                {/* Product Name */}
                <h3 className="text-center text-xs sm:text-sm font-medium text-gray-900 mb-1 sm:mb-2 line-clamp-2">
                  {product.name}
                </h3>
                {/* Product Price */}
                <div className="text-center text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-4">
                  ${product.price}
                </div>
              </div>
              {/* Buy Now Button */}
              <motion.button
                className="w-full bg-black text-white rounded-lg py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition hover:bg-gray-900 text-sm sm:text-base"
                aria-label={`Buy now: ${product.name}`}
                tabIndex={0}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.03 }}
              >
                Buy Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
