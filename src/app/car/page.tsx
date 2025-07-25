"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatedBackground } from "@/components/main";

// Car specification data
const carSpecs = {
  performance: {
    weight: "50g",
    topSpeed: "80 km/h",
    trackTime: "1.3s",
    acceleration: "0-80 km/h in 0.8s",
    downforce: "2.8N at 80 km/h",
    dragCoefficient: "0.18 Cd",
  },
  dimensions: {
    length: "197mm",
    width: "54mm",
    height: "61mm",
    wheelbase: "138mm",
    trackLength: "2m",
    groundClearance: "2mm",
  },
  materials: {
    chassis: "Polyurethane Foam",
    wheels: "Lightweight Polymer",
    axles: "Nylon",
    bearings: "Precision Stainless Steel",
    finish: "High-Gloss Aerodynamic Paint",
  },
};

const carFeatures = [
  {
    title: "Aerodynamic Design",
    description:
      "Streamlined profile with integrated spoiler and diffuser for maximum downforce and minimal drag",
    icon: "🏎️",
    position: { top: "15%", left: "10%" },
    highlight: "front-wing",
  },
  {
    title: "CO2 Propulsion System",
    description:
      "Precision-engineered CO2 chamber with optimized nozzle design for maximum thrust efficiency",
    icon: "🚀",
    position: { top: "25%", right: "10%" },
    highlight: "engine",
  },
  {
    title: "Lightweight Chassis",
    description:
      "Precision-machined polyurethane foam chassis optimized for weight and rigidity",
    icon: "⚡",
    position: { bottom: "35%", left: "10%" },
    highlight: "chassis",
  },
  {
    title: "Precision Wheels",
    description:
      "Low-friction polymer wheels with stainless steel bearings for reduced rolling resistance",
    icon: "⚙️",
    position: { bottom: "25%", right: "10%" },
    highlight: "wheels",
  },
  {
    title: "Advanced Spoiler",
    description:
      "Cutting-edge rear spoiler providing 2.8N downforce at top speed for enhanced stability",
    icon: "📐",
    position: { top: "45%", left: "50%" },
    highlight: "spoiler",
  },
  {
    title: "Drag Reduction",
    description:
      "Computational fluid dynamics optimized body achieving 0.18 drag coefficient",
    icon: "💨",
    position: { bottom: "15%", left: "50%" },
    highlight: "body",
  },
];

