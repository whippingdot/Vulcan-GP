import Link from "next/link";

export default function CarSection() {
  return (
    <section className="relative py-20 bg-black/80 z-10">
      {/* Taper from gray at top */}
      {/* <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0C111D] to-transparent"></div> */}

      {/* Taper to gray at bottom */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0C111D] to-transparent"></div> */}

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-800/30 rounded-lg p-8 border border-gray-700/30 hover:bg-gray-800/40 transition-all duration-300">
            <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-gray-400 text-6xl">🏎️</div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Weight:</span>
                <span className="text-white">2.8t</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Power:</span>
                <span className="text-white">250hp</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Top Speed:</span>
                <span className="text-white">95%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Range:</span>
                <span className="text-white">200km</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="orbitron-font text-5xl font-bold mb-6">
              <span className="text-[#ff914d]">The</span> Car
            </h2>
            <p className="ibm-plex-sans text-gray-300 text-lg mb-6 leading-relaxed">
              Our revolutionary racing car represents the pinnacle of
              engineering excellence. Every component has been meticulously
              designed and tested to maximize performance while maintaining the
              highest safety standards.
            </p>
            <div className="ibm-plex-sans space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#ff3131] rounded-full mr-4"></div>
                <span className="text-gray-300">
                  Built with cutting-edge safety features and advanced carbon
                  fiber construction
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#ff914d] rounded-full mr-4"></div>
                <span className="text-gray-300">
                  Engineered for maximum aerodynamic efficiency and speed
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#ff3131] rounded-full mr-4"></div>
                <span className="text-gray-300">
                  Powered by innovative hybrid technology for sustainability
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
