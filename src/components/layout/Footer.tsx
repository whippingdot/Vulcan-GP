import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#0C111D] to-black border-t border-red-900/20 z-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.03)_0%,transparent_50%)]"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center">
              <Image
                src="/Logo.png"
                alt="VulcanGP Logo"
                width={52}
                height={52}
                className="object-contain align-middle mr-2 -mt-1"
              />
              <span
                className="horizon-font text-2xl font-bold align-middle orange-text"
                style={{ color: "#ff914d" }}
              >
                Vulcan GP
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6">
              Racing towards innovation with cutting-edge STEM technology and
              engineering excellence. Inspiring the next generation of engineers
              and scientists.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 red-text flex-shrink-0"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a
                  href="mailto:vulcangp04@gmail.com"
                  className="text-sm hover:text-[#ff3131] transition-colors"
                >
                  vulcangp04@gmail.com
                </a>
              </div>

              <div className="flex items-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 red-text flex-shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-sm">+91 76808 90880</span>
              </div>

              <div className="flex items-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 red-text flex-shrink-0"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-sm">Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links - Center Aligned */}
          <div className="text-center">
            <h3 className="text-xl font-semibold orange-text mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-[#ff3131] transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-400 hover:text-[#ff3131] transition-colors duration-200 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/car"
                  className="text-gray-400 hover:text-[#ff3131] transition-colors duration-200 text-sm"
                >
                  Our Car
                </Link>
              </li>
              <li>
                <Link
                  href="/timeline"
                  className="text-gray-400 hover:text-[#ff3131] transition-colors duration-200 text-sm"
                >
                  Timeline
                </Link>
              </li>
              <li>
                <a
                  href="https://stemracing.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#ff3131] transition-colors duration-200 text-sm"
                >
                  STEM Racing
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Connected - Right Aligned */}
          <div className="text-right">
            <h3 className="text-xl font-semibold orange-text mb-6">
              Stay Connected
            </h3>

            {/* Instagram Link */}
            <div className="mb-6">
              <a
                href="https://instagram.com/vulcangp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-[#e12a2a] to-[#b71f24] hover:from-[#b71f24] hover:to-[#8a1620] text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-[#ff3131]/25"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 flex-shrink-0"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                Follow Us
              </a>
            </div>

            {/* Sponsor Button with Trophy Icon */}
            <div>
              <Link
                href="/#"
                className="inline-flex items-center border-2 border-[#e12a2a] text-red-400 hover:bg-[#e12a2a] hover:text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 flex-shrink-0"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
                Sponsor Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 VulcanGP. All rights reserved. Built with passion for STEM
            racing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
