import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1)_0%,transparent_70%)]"></div>

        {/* Animated Dots */}
        <div className="absolute inset-0">
          <div
            className="absolute w-1 h-1 bg-[#ff3131]/30 rounded-full animate-pulse"
            style={{ left: "20%", top: "30%" }}
          ></div>
          <div
            className="absolute w-1 h-1 bg-[#ff3131]/30 rounded-full animate-pulse"
            style={{ left: "70%", top: "20%" }}
          ></div>
          <div
            className="absolute w-1 h-1 bg-[#ff3131]/30 rounded-full animate-pulse"
            style={{ left: "80%", top: "70%" }}
          ></div>
          <div
            className="absolute w-1 h-1 bg-[#ff3131]/30 rounded-full animate-pulse"
            style={{ left: "10%", top: "80%" }}
          ></div>
          <div
            className="absolute w-1 h-1 bg-[#ff3131]/30 rounded-full animate-pulse"
            style={{ left: "90%", top: "40%" }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* 404 Error */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#ff5555] via-[#ff3131] to-[#e12a2a] bg-clip-text text-transparent">
              404
            </span>
          </h1>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#ff914d" }}
          >
            Page Not Found
          </h2>
        </div>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Looks like you stumbled upon the wrong link! The page you&apos;re
          looking for doesn&apos;t exist!
        </p>

        {/* Action Button */}
        <div className="flex justify-center items-center mb-16">
          {/* Primary Button - Normal Rectangle */}
          <Link
            href="/"
            className="relative inline-flex items-center px-8 py-4 font-semibold text-[#ff3131] bg-black border-2 border-[#ff3131] rounded-lg shadow-lg transition-all duration-300 group hover:bg-[#ff3131] hover:text-black"
          >
            <span className="mr-3 flex items-center">
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
                className="text-[#ff3131] group-hover:text-black"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9,22 9,12 15,12 15,22" />
              </svg>
            </span>
            <span className="text-[#ff3131] group-hover:text-black font-bold tracking-wide">
              Back to Home
            </span>
            <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-white/10 via-white/20 to-transparent skew-x-12"></span>
            </span>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <Link
            href="/car"
            className="bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700/30 hover:border-[#ff914d]/30 rounded-lg p-4 transition-all duration-300 group"
          >
            <div className="text-[#ff914d] mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto"
              >
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18.4 10c-.4-.8-1.2-1.3-2.1-1.3H13.5c-.9 0-1.7.5-2.1 1.3L9.5 12H2v4h2" />
                <circle cx="7" cy="17" r="2" />
                <path d="M9 17h6" />
                <circle cx="17" cy="17" r="2" />
              </svg>
            </div>
            <h3 className="text-white font-semibold group-hover:text-[#ff914d] transition-colors">
              The Car
            </h3>
          </Link>

          <Link
            href="/team"
            className="bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700/30 hover:border-[#ff914d]/30 rounded-lg p-4 transition-all duration-300 group"
          >
            <div className="text-[#ff914d] mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-white font-semibold group-hover:text-[#ff914d] transition-colors">
              Our Team
            </h3>
          </Link>

          <Link
            href="/timeline"
            className="bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700/30 hover:border-[#ff914d]/30 rounded-lg p-4 transition-all duration-300 group"
          >
            <div className="text-[#ff914d] mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
                <path d="M12 7v5l4 2" />
              </svg>
            </div>
            <h3 className="text-white font-semibold group-hover:text-[#ff914d] transition-colors">
              Timeline
            </h3>
          </Link>

          <Link
            href="mailto:vulcangp04@gmail.com"
            className="bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700/30 hover:border-[#ff914d]/30 rounded-lg p-4 transition-all duration-300 group"
          >
            <div className="text-[#ff914d] mb-2">
              {/* Mail SVG (envelope icon) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3 className="text-white font-semibold group-hover:text-[#ff914d] transition-colors">
              Contact Us
            </h3>
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-20 bg-gradient-to-b from-[#ff914d] to-transparent opacity-30"></div>
      <div className="absolute bottom-1/4 right-10 w-2 h-20 bg-gradient-to-t from-[#ff914d] to-transparent opacity-30"></div>
    </div>
  );
}
