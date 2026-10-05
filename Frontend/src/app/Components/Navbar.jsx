"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Process", href: "#process" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Blog", href: "#blogs" },
  { name: "Services", href: "#services" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const homeHref = (href) => (isHomePage ? href : `/${href}`);

  // Scroll-spy: update active button while scrolling
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="w-full bg-white/90 z-100 backdrop-blur-md py-4 px-6 md:px-12 fixed top-0 z-50 flex items-center justify-between shadow-sm">
      {/* Logo */}
      <Link href={homeHref("#home")} className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-[#fbbe07] flex items-center justify-center">
          <span className="text-white text-2xl font-bold">M</span>
        </div>
        <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Irfan Iqbal
        </span>
      </Link>

      {/* Desktop Nav */}
      <div className="flex gap-2">
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={homeHref(link.href)}
              onClick={() => setActiveSection(link.href)} // ← instant active on click
              className={`px-4 py-2 rounded-md transition-colors ${
                activeSection === link.href
                  ? "text-[#fbbe07]"
                  : "text-gray-900 hover:bg-[#fbbe07]/10"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <a
          href={homeHref("#contact")}
          className="hidden md:inline-block px-4 h-10 py-[6px] mt-1 rounded-md bg-[#fbbe07] text-white text-lg font-semibold hover:bg-yellow-500 transition-colors"
        >
          Contact
        </a>
      </div>

      {/* Mobile button */}
      <button
        className="md:hidden text-gray-900 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={homeHref(link.href)}
              onClick={() => {
                setActiveSection(link.href);
                setMenuOpen(false);
              }}
              className={`px-6 py-4 text-lg font-semibold transition-colors ${
                activeSection === link.href
                  ? "bg-[#fbbe07] text-white"
                  : "text-gray-900 hover:bg-[#fbbe07]/10"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
