import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import OurServices from '../components/OurServices';
import OurProcess from '../components/OurProcess';
import WhyChooseUs from '../components/WhyChooseUs';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import CompactCta from '../components/CompactCta';

export default function HomePage({
  onOpenVideo,
  onOpenContact,
  onSelectProject,
  onSelectService,
}) {
  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <Hero
        onOpenVideo={onOpenVideo}
        onOpenContact={onOpenContact}
      />

      {/* 2. About Us Section */}
      <AboutUs onOpenContact={onOpenContact} />

      {/* 3. Our Services Section */}
      <OurServices
        onOpenContact={onOpenContact}
        onSelectService={onSelectService}
      />

      {/* 4. Our Process Section */}
      <OurProcess />

      {/* 5. Why Choose Us Section */}
      <WhyChooseUs onOpenContact={onOpenContact} />

      {/* 6. Projects Section */}
      <Projects onSelectProject={onSelectProject} />

      {/* 7. What Our Clients Say (Testimonials) */}
      <Testimonials />

      {/* 8. Creative Compact CTA */}
      <CompactCta />
    </div>
  );
}
