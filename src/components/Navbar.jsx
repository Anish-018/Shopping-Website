import { useState, useEffect, useRef } from "react";
import LOGO from "../assets/LOGO.png";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
  FiChevronDown,
  FiSun,
  FiMoon,
  FiClock,
  FiPhone,
  FiMail,
} from "react-icons/fi";

const Navbar = () => {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState(5);
  const [wishlistItems, setWishlistItems] = useState(2);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const navbarRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setShowMegaMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation data
  const navLinks = [
    { name: "Home", href: "#", active: true },
    {
      name: "Shop",
      href: "#",
      megaMenu: true,
      categories: [
        {
          title: "New Arrivals",
          items: ["Spring Collection", "Summer Essentials", "Limited Editions"],
        },
        {
          title: "Top Categories",
          items: ["Electronics", "Fashion", "Home & Living"],
        },
        {
          title: "Deals",
          items: ["Flash Sale", "Bundle Offers", "Clearance"],
        },
      ],
    },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Blog", href: "#" },
  ];

  // Handlers
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setShowSearch(!showSearch);
  const toggleMegaMenu = () => setShowMegaMenu(!showMegaMenu);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setShowSearch(false);
  };

  // Dummy dark mode handler for mobile menu (to avoid error)
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="dark:bg-gray-900" ref={navbarRef}>
      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 bg-white dark:bg-gray-900 transition-all duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center flex-1 md:flex-none min-w-0">
              <div className="flex-shrink-0">
                <span> <img src={LOGO} alt="" > </span>
              </div>

              {/* Desktop Search - Hidden on mobile */}
              <form
                onSubmit={handleSearch}
                className="ml-2 sm:ml-4 hidden md:block w-full max-w-xs lg:max-w-sm xl:max-w-md"
              >
                <div className="relative">
                  <input
                    type="text"
                    className="block w-full pl-3 pr-12 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-0 placeholder-gray-400 dark:placeholder-gray-500 text-sm transition-all duration-200"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search products"
                  />
                  <button
                    type="submit"
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white"
                    aria-label="Submit search"
                  >
                    <FiSearch />
                  </button>
                </div>
              </form>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.megaMenu ? (
                    <>
                      <button
                        onClick={toggleMegaMenu}
                        className={`flex items-center px-2 lg:px-4 py-2 text-sm ${
                          link.active
                            ? "font-bold text-black dark:text-white"
                            : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                        }`}
                        aria-expanded={showMegaMenu}
                      >
                        {link.name}
                        <FiChevronDown
                          className={`ml-1 h-4 w-4 transition-transform ${
                            showMegaMenu ? "transform rotate-180" : ""
                          }`}
                        />
                      </button>
                    </>
                  ) : (
                    <a
                      href={link.href}
                      className={`px-2 lg:px-4 py-2 text-sm ${
                        link.active
                          ? "font-bold text-black dark:text-white"
                          : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                      }`}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4 ml-2 sm:ml-4">
              <button
                onClick={toggleSearch}
                className="md:hidden text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                aria-label="Search"
              >
                <FiSearch className="h-5 w-5" />
              </button>

              <button
                className="hidden md:block text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white relative"
                aria-label="Wishlist"
              >
                <FiHeart className="h-5 w-5" />
                {wishlistItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {wishlistItems}
                  </span>
                )}
              </button>

              <button
                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white relative"
                aria-label="Shopping cart"
              >
                <FiShoppingCart className="h-5 w-5" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>

              <button
                className="hidden md:block text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                aria-label="User account"
              >
                <FiUser className="h-5 w-5" />
              </button>

              <button
                onClick={toggleMenu}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white focus:outline-none"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search - Shows when toggled */}
          {showSearch && (
            <div className="md:hidden pb-3">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-500 focus:bg-white dark:focus:bg-gray-700 focus:ring-0 placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search products"
                    autoFocus
                  />
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Mega Menu */}
        {showMegaMenu && (
          <div className="absolute left-0 right-0 bg-white dark:bg-gray-800 shadow-xl z-40 border-t border-gray-200 dark:border-gray-700 w-full">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {navLinks
                  .find((link) => link.megaMenu)
                  ?.categories.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                        {category.title}
                      </h3>
                      <ul className="space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <a
                              href="#"
                              className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2">
                      Special Offers
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Get 20% off on all new arrivals this week. Use code:{" "}
                      <span className="font-bold">NEW20</span>
                    </p>
                  </div>
                  <button className="mt-2 md:mt-0 px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-md w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.megaMenu ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === link.name ? null : link.name
                          )
                        }
                        className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base ${
                          link.active
                            ? "font-bold text-black dark:text-white"
                            : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                        }`}
                      >
                        {link.name}
                        <FiChevronDown
                          className={`ml-1 h-4 w-4 transition-transform ${
                            openDropdown === link.name
                              ? "transform rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                      {openDropdown === link.name && (
                        <div className="pl-4 py-1 space-y-1">
                          {link.categories?.flatMap((category) =>
                            category.items.map((item, itemIndex) => (
                              <a
                                key={itemIndex}
                                href="#"
                                className="block px-3 py-2 rounded-md text-base text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                              >
                                {item}
                              </a>
                            ))
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={link.href}
                      className={`block px-3 py-2 rounded-md text-base ${
                        link.active
                          ? "font-bold text-black dark:text-white"
                          : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                      }`}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className="px-2 pt-2 pb-3 border-t border-gray-200 dark:border-gray-700 flex justify-around">
              <button
                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white p-2 relative"
                aria-label="Wishlist"
              >
                <FiHeart className="h-5 w-5" />
                {wishlistItems > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {wishlistItems}
                  </span>
                )}
              </button>
              <button
                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white p-2 relative"
                aria-label="Shopping cart"
              >
                <FiShoppingCart className="h-5 w-5" />
                {cartItems > 0 && (
                  <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>
              <button
                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white p-2"
                aria-label="User account"
              >
                <FiUser className="h-5 w-5" />
              </button>
              <button
                onClick={toggleDarkMode}
                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white p-2"
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {darkMode ? <FiSun /> : <FiMoon />}
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
