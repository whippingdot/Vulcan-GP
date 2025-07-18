"use client";

import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
import { AnimatedBackground } from "@/components/main";

// Car specification data
const carSpecs = {
  performance: {
    weight: "50g",
    topSpeed: "75 km/h",
    trackTime: "1.3s",
    acceleration: "0-75 km/h in 0.8s",
    downforce: "2.8N at 75 km/h",
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
    chassis: "Balsa Wood & Carbon Fiber",
    wheels: "Lightweight Polymer",
    axles: "Carbon Fibre",
    bearings: "Ceramic Ball Bearings",
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
      "Carbon fiber reinforced balsa wood construction achieving optimal strength-to-weight ratio",
    icon: "⚡",
    position: { bottom: "35%", left: "10%" },
    highlight: "chassis",
  },
  {
    title: "Precision Wheels",
    description:
      "Low-friction polymer wheels with ceramic bearings for reduced rolling resistance",
    icon: "⚙️",
    position: { bottom: "25%", right: "10%" },
    highlight: "wheels",
  },
  {
    title: "Advanced Spoiler",
    description:
      "Multi-element rear spoiler providing 2.8N downforce at top speed for enhanced stability",
    icon: "📐",
    position: { top: "45%", left: "50%" },
    highlight: "spoiler",
  },
  {
    title: "Drag Reduction",
    description:
      "Computational fluid dynamics optimized body achieving 0.25 drag coefficient",
    icon: "💨",
    position: { bottom: "15%", left: "50%" },
    highlight: "body",
  },
];

