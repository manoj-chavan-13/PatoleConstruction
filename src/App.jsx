import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectViewPage from './pages/ProjectViewPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import VideoModal from './components/VideoModal';
import GsapEffects from './components/GsapEffects';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import { MessageCircle, Phone } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBF9F6] text-[#182026] relative selection:bg-[#EB5A1E] selection:text-white">
      {/* Auto scroll-to-top on route change */}
      <ScrollToTop />

      {/* Intro Video Loading Screen */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* GSAP Global Interactive & Scroll Animations */}
      <GsapEffects />

      {/* Navigation Header */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Routed Pages */}
      <main className="transition-opacity duration-300">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenVideo={() => setIsVideoOpen(true)}
                onOpenContact={() => setIsContactOpen(true)}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutPage onOpenContact={() => setIsContactOpen(true)} />}
          />
          <Route
            path="/services"
            element={<ServicesPage onOpenContact={() => setIsContactOpen(true)} />}
          />
          <Route
            path="/projects"
            element={<ProjectsPage />}
          />
          {/* Project View / Project Details Routes */}
          <Route
            path="/project-view"
            element={<ProjectViewPage />}
          />
          <Route
            path="/project-view/:id"
            element={<ProjectViewPage />}
          />
          <Route
            path="/project-details"
            element={<ProjectViewPage />}
          />
          <Route
            path="/project-details/:id"
            element={<ProjectViewPage />}
          />
          <Route
            path="/projects/view"
            element={<ProjectViewPage />}
          />
          <Route
            path="/projects/view/:id"
            element={<ProjectViewPage />}
          />
          <Route
            path="/projects/:id"
            element={<ProjectViewPage />}
          />
          <Route
            path="/project/:id"
            element={<ProjectViewPage />}
          />
          <Route
            path="/contact"
            element={<ContactPage />}
          />
          {/* Fallback route */}
          <Route
            path="*"
            element={
              <HomePage
                onOpenVideo={() => setIsVideoOpen(true)}
                onOpenContact={() => setIsContactOpen(true)}
              />
            }
          />
        </Routes>
      </main>

      {/* Footer Section */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Floating Action WhatsApp / Call Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href="https://wa.me/919876543210?text=Hello%20Patole%20Constructions,%20I%20would%20like%20to%20inquire%20about%20a%20construction%20project."
          target="_blank"
          rel="noreferrer"
          className="w-13 h-13 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-200 group relative"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="absolute right-full mr-3 bg-neutral-900 text-white text-[12px] font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Chat on WhatsApp
          </span>
        </a>

        {/* Route to Contact Page Directly */}
        <Link
          to="/contact"
          className="w-13 h-13 rounded-full bg-[#EB5A1E] text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-200 group relative cursor-pointer"
          aria-label="Contact Us & Consultation"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-full mr-3 bg-neutral-900 text-white text-[12px] font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Get in Touch
          </span>
        </Link>
      </div>

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </div>
  );
}
