import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slideshow from './components/Slideshow'; // Direct import for Slideshow
import WhatsAppButton from './components/WhatsAppButton'; // Import the WhatsApp Button
import './index.css';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy-load other components
const PromoBanner = lazy(() => import('./components/PromoBanner'));
const HotDeals = lazy(() => import('./components/HotDeals'));
const ReviewsSection = lazy(() => import('./components/ReviewsSection'));
const FeaturesSection = lazy(() => import('./components/FeaturesSection'));
const Shop = lazy(() => import('./pages/Shop'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));

// ScrollToTop Component
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to top
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <ScrollToTop /> {/* Scroll to top on route change */}
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Slideshow /> {/* No lazy loading for Slideshow */}
                    <HotDeals />
                    <PromoBanner />
                    <FeaturesSection />
                    <ReviewsSection />
                  </>
                }
              />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <Footer />
        <WhatsAppButton /> {/* Add the WhatsApp Button */}
      </div>
    </Router>
  );
}

export default App;