export default function CarPage() {
  const [animationTime, setAnimationTime] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [selectedSpec, setSelectedSpec] = useState<
    "performance" | "dimensions" | "materials"
  >("performance");
  const carImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);

    const animate = () => {
      setAnimationTime(Date.now() * 0.001);
      requestAnimationFrame(animate);
    };

    animate();

    // Handle URL fragments to scroll to specific sections
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 100);
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="bg-black/80 text-white min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="opacity-30">
        <AnimatedBackground animationTime={animationTime} isClient={isClient} />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold horizon-font mb-8">
            <span className="text-white">The </span>
            <span className="text-[#ff914d]">Vulcan GP</span>
            <span className="text-white"> Car</span>
          </h1>

          <p className="ibm-plex-font text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Championship-winning STEM Racing race car engineered for maximum
            performance, optimized through advanced aerodynamics and precision
            manufacturing.
          </p>

          {/* Performance Stats */}
          <div className="ibm-plex-font grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="text-center space-y-2 group hover:scale-110 transition-transform duration-300">
              <div className="russo-font text-2xl md:text-3xl font-bold text-[#ff914d] horizon-font group-hover:text-[#ff3131] transition-colors duration-300">
                {carSpecs.performance.weight}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                Total Weight
              </div>
            </div>
            <div className="text-center space-y-2 group hover:scale-110 transition-transform duration-300">
              <div className="russo-font text-2xl md:text-3xl font-bold text-[#ff914d] horizon-font group-hover:text-[#ff3131] transition-colors duration-300">
                {carSpecs.performance.topSpeed}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                Top Speed
              </div>
            </div>
            <div className="text-center space-y-2 group hover:scale-110 transition-transform duration-300">
              <div className="russo-font text-2xl md:text-3xl font-bold text-[#ff914d] horizon-font group-hover:text-[#ff3131] transition-colors duration-300">
                {carSpecs.performance.trackTime}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                Track Time
              </div>
            </div>
            <div className="text-center space-y-2 group hover:scale-110 transition-transform duration-300">
              <div className="russo-font text-2xl md:text-3xl font-bold text-[#ff914d] horizon-font group-hover:text-[#ff3131] transition-colors duration-300">
                {carSpecs.performance.downforce}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                Downforce
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Car Section - REDESIGNED */}
      <section id="car-design" className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="orbitron-font text-4xl md:text-5xl font-bold horizon-font text-center mb-16">
            <span className="text-[#ff914d]">Engineering</span>{" "}
            <span className="text-white">Excellence</span>
          </h2>

          <div className="relative">
            {/* Main Car Showcase - COMPLETELY REDESIGNED */}
            <div className="relative mb-20">
              {/* Background Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff3131]/10 via-transparent to-[#ff914d]/10 blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff914d]/20 rounded-full blur-3xl animate-pulse"></div>

              {/* Car Image Container - NO BORDERS */}
              <div
                ref={carImageRef}
                className="relative w-full h-[500px] md:h-[700px] group overflow-hidden"
              >
                {/* Car Image with Advanced Effects */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative w-full max-w-5xl h-full">
                    <Image
                      src="/CarRender.jpeg"
                      alt="VulcanGP Racing Car"
                      fill
                      className="object-contain transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110 drop-shadow-2xl"
                      priority
                    />

                    {/* Floating Particles Effect */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-[#ff914d] rounded-full opacity-60 animate-bounce"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 2) * 40}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${2 + i * 0.3}s`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Reflection Effect */}
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#ff914d]/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Speed Lines Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-0.5 bg-gradient-to-r from-transparent via-[#ff914d] to-transparent slideRight"
                      style={{
                        top: `${20 + i * 10}%`,
                        left: `-50%`,
                        width: `200%`,
                        transform: `skew(-15deg)`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: `${1 + i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Car Stats Overlay */}
              <div className="ibm-plex-font absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-8 bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-gray-800/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#ff914d] russo-font">
                    50g
                  </div>
                  <div className="text-xs text-gray-400">Weight</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#ff914d] russo-font">
                    80
                  </div>
                  <div className="text-xs text-gray-400">km/h</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#ff914d] russo-font">
                    1.3s
                  </div>
                  <div className="text-xs text-gray-400">Track Time</div>
                </div>
              </div>
            </div>

            {/* Feature Cards - IMPROVED LAYOUT */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {carFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Card Background */}
                  <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 backdrop-blur-lg border border-gray-800/30 hover:border-[#ff914d]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff914d]/20">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff914d]/5 to-[#ff3131]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                    {/* Content */}
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="orbitron-font text-xl font-bold text-[#ff914d] mb-3 group-hover:text-[#ff3131] transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="ibm-plex-font text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect Line */}
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#ff3131] to-[#ff914d] w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="specifications" className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="orbitron-font text-4xl md:text-5xl font-bold horizon-font text-center mb-12">
            <span className="text-white">Technical </span>
            <span className="text-[#ff914d]">Specifications</span>
          </h2>

          {/* Spec Category Tabs */}
          <div className="ibm-plex-font flex flex-wrap justify-center gap-6 mb-12">
            {Object.keys(carSpecs).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedSpec(category as typeof selectedSpec)}
                className={`relative px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-500 overflow-hidden group ${
                  selectedSpec === category
                    ? "bg-gradient-to-r from-[#ff3131] to-[#ff914d] text-white shadow-xl shadow-[#ff914d]/30 scale-105 hover:scale-110 hover:shadow-2xl hover:shadow-[#ff914d]/40"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-[#ff914d]/20"
                }`}
              >
                {/* Background glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-[#ff3131]/20 to-[#ff914d]/20 transition-opacity duration-500 ${
                    selectedSpec === category
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                ></div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>

                {/* Content */}
                <span className="ibm-plex-font relative z-10 flex items-center gap-2">
                  {category === "performance" && "⚡"}
                  {category === "dimensions" && "📏"}
                  {category === "materials" && "🔧"}
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>

                {/* Bottom border indicator */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#ff3131] to-[#ff914d] transition-all duration-500 ${
                    selectedSpec === category
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></div>
              </button>
            ))}
          </div>

          {/* Spec Details */}
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-800/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(carSpecs[selectedSpec]).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between items-center p-4 bg-black/30 rounded-xl border border-gray-800/30 hover:border-[#ff914d]/30 transition-all duration-300 group"
                >
                  <span className="ibm-plex-font text-gray-300 group-hover:text-white transition-colors duration-300">
                    {key.charAt(0).toUpperCase() +
                      key.slice(1).replace(/([A-Z])/g, " $1")}
                  </span>
                  <span className="russo-font text-[#ff914d] font-semibold group-hover:text-[#ff3131] transition-colors duration-300">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section id="development" className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="orbitron-font text-4xl md:text-5xl font-bold horizon-font text-center mb-12">
            <span className="text-[#ff914d]">Development</span>{" "}
            <span className="text-white">Process</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Design & CAD",
                description:
                  "Advanced 3D modeling and aerodynamic simulation using professional CAD software",
                icon: "📐",
              },
              {
                step: "02",
                title: "CFD Analysis",
                description:
                  "Computational fluid dynamics testing to optimize aerodynamic performance",
                icon: "💨",
              },
              {
                step: "03",
                title: "Manufacturing",
                description:
                  "Precision CNC machining and hand-finishing for optimal weight distribution",
                icon: "🔧",
              },
              {
                step: "04",
                title: "Testing & Tuning",
                description:
                  "Track testing and fine-tuning for championship-winning performance",
                icon: "🏆",
              },
            ].map((phase) => (
              <div
                key={phase.step}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#ff3131] to-[#ff914d] rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-[#ff914d]/20 transition-shadow duration-300">
                    {phase.icon}
                  </div>
                  <div className="russo-font absolute -top-2 -right-2 w-8 h-8 bg-black border-2 border-[#ff914d] rounded-full flex items-center justify-center text-xs font-bold text-[#ff914d] group-hover:text-[#ff3131] group-hover:border-[#ff3131] transition-colors duration-300">
                    {phase.step}
                  </div>
                </div>
                <h3 className="orbitron-font text-xl font-bold text-[#ff914d] mb-3 group-hover:text-[#ff3131] transition-colors duration-300">
                  {phase.title}
                </h3>
                <p className="ibm-plex-font text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Championship Results */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="orbitron-font text-4xl md:text-5xl font-bold horizon-font mb-8">
            <span className="text-white">Championship </span>
            <span className="text-[#ff914d]">Results</span>
          </h2>

          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-800/50">
            <div className="ibm-plex-font grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4 group hover:scale-110 transition-transform duration-300">
                <div className="text-4xl mb-4">🏆</div>
                <div className="russo-font text-2xl font-bold text-[#ff914d] horizon-font group-hover:text-[#ff3131] transition-colors duration-300">
                  1st Place
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  STEM Racing India South Regionals
                </div>
              </div>
              <div className="text-center space-y-4 group hover:scale-110 transition-transform duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <div className="russo-font text-2xl font-bold text-[#ff914d] horizon-font group-hover:text-[#ff3131] transition-colors duration-300">
                  3<sup className="text-sm">rd</sup> Fastest
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Track Record: 1.3 seconds
                </div>
              </div>
              <div className="text-center space-y-4 group hover:scale-110 transition-transform duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <div className="russo-font text-2xl font-bold text-[#ff914d] horizon-font group-hover:text-[#ff3131] transition-colors duration-300">
                  Best R&D
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Best Research and Design Award
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
