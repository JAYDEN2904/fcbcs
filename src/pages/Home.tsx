import React from 'react';
import Hero from '../components/home/Hero';
import NewsCarousel from '../components/home/NewsCarousel';
import Testimonials from '../components/home/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <NewsCarousel />
      <Testimonials />
    </main>
  );
}