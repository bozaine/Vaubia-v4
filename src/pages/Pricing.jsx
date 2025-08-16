import React from 'react';
import PriceCarousel from '../components/PriceCarousel.jsx';
import '../styles/pricing.css';

export default function Pricing() {
  return (
    <main className="pricing container">
      <h1>Tarifs</h1>
      <PriceCarousel />
    </main>
  );
}
