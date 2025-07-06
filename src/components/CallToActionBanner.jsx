import React from "react";
import Banner from "../assets/Banner.jpg";

const CallToActionBanner = () => {
  return (
    <section
      className="relative w-full min-h-[220px] sm:min-h-[320px] md:min-h-[400px] flex items-center justify-center overflow-hidden"
      aria-label="Big Summer Sale Banner"
    >
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#232526] via-[#2c3e50] to-[#414345] animate-gradient-x z-0" />
      
      {/* Banner image with parallax effect */}
      <img
        src={Banner}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-90 z-0 pointer-events-none transform scale-105 animate-ken-burns"
        aria-hidden="true"
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content with staggered animations */}
      <div className="relative z-20 flex flex-col items-center text-center px-2 sm:px-4 py-8 sm:py-12 w-full max-w-xl sm:max-w-2xl mx-auto">
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-2 animate-fade-in-up">
          Big Summer{" "}
          <span className="text-yellow-300 font-extrabold animate-pulse-glow">
            Sale
          </span>
        </h1>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 animate-fade-in-up animation-delay-300">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <a
          href="#shop"
          className="group inline-block px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-white text-white rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 shadow-lg animate-fade-in-up animation-delay-600 relative overflow-hidden text-sm sm:text-base"
          tabIndex={0}
          role="button"
          aria-label="Shop Now"
        >
          <span className="relative z-10">Shop Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </a>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes ken-burns {
          0% {
            transform: scale(1.05) rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotate(0.5deg);
          }
          100% {
            transform: scale(1.05) rotate(0deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            text-shadow: 0 0 5px rgba(253, 224, 71, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(253, 224, 71, 0.8), 0 0 30px rgba(253, 224, 71, 0.6);
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }

        .animate-ken-burns {
          animation: ken-burns 20s ease-in-out infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        @media (max-width: 768px) {
          .animate-fade-in-up {
            animation-duration: 0.6s;
          }
          
          .animation-delay-300 {
            animation-delay: 0.2s;
          }
          
          .animation-delay-600 {
            animation-delay: 0.4s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CallToActionBanner;