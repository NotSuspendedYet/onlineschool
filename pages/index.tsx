import React from 'react';
import Layout from '../components/common/Layout';
import HeroBanner from '../components/home/HeroBanner';
import FeaturedCourses from '../components/home/FeaturedCourses';
import Testimonials from '../components/home/Testimonials';

export default function Home() {
  return (
    <Layout title="Sumentor - Платформа для разностороннего развития" children={
      <>
        <HeroBanner />
        <FeaturedCourses />
        <Testimonials />
      </>
    } />
  );
} 