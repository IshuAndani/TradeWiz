import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import ProductsPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import SignupPage from './landing_page/signup/SignupPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <HomePage></HomePage> */}
      {/* <AboutPage></AboutPage> */}
      {/* <ProductsPage></ProductsPage> */}
      {/* <PricingPage></PricingPage> */}
      {/* <SupportPage></SupportPage> */}
      <SignupPage></SignupPage>
  </React.StrictMode>
);
