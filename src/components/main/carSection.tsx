import Link from "next/link";
import Image from "next/image";

export default function CarSection() {
  return (
    <section className="relative py-20 bg-black/80 z-10">
      {/* Taper from gray at top */}
      {/* <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0C111D] to-transparent"></div> */}

      {/* Taper to gray at bottom */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0C111D] to-transparent"></div> */}

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800/50 hover:border-[#ff914d]/50 rounded-2xl p-8 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-[#ff914d]/20">
            <div className="aspect-video bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl mb-6 flex items-center justify-center border border-gray-600/30 group-hover:border-[#ff914d]/30 transition-all duration-300 overflow-hidden">
              <Image
                src="/CarFull.jpeg"
                alt="Vulcan GP Racing Car"
                width={400}
                height={225}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700/30 group-hover:border-[#ff914d]/20 transition-all duration-300">
                <span className="ibm-plex-font text-gray-400 group-hover:text-gray-300 transition-colors">
                  Weight:
                </span>
                <span className="russo-font text-white font-regular">50g</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700/30 group-hover:border-[#ff914d]/20 transition-all duration-300">
                <span className="ibm-plex-font text-gray-400 group-hover:text-gray-300 transition-colors">
                  Speed:
                </span>
                <span className="russo-font text-white font-regular">
                  80kmph
                </span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="orbitron-font text-5xl font-bold mb-6">
              <span className="text-[#ff914d]">The</span> Car
            </h2>
            <p className="ibm-plex-sans text-gray-300 text-lg mb-6 leading-relaxed">
              Our F1 in Schools car is a product of precision engineering and
              relentless testing. Every curve, component, and connection is
              designed to extract maximum performance while staying within
              strict competition regulations.
            </p>
            <div className="ibm-plex-sans space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#ff3131] rounded-full mr-4"></div>
                <span className="text-gray-300">
                  Machined with micron-level accuracy for minimal friction and
                  maximum launch performance
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#ff914d] rounded-full mr-4"></div>
                <span className="text-gray-300">
                  Designed for peak aerodynamic efficiency through CFD-backed
                  modeling
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#ff3131] rounded-full mr-4"></div>
                <span className="text-gray-300">
                  Refined through wind tunnel simulations and on-track
                  performance testing
                </span>
              </div>
            </div>
            <Link
              href="/car"
              className="rajdhani-font inline-flex items-center px-8 py-4 bg-[#ff3131] hover:bg-[#e12a2a] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#ff3131]/20"
            >
              Explore Full Specifications
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
