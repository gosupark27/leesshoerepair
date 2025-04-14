"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["top", "info", "services", "testimonials", "gallery", "about"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen w-full bg-[#fdfdfb] text-[#1a1a1a] font-serif scroll-smooth">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#fdfdfb] shadow-sm border-b border-gray-200 py-4 px-6 flex justify-between items-center text-sm font-medium">
        <div className="hidden md:flex space-x-6">
          {["top", "info", "services", "testimonials", "gallery", "about"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`transition duration-200 border-b-2 pb-1 capitalize ${
                activeSection === id ? "border-blue-700 text-blue-700" : "border-transparent hover:border-blue-500"
              }`}
            >
              {id === "top" ? "Home" : id === "testimonials" ? "Reviews" : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <select
            onChange={(e) => (window.location.href = e.target.value)}
            className="text-sm border rounded px-2 py-1"
          >
            <option value="#top">Menu</option>
            <option value="#top">Home</option>
            <option value="#info">Info</option>
            <option value="#services">Services</option>
            <option value="#testimonials">Reviews</option>
            <option value="#gallery">Gallery</option>
            <option value="#about">About</option>
          </select>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="top" className="w-full py-28 px-4 text-center bg-[#f0f0ed] border-b border-gray-300">
        <h1 className="text-6xl font-serif font-semibold tracking-tight mb-4">Lee's Shoe & Luggage Repair</h1>
        <p className="text-xl font-light italic mb-4">A heritage of craftsmanship. A legacy of trust.</p>
        <p className="text-base max-w-xl mx-auto mb-6 font-sans">
          Walk-ins are welcome, but appointments are encouraged to ensure prompt service. Please explore our offerings below.
        </p>
        <a href="https://calendly.com/your-calendly-link" target="_blank" rel="noopener noreferrer">
          <Button className="text-base px-8 py-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white transition">Book Now</Button>
        </a>
      </section>

      {/* Business Info Section */}
      <section id="info" className="px-6 py-20 max-w-3xl mx-auto border-b border-gray-200">
        <h2 className="text-4xl font-semibold mb-6 font-serif">Plan Your Visit</h2>
        <ul className="space-y-3 text-lg leading-relaxed font-sans">
          <li><strong>Hours:</strong>
            <ul className="ml-6 mt-1 list-disc text-base">
              <li>Mon: 1 PM – 5 PM</li>
              <li>Tue–Fri: 10 AM – 6 PM</li>
              <li>Sat: 10 AM – 3 PM</li>
              <li>Sun: Closed</li>
            </ul>
          </li>
          <li><strong>Location:</strong> <a href="https://maps.app.goo.gl/zLkrz5RM12U5RRpx5" className="text-blue-700 underline">6750 W Peoria Ave Ste 108, Peoria, AZ 85345</a></li>
          <li><strong>Phone:</strong> <a href="tel:6239793117" className="text-blue-700 underline">(623) 979–3117</a></li>
        </ul>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 bg-[#fafaf9] border-b border-gray-200">
        <h2 className="text-4xl font-semibold mb-8 text-center font-serif">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-sm border border-gray-300 hover:shadow-md transition">
            <CardContent className="p-6 text-lg font-sans">
              <p className="font-semibold">Shoe Repair</p>
              <p className="text-sm text-gray-700 mt-2">From soles and heels to stitching and restoration. Revive your favorite footwear with precision and care.</p>
            </CardContent>
          </Card>
          <Card className="shadow-sm border border-gray-300 hover:shadow-md transition">
            <CardContent className="p-6 text-lg font-sans">
              <p className="font-semibold">Luggage & Zipper Repair</p>
              <p className="text-sm text-gray-700 mt-2">We fix tears, replace zippers, and ensure your bags are ready for the journey ahead.</p>
            </CardContent>
          </Card>
          <Card className="shadow-sm border border-gray-300 hover:shadow-md transition">
            <CardContent className="p-6 text-lg font-sans">
              <p className="font-semibold">Bag Restoration & Cleaning</p>
              <p className="text-sm text-gray-700 mt-2">Leather conditioning, deep cleans, and detailed restoration to bring your bags back to life.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reviews & Gallery Section */}
      <section id="testimonials" className="px-6 py-20 max-w-5xl mx-auto border-b border-gray-200">
        <h2 className="text-4xl font-semibold mb-6 text-center font-serif">Client Testimonials</h2>
        <p className="text-center text-base italic mb-8 text-gray-600 font-sans">Hear what our community says about their experience with us.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
            <CardContent className="p-5 text-base italic font-sans">"Excellent work. My boots look brand new again." – Sarah K.</CardContent>
          </Card>
          <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
            <CardContent className="p-5 text-base italic font-sans">"Fast, professional, and quality service." – John D.</CardContent>
          </Card>
        </div>
      </section>

      {/* Visual Gallery Section */}
      <section id="gallery" className="px-6 py-20 bg-white border-b border-gray-200">
        <h2 className="text-4xl font-semibold mb-6 text-center font-serif">Gallery of Our Work</h2>
        <p className="text-center text-base text-gray-600 font-sans mb-10">A visual showcase of repairs, restorations, and transformations.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-full aspect-square bg-gray-200 animate-pulse rounded"></div>
          ))}
        </div>
        <p className="mt-8 text-sm text-center text-gray-400 font-sans italic">Gallery coming soon — follow us on Instagram @leesshoerepair</p>
      </section>

      {/* About & Contact Section */}
      <section id="about" className="px-6 py-20 bg-[#f0f0ed]">
        <h2 className="text-4xl font-semibold mb-6 text-center font-serif">About the Artisan</h2>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed text-center font-sans">
          For over three decades, Lee’s Shoe & Luggage Repair has carried forward a tradition of precision and pride in every stitch, polish, and sole replacement. Rooted in heritage and guided by disciplined diligence, our work speaks for itself.
        </p>
        <div className="mt-8 text-center text-base font-sans">
          <p>Email: <a href="mailto:lee.sr.phx@gmail.com" className="text-blue-700 underline">lee.sr.phx@gmail.com</a></p>
        </div>
      </section>
    </main>
  );
}
