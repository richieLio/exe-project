"use client";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import About from "@/app/components/about";
import Combo from "@/app/components/combo";
import RoomTypes from "@/app/components/room-types";
import Facilities from  "@/app/components/facilities";
import Contact from "@/app/components/contact";
import Testimonials from "@/app/components/testimonials";
import Blog from "@/app/components/blog";
import Villas from "@/app/components/villas"
import { useState, useEffect } from "react";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main>
        <section id="home">
          <Hero/>
        </section>

        <section id="about">
         <About />
        </section>

        <section id="combo">
          <Combo/>
        </section>
        
        <section id="room-types">
        <Villas />
        </section>
        
        <section id="facilities">
         <Facilities/>
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="blog">
          <Blog />
        </section>
      
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Miha Villa. All rights reserved.</p>
        </div>
      </footer>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}