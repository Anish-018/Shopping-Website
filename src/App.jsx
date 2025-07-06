import { useState } from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedGrid from './components/FeaturedGrid';
import CategorySlider from './components/CategorySlider';
import ProductShowcase from './components/ProductShowcase';
import PopularProducts from './components/PopularProducts';
import DiscountsSection from './components/DiscountsSection';
import CallToActionBanner from './components/CallToActionBanner';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedGrid /> 
        <CategorySlider />
        <ProductShowcase />
        <PopularProducts />
        <DiscountsSection />
        <CallToActionBanner />
      </main>
        <Footer />
    </div>
    </>
  )
}

export default App
