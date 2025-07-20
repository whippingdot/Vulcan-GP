import Link from "next/link";

export default function StemRacingSection() {
  return (
    <section className="relative py-20 bg-black/80 z-10">
      {/* Taper from gray at top */}
      {/* <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0C111D] to-transparent"></div> */}

      {/* Taper to gray at bottom */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0C111D] to-transparent"></div> */}

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="ibm-plex-font grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="orbitron-font text-5xl font-bold mb-6">
              What is <span className="text-[#ff914d]">STEM Racing?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              STEM Racing is India&apos;s national-level challenge that brings
              engineering, innovation, and motorsport together. As the official
              rebrand of F1 in Schools, it tasks students with designing,
              building, and racing miniature cars powered by compressed air —
              all while applying real-world principles of aerodynamics, CAD/CAM,
              and project management.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Endorsed by Formula 1 and backed by global engineering bodies,
              STEM Racing turns the classroom into a launchpad for future
              engineers, leaders, and thinkers. With industry-level mentorship
              and international competition, it&apos;s more than a race —
              it&apos;s a gateway to a career in STEM.
            </p>
            <Link
              href="https://stemracing.com/"
              className="rajdhani-font inline-flex items-center px-8 py-4 bg-[#ff3131] hover:bg-[#e12a2a] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#ff3131]/20"
            >
              Explore STEM Racing
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

          <div className="ibm-plex-font grid grid-cols-2 gap-6">
            <div className="bg-gray-800/30 border border-[#ff3131]/30 rounded-lg p-6 text-center hover:bg-[#ff3131]/10 hover:border-[#ff3131]/60 hover:shadow-lg hover:shadow-[#ff3131]/20 hover:scale-105 transition-all duration-300 group">
              <div className="russo-font text-4xl font-bold text-[#ff3131] mb-2 group-hover:text-[#ff5555] transition-colors duration-300">
                60+
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Countries Participating
              </div>
            </div>
            <div className="bg-gray-800/30 border border-[#ff914d]/30 rounded-lg p-6 text-center hover:bg-[#ff914d]/10 hover:border-[#ff914d]/60 hover:shadow-lg hover:shadow-[#ff914d]/20 hover:scale-105 transition-all duration-300 group">
              <div className="russo-font text-4xl font-bold text-[#ff914d] mb-2 group-hover:text-[#ffb366] transition-colors duration-300">
                25,000+
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Cars Designed Worldwide
              </div>
            </div>
            <div className="bg-gray-800/30 border border-[#ff3131]/30 rounded-lg p-6 text-center hover:bg-[#ff3131]/10 hover:border-[#ff3131]/60 hover:shadow-lg hover:shadow-[#ff3131]/20 hover:scale-105 transition-all duration-300 group">
              <div className="russo-font text-4xl font-bold text-[#ff3131] mb-2 group-hover:text-[#ff5555] transition-colors duration-300">
                $2 Million+
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Anually Raised by Teams
              </div>
            </div>
            <div className="bg-gray-800/30 border border-[#ff914d]/30 rounded-lg p-6 text-center hover:bg-[#ff914d]/10 hover:border-[#ff914d]/60 hover:shadow-lg hover:shadow-[#ff914d]/20 hover:scale-105 transition-all duration-300 group">
              <div className="russo-font text-4xl font-bold text-[#ff914d] mb-2 group-hover:text-[#ffb366] transition-colors duration-300">
                40+
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Global Sponsors
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
