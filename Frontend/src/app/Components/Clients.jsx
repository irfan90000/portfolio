"use client";
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const clients = [
  "CodeWire Solutions",
  "Intelliscence",
  "Bluehorntech",
  "Digital Dealership System",
  "CoolBuffs",
  "ChefsHub",
  "Project360",
  "XStream Gym",
  "CareOX ERP",
  "COMSATS University",
];

const testimonials = [
  {
    quote:
      "Irfan led our Digital Dealership platform from concept to launch. His DMS integrations and AI-powered dashboards transformed how our dealerships track performance across the USA.",
    name: "Project Stakeholder",
    role: "Digital Dealership System, USA",
  },
  {
    quote:
      "The RAG-powered AI chatbot Irfan built for CoolBuffs was a game-changer. Candidates get instant, accurate answers from our content. His FastAPI microservice integrated seamlessly with our Laravel platform.",
    name: "Platform Owner",
    role: "CoolBuffs Recruitment Platform",
  },
  {
    quote:
      "One Laravel API backend powering our website, admin panels, Nuxt dashboard and Flutter app — Irfan made it look easy. Clean architecture, role-based access done right, delivered on time.",
    name: "Product Lead",
    role: "ChefsHub Marketplace",
  },
  {
    quote:
      "From junior developer to senior, Irfan consistently delivered. Project360's Gantt charts, profitability dashboards and real-time messaging were built to a standard our enterprise clients loved.",
    name: "Engineering Manager",
    role: "Intelliscence",
  },
];

export default function Clients() {
  const [index, setIndex] = useState(0);

  // Auto-advance testimonial every 6 seconds
  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      6000,
    );
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <section className="bg-white py-16 overflow-hidden">
      {/* ===== Happy Clients ===== */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Happy Clients
        </h2>
        <p className="mt-6 text-gray-500 text-lg max-w-xl mx-auto">
          I&rsquo;ve had the pleasure of working with a diverse range of
          companies — from USA-based startups to established brands across 8+
          years of development.
        </p>
      </div>

      {/* Marquee slider */}
      <div className="mt-14 relative">
        <div className="flex w-max animate-marquee gap-16 items-center">
          {[...clients, ...clients].map((client, i) => (
            <span
              key={i}
              className="text-3xl font-extrabold text-gray-300 whitespace-nowrap select-none hover:text-[#fbbe07] transition-colors"
            >
              {client}
            </span>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      </div>

      {/* ===== Testimonial (inside same section) ===== */}
      <div className="bg-gradient-to-br from-[#fbbe07]/10 via-white to-[#fbbe07]/5  max-w-[100%] py-10 md:px-30  text-center mt-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Testimonial
        </h2>
        <p className="mt-6 text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
          Feedback from clients and teams I&rsquo;ve worked with over 8+ years
          of building software.
        </p>

        {/* Quote card */}
        <div className="mt-16 relative">
          <FaQuoteLeft className="mx-auto text-[#fbbe07]/40 text-5xl" />

          <blockquote className="mt-8 text-xl md:text-2xl font-bold text-gray-900 leading-relaxed min-h-[120px] transition-opacity duration-300">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          <p className="mt-8 text-lg font-bold text-gray-900">{t.name}</p>
          <p className="text-gray-500">{t.role}</p>
        </div>

        {/* Arrows */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-[#fbbe07] hover:text-white hover:border-[#fbbe07] transition-colors"
          >
            <FaArrowLeft size={16} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-[#fbbe07] hover:text-white hover:border-[#fbbe07] transition-colors"
          >
            <FaArrowRight size={16} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-[#fbbe07]"
                  : "w-2 bg-gray-300 hover:bg-[#fbbe07]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
