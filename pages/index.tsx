import React from 'react';
import Layout from '../components/common/Layout';
import HeroBanner from '../components/home/HeroBanner';
import FeaturedCourses from '../components/home/FeaturedCourses';
import Testimonials from '../components/home/Testimonials';
import Features from '../components/home/Features';

export default function Home() {
  return (
    <Layout title="Sumentor - Платформа для разностороннего развития">
      <HeroBanner />
      <Features />
      <FeaturedCourses />
      <Testimonials />
    </Layout>
  );
} 