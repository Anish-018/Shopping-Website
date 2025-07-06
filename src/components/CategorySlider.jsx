import React, { useId, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Icon component for clarity
const CategoryIcon = ({ name }) => {
  switch (name) {
    case "Phones":
      return (
        <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <circle cx="12" cy="18" r="1" />
        </svg>
      );
    case "Smart Watches":
      return (
        <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
          <rect x="7" y="6" width="10" height="12" rx="3" />
          <rect x="9" y="2" width="6" height="2" rx="1" />
          <rect x="9" y="20" width="6" height="2" rx="1" />
        </svg>
      );
    case "Cameras":
      return (
        <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <circle cx="12" cy="13.5" r="3" />
          <rect x="8" y="3" width="8" height="4" rx="1" />
        </svg>
      );
    case "Headphones":
      return (
        <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 15v-2a8 8 0 0116 0v2" />
          <rect x="2" y="15" width="4" height="6" rx="2" />
          <rect x="18" y="15" width="4" height="6" rx="2" />
        </svg>
      );
    case "Computers":
      return (
        <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <rect x="8" y="18" width="8" height="2" rx="1" />
        </svg>
      );
    case "Gaming":
      return (
        <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="7" width="18" height="10" rx="5" />
          <circle cx="8" cy="12" r="1" />
          <circle cx="16" cy="12" r="1" />
          <path d="M12 10v4" />
          <path d="M10 12h4" />
        </svg>
      );
    default:
      return null;
  }
};

const defaultCategories = [
  { name: "Phones" },
  { name: "Smart Watches" },
  { name: "Cameras" },
  { name: "Headphones" },
  { name: "Computers" },
  { name: "Gaming" },
];

const CategorySlider = ({
  categories = defaultCategories,
  onCategorySelect,
  selectedCategory,
}) => {
  const [active, setActive] = useState(selectedCategory || null);
  const sectionId = useId();

  const handleSelect = (name) => {
    setActive(name);
    if (onCategorySelect) onCategorySelect(name);
  };

  return (
    <section
      className="bg-gray-50 py-8 px-4 md:px-12 rounded-lg"
      role="region"
      aria-labelledby={sectionId}
    >
      <div className="flex items-center justify-between mb-6">
        <h2
          id={sectionId}
          className="text-lg font-semibold text-gray-900"
        >
          Browse By Category
        </h2>
        <div className="flex gap-2">
          <button
            className="swiper-button-prev rounded-full p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Previous categories"
            tabIndex={0}
            type="button"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="swiper-button-next rounded-full p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Next categories"
            tabIndex={0}
            type="button"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, A11y, Keyboard]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        keyboard={{ enabled: true }}
        a11y={{
          prevSlideMessage: "Previous categories",
          nextSlideMessage: "Next categories",
        }}
        spaceBetween={24}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="!overflow-visible"
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.name}>
            <button
              className={`w-full h-32 flex flex-col items-center justify-center bg-gray-100 rounded-xl transition-all duration-200
                hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400
                ${active === cat.name ? "ring-2 ring-gray-800 bg-white shadow-lg scale-105" : ""}
              `}
              aria-label={cat.name}
              aria-current={active === cat.name ? "true" : undefined}
              tabIndex={0}
              type="button"
              onClick={() => handleSelect(cat.name)}
            >
              <CategoryIcon name={cat.name} />
              <span className="text-gray-800 font-medium">{cat.name}</span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CategorySlider;