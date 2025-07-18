"use client";

import Image from "next/image";

interface HeroSectionProps {
  onScrollToTeam: () => void;
}

export default function HeroSection({ onScrollToTeam }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center z-10">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Logo.png"
          alt="VulcanGP Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Gradient overlays for visual depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,49,49,0.1)_0%,transparent_70%)]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-center">
            <Image
              src="/Logo.png"
              alt="VulcanGP Logo"
              width={300}
              height={300}
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-[#ff914d] text-6xl md:text-7xl font-bold mb-6 horizon-font">
            VULCAN GP
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Racing towards innovation with cutting-edge STEM technology and
            engineering excellence
          </p>
        </div>
      </div>

      {/* Scroll Indicator - Fixed to float over background */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={onScrollToTeam}
          className="animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300"
        >
          <div className="w-6 h-10 border-2 border-[#ff914d] rounded-full flex justify-center bg-black/20 backdrop-blur-sm">
            <div className="w-1 h-3 bg-[#ff914d] rounded-full mt-2 animate-pulse"></div>
          </div>
        </button>
      </div>

      {/* Taper to gray at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0C111D]/80 to-transparent"></div>
    </section>
  );
}
