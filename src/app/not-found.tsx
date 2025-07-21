"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatedBackground } from "@/components/main";

export default function NotFound() {
  const [animationTime, setAnimationTime] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const animate = () => {
      setAnimationTime(Date.now() * 0.001);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background - consistent with other pages */}
      <div className="opacity-30">
        <AnimatedBackground animationTime={animationTime} isClient={isClient} />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* 404 Error Section */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold horizon-font mb-4">
              <span className="bg-gradient-to-r from-[#ff914d] via-[#ff3131] to-[#e12a2a] bg-clip-text text-transparent">
                404
              </span>
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold orbitron-font mb-6 text-[#ff914d]">
              Page Not Found
            </h2>
          </div>

          {/* Description */}
          <p className="ibm-plex-font text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Looks like you&apos;ve hit a dead end on the track! The page
            you&apos;re looking for doesn&apos;t exist, but don&apos;t worry -
            we&apos;ll get you back to racing speed.
          </p>

          {/* Action Button */}
          <div className="flex justify-center items-center mb-16">
            <Link
              href="/"
              className="relative inline-flex items-center px-8 py-4 font-semibold text-white bg-black border-2 border-[#ff3131] rounded-lg shadow-lg transition-all duration-300 group hover:bg-[#ff3131] hover:text-white"
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
                  className="text-[#ff914d] group-hover:text-white transition-colors"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
              </span>
              <span className="rajdhani-font font-bold tracking-wide">
                Back to Home
              </span>
              <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-white/10 via-white/20 to-transparent skew-x-12"></span>
              </span>
            </Link>
          </div>

          {/* Quick Links Section */}
          <div className="mb-8">
            <h3 className="orbitron-font text-2xl font-bold horizon-font text-[#ff914d] mb-8">
              Quick Navigation
            </h3>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link
              href="/car"
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800/50 hover:border-[#ff914d]/50 rounded-2xl p-6 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-[#ff914d]/20"
            >
              <div className="text-[#ff914d] mb-4 group-hover:text-[#ffb97a] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
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
              <h3 className="text-white font-semibold orbitron-font group-hover:text-[#ff914d] transition-colors">
                Our Car
              </h3>
              <p className="ibm-plex-font text-gray-400 text-sm mt-2 group-hover:text-gray-300 transition-colors">
                Explore our design
              </p>
            </Link>

            <Link
              href="/team"
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800/50 hover:border-[#ff914d]/50 rounded-2xl p-6 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-[#ff914d]/20"
            >
              <div className="text-[#ff914d] mb-4 group-hover:text-[#ffb97a] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
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
              <h3 className="text-white font-semibold orbitron-font group-hover:text-[#ff914d] transition-colors">
                Our Team
              </h3>
              <p className="ibm-plex-font text-gray-400 text-sm mt-2 group-hover:text-gray-300 transition-colors">
                Meet the engineers
              </p>
            </Link>

            <Link
              href="/timeline"
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800/50 hover:border-[#ff914d]/50 rounded-2xl p-6 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-[#ff914d]/20"
            >
              <div className="text-[#ff914d] mb-4 group-hover:text-[#ffb97a] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
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
              <h3 className="text-white font-semibold orbitron-font group-hover:text-[#ff914d] transition-colors">
                Timeline
              </h3>
              <p className="ibm-plex-font text-gray-400 text-sm mt-2 group-hover:text-gray-300 transition-colors">
                Our journey
              </p>
            </Link>

            <Link
              href="mailto:vulcangp04@gmail.com"
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800/50 hover:border-[#ff914d]/50 rounded-2xl p-6 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-[#ff914d]/20"
            >
              <div className="text-[#ff914d] mb-4 group-hover:text-[#ffb97a] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
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
              <h3 className="text-white font-semibold orbitron-font group-hover:text-[#ff914d] transition-colors">
                Contact Us
              </h3>
              <p className="ibm-plex-font text-gray-400 text-sm mt-2 group-hover:text-gray-300 transition-colors">
                Get in touch
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