export default function CarPage() {
  const [animationTime, setAnimationTime] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
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
            <span className="text-[#ff914d]">VulcanGP</span>
            <span className="text-white"> Car</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Championship-winning F1 in Schools race car engineered for maximum
            performance , optimized through advanced aerodynamics and precision
            manufacturing.
          </p>

          {/* Performance Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="text-center space-y-2 group hover:scale-110 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-bold text-[#ff914d] horizon-font group-hover:text-[#ff3131] transition-colors duration-300">
                {carSpecs.performance.weight}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                Total Weight
              </div>
            </div>
            <div className="text-center space-y-2 group hover:scale-110 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-bold text-[#ff914d] horizon-font group-hover:text-[#ff3131] transition-colors duration-300">
                {carSpecs.performance.topSpeed}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                Top Speed
              </div>
            </div>
            <div className="text-center space-y-2 group hover:scale-110 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-bold text-[#ff914d] horizon-font group-hover:text-[#ff3131] transition-colors duration-300">
                {carSpecs.performance.trackTime}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                Track Time
              </div>
            </div>
            <div className="text-center space-y-2 group hover:scale-110 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-bold text-[#ff914d] horizon-font group-hover:text-[#ff3131] transition-colors duration-300">
                {carSpecs.performance.downforce}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                Downforce
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Car Section */}
      <section id="car-design" className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold horizon-font text-center mb-16">
            <span className="text-[#ff914d]">Engineering</span>{" "}
            <span className="text-white">Excellence</span>
          </h2>

          <div className="relative">
            {/* Car Image Container */}
            <div
              ref={carImageRef}
              className="relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl p-8 md:p-16 backdrop-blur-sm border border-gray-800/50 mb-12"
            >
              {/* Car Image Placeholder - Replace with actual car image */}
              <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center">
                <div className="w-full max-w-4xl h-full bg-gradient-to-r from-[#ff3131]/20 to-[#ff914d]/20 rounded-2xl flex items-center justify-center border-2 border-[#ff914d]/30">
                  <div className="text-center">
                    <div className="text-6xl md:text-8xl mb-4">🏎️</div>
                    <p className="text-xl text-gray-300">
                      3D Car Model / Image Goes Here
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Interactive 3D model or high-res car photography
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Feature Points */}
              {carFeatures.map((feature, featureIndex) => (
                <div
                  key={feature.title}
                  className="absolute cursor-pointer group"
                  style={feature.position}
                  onMouseEnter={() => setActiveFeature(feature.title)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  {/* Feature Point */}
                  <div className="relative">
                    <div className="w-6 h-6 bg-[#ff914d] rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white shadow-lg group-hover:scale-125 group-hover:bg-[#ff3131] transition-all duration-300">
                      {featureIndex + 1}
                    </div>

                    {/* Pulsing Ring */}
                    <div className="absolute inset-0 w-6 h-6 rounded-full bg-[#ff914d]/30 animate-pulse group-hover:bg-[#ff3131]/30"></div>

                    {/* Feature Tooltip */}
                    <div
                      className={`absolute z-20 p-4 bg-black/90 border border-[#ff914d]/50 rounded-lg backdrop-blur-sm min-w-[280px] transition-all duration-300 ${
                        activeFeature === feature.title
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
                      style={{
                        left: feature.position.left ? "-140px" : "auto",
                        right: feature.position.right ? "-140px" : "auto",
                        top: feature.position.top ? "40px" : "auto",
                        bottom: feature.position.bottom ? "40px" : "auto",
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">{feature.icon}</div>
                        <div>
                          <h4 className="text-[#ff914d] font-semibold mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-gray-300">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Cards Below */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {carFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className={`bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 backdrop-blur-sm border transition-all duration-300 hover:scale-105 cursor-pointer ${
                    activeFeature === feature.title
                      ? "border-[#ff914d] shadow-lg shadow-[#ff914d]/20"
                      : "border-gray-800/50 hover:border-[#ff914d]/30"
                  }`}
                  onMouseEnter={() => setActiveFeature(feature.title)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#ff914d] mb-2 group-hover:text-[#ff3131] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
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
          <h2 className="text-4xl md:text-5xl font-bold horizon-font text-center mb-12">
            <span className="text-white">Technical </span>
            <span className="text-[#ff914d]">Specifications</span>
          </h2>

          {/* Spec Category Tabs */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
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
                <span className="relative z-10 flex items-center gap-2">
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
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {key.charAt(0).toUpperCase() +
                      key.slice(1).replace(/([A-Z])/g, " $1")}
                  </span>
                  <span className="text-[#ff914d] font-semibold group-hover:text-[#ff3131] transition-colors duration-300">
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
          <h2 className="text-4xl md:text-5xl font-bold horizon-font text-center mb-12">
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
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-black border-2 border-[#ff914d] rounded-full flex items-center justify-center text-xs font-bold text-[#ff914d] group-hover:text-[#ff3131] group-hover:border-[#ff3131] transition-colors duration-300">
                    {phase.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#ff914d] mb-3 group-hover:text-[#ff3131] transition-colors duration-300">
                  {phase.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
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
          <h2 className="text-4xl md:text-5xl font-bold horizon-font mb-8">
            <span className="text-white">Championship </span>
            <span className="text-[#ff914d]">Results</span>
          </h2>

          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-800/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4 group hover:scale-110 transition-transform duration-300">
                <div className="text-4xl mb-4">🏆</div>
                <div className="text-2xl font-bold text-[#ff914d] horizon-font group-hover:text-[#ff3131] transition-colors duration-300">
                  1st Place
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  STEM Racing India South Regionals
                </div>
              </div>
              <div className="text-center space-y-4 group hover:scale-110 transition-transform duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <div className="text-2xl font-bold text-[#ff914d] horizon-font group-hover:text-[#ff3131] transition-colors duration-300">
                  3<sup className="text-sm">rd</sup> Fastest
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Track Record: 1.3 seconds
                </div>
              </div>
              <div className="text-center space-y-4 group hover:scale-110 transition-transform duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <div className="text-2xl font-bold text-[#ff914d] horizon-font group-hover:text-[#ff3131] transition-colors duration-300">
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
