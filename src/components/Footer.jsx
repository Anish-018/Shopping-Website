import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
    { icon: FaTiktok, href: "https://tiktok.com", label: "TikTok" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  ];

  const services = [
    { name: "Bonus program", href: "/bonus" },
    { name: "Gift cards", href: "/gift-cards" },
    { name: "Credit and payment", href: "/payment" },
    { name: "Service contracts", href: "/contracts" },
    { name: "Non-cash account", href: "/account" },
    { name: "Payment options", href: "/payment-options" },
  ];

  const support = [
    { name: "Find an order", href: "/track-order" },
    { name: "Terms of delivery", href: "/delivery" },
    { name: "Exchange and return", href: "/returns" },
    { name: "Warranty", href: "/warranty" },
    { name: "FAQ", href: "/faq" },
    { name: "Terms of service", href: "/terms" },
  ];

  return (
    <footer className="bg-black text-white font-sans" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-black"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <span className="text-2xl font-semibold tracking-wide">iPhone</span>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Discover the latest iPhone models featuring powerful performance, 
              elegant design, and cutting-edge technology to keep you connected 
              and ahead of the curve.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`Follow us on ${label}`}
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4 sm:mb-6 text-white">Services</h3>
            <nav aria-label="Services">
              <ul className="space-y-2 sm:space-y-3">
                {services.map(({ name, href }) => (
                  <li key={name}>
                    <a
                      href={href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4 sm:mb-6 text-white">Customer Support</h3>
            <nav aria-label="Customer Support">
              <ul className="space-y-2 sm:space-y-3">
                {support.map(({ name, href }) => (
                  <li key={name}>
                    <a
                      href={href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} iPhone Store. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;