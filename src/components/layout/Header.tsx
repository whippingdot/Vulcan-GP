"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-black/95 backdrop-blur-xl border-[#e12a2a]/30 shadow-2xl shadow-red-900/20"
          : "bg-gradient-to-b from-black/20 via-black/10 to-transparent backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center cursor-pointer group relative"
        >
          <Image
            src="/Logo.png"
            alt="Vulcan GP Logo"
            width={48}
            height={48}
            className="w-12 h-12 object-contain align-middle mr-3 -mt-1 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_#ff914d]"
            priority
          />
          <div className="relative flex items-center">
            <span
              className={`horizon-font text-2xl font-bold transition-all duration-300 group-hover:text-red-400 align-middle`}
              style={{ color: "#ff914d" }}
            >
              Vulcan GP
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-[#ff3131] transition-all duration-300 group-hover:w-full"></div>
          </div>
        </Link>

        {/* Desktop Navigation with Enhanced Hover Effects */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { href: "/", label: "Home" },
            { href: "/team", label: "About Us" },
            { href: "/car", label: "Our Car" },
            { href: "/timeline", label: "Timeline" },
          ].map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                className="relative group py-2 px-1 transition-all duration-300"
              >
                {/* Invisible bold text to reserve space */}
                <span
                  className="invisible font-bold ibm-plex-font"
                  aria-hidden="true"
                >
                  {item.label}
                </span>

                {/* Actual visible text */}
                <span
                  className={`ibm-plex-font absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? "font-bold group-hover:text-[#ffb97a]"
                      : "text-gray-300 hover:text-white"
                  }`}
                  style={isActive ? { color: "#ff914d" } : {}}
                >
                  {item.label}
                </span>

                {/* Underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#ff3131] to-[#e12a2a] transition-all duration-300 w-0 group-hover:w-full`}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* Fixed Sponsor Button with proper racing icon */}
        <div className="hidden md:block">
          <Link
            href="mailto:vulcangp@outlook.com?subject=Sponsorship Inquiry"
            className="relative inline-flex items-center px-6 py-3 font-semibold text-white bg-black border-2 border-[#ff3131] rounded-lg shadow-lg transition-all duration-300 group hover:bg-[#ff3131] hover:text-white"
            style={{ transform: "skew(-8deg)" }}
          >
            {/* Trophy/Flag icon */}
            <span className="mr-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#ff914d]"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
            </span>
            <span className="font-bold tracking-wide rajdhani-font">
              Sponsor Us
            </span>
            {/* Chevron arrow */}
            <span className="ml-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#ff3131] group-hover:text-white transition-colors"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </span>
            {/* Subtle metallic shine on hover */}
            <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-white/10 via-white/20 to-transparent skew-x-12"></span>
            </span>
          </Link>
        </div>

        {/* Enhanced Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-[#e12a2a]/20 transition-all duration-300 group"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:scale-110"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/96 backdrop-blur-xl border-t border-[#e12a2a]/30">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {[
              { href: "/", label: "Home" },
              { href: "/team", label: "About Us" },
              { href: "/car", label: "Our Car" },
              { href: "/timeline", label: "Timeline" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block text-gray-300 hover:text-white transition-all duration-300 py-2 px-4 rounded-lg hover:bg-[#e12a2a]/10 relative group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
                <span className="absolute left-4 bottom-0 w-0 h-0.5 bg-[#ff3131] transition-all duration-300 group-hover:w-1/3"></span>
              </Link>
            ))}

            {/* Updated Mobile Sponsor Button to Match Desktop Design */}
            <div className="mt-6 flex justify-center">
              <Link
                href="mailto:vulcangp@outlook.com?subject=Sponsorship Inquiry"
                className="relative inline-flex items-center px-6 py-3 font-semibold text-white bg-black border-2 border-[#ff3131] rounded-lg shadow-lg transition-all duration-300 group hover:bg-[#ff3131] hover:text-white"
                style={{ transform: "skew(-8deg)" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {/* Trophy/Flag icon */}
                <span className="mr-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#ff914d]"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                </span>
                <span className="font-bold tracking-wide rajdhani-font">
                  Sponsor Us
                </span>
                {/* Chevron arrow */}
                <span className="ml-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#ff3131] group-hover:text-white transition-colors"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
                {/* Subtle metallic shine on hover */}
                <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-white/10 via-white/20 to-transparent skew-x-12"></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
