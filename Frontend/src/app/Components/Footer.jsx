"use client";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const homeHref = (href) => (pathname === "/" ? href : `/${href}`);

  return (
    <footer className="bg-[#1a2332] text-white mt-50 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand / Logo Section */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg">
            I
          </div>
          <span className="text-2xl font-bold tracking-tight">Irfan Iqbal</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-gray-300 font-medium text-sm md:text-base">
          <a
            href={homeHref("#home")}
            className="hover:text-purple-400 transition-colors"
          >
            Home
          </a>
          <a
            href={homeHref("#about")}
            className="hover:text-purple-400 transition-colors"
          >
            About
          </a>
          <a
            href={homeHref("#blogs")}
            className="hover:text-purple-400 transition-colors"
          >
            Blog
          </a>
          <a
            href={homeHref("#portfolio")}
            className="hover:text-purple-400 transition-colors"
          >
            Portfolio
          </a>
          <a
            href={homeHref("#process")}
            className="hover:text-purple-400 transition-colors"
          >
            Process
          </a>
          <a
            href={homeHref("#contact")}
            className="hover:text-purple-400 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
