"use client";

import Link from "next/link";
import Image from "next/image";

interface Sponsor {
  name: string;
  logo: string;
  tier: "title" | "key" | "regular";
}

interface SponsorSectionProps {
  animationTime: number;
  isClient: boolean;
}

export default function SponsorSection({
  animationTime,
  isClient,
}: SponsorSectionProps) {
  const sponsors: Sponsor[] = [
    {
      name: "Chirec International School",
      logo: "/chirec.jpg",
      tier: "title",
    },
    { name: "HOI", logo: "/hoi.png", tier: "key" },
    { name: "Amaron", logo: "/amaron.png", tier: "key" },
    { name: "BattleGear", logo: "/battlegear.png", tier: "regular" },
    { name: "Origo", logo: "/origo.png", tier: "regular" },
  ];

  const titleSponsor = sponsors.find((s) => s.tier === "title");
  const keySponsors = sponsors.filter((s) => s.tier === "key");
  const regularSponsors = sponsors.filter((s) => s.tier === "regular");

  return (
    <section className="relative py-20 bg-black/80 min-h-screen flex items-center justify-center z-10">
      {/* Taper from gray at top */}
      {/* <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0C111D] to-transparent"></div> */}

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0C111D] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center relative">
          <h2 className="orbitron-font text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-[#ff914d]">Sponsors</span>
          </h2>
          <p className="ibm-plex-font text-xl text-gray-300 max-w-3xl mx-auto mb-16">
            Powered by leading companies that believe in the future of
            developing STEM racing technology and supporting innovation
          </p>

          {/* Hierarchical Sponsor Layout */}
          <div className="orbitron-font relative w-full flex flex-col items-center space-y-12">
            {/* Title Sponsor - Center Top */}
            {titleSponsor && (
              <div className="group">
                <div className="text-center mb-4">
                  <span className="text-[#ff3131] font-semibold text-sm uppercase tracking-wider">
                    Title Sponsor
                  </span>
                </div>
                <div
                  className="relative w-64 h-40 bg-white border-2 border-[#ff3131] rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#ff5555] shadow-xl shadow-[#ff3131]/30 overflow-hidden"
                  style={{
                    boxShadow: isClient
                      ? `0 0 ${
                          20 + Math.sin(animationTime * 2) * 10
                        }px rgba(255, 49, 49, 0.4)`
                      : "0 0 20px rgba(255, 49, 49, 0.4)",
                  }}
                >
                  <Image
                    src={titleSponsor.logo}
                    alt={titleSponsor.name}
                    fill
                    className="object-cover filter brightness-110"
                  />

                  {/* Animated corner accents */}
                  <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#ff914d] rounded-tl-lg z-10"></div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#ff914d] rounded-tr-lg z-10"></div>
                  <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#ff914d] rounded-bl-lg z-10"></div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#ff914d] rounded-br-lg z-10"></div>
                </div>
              </div>
            )}

            {/* Key Sponsors - Center Middle */}
            {keySponsors.length > 0 && (
              <div className="flex flex-col items-center space-y-6">
                <div className="text-center">
                  <span className="text-[#ff914d] font-semibold text-sm uppercase tracking-wider">
                    Key Partners
                  </span>
                </div>
                <div className="flex space-x-8">
                  {keySponsors.map((sponsor, index) => (
                    <div
                      key={sponsor.name}
                      className="group"
                      style={{
                        transform: isClient
                          ? `translateY(${
                              Math.sin(animationTime * 1.5 + index * 0.5) * 3
                            }px)`
                          : "translateY(0)",
                      }}
                    >
                      <div className="relative w-44 h-28 bg-white border-2 border-[#ff914d] rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:border-[#ffb366] shadow-lg shadow-[#ff914d]/20 overflow-hidden">
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          fill
                          className="object-contain p-2 filter brightness-105"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Regular Sponsors - Bottom Row */}
            <div className="flex flex-col items-center space-y-6">
              <div className="text-center">
                <span className="text-gray-400 font-medium text-sm uppercase tracking-wider">
                  Supporting Partners
                </span>
              </div>
              <div className="flex space-x-8">
                {regularSponsors.map((sponsor, index) => (
                  <div
                    key={sponsor.name}
                    className="group"
                    style={{
                      transform: isClient
                        ? `translateY(${
                            Math.sin(animationTime + index * 2) * 2
                          }px)`
                        : "translateY(0)",
                    }}
                  >
                    <div
                      className={`relative w-32 h-24 border border-gray-600 hover:border-[#ff914d]/60 rounded-lg transition-all duration-300 group-hover:scale-105 shadow-md hover:shadow-lg hover:shadow-[#ff914d]/10 overflow-hidden ${
                        sponsor.name === "Origo"
                          ? "bg-white"
                          : "bg-gradient-to-br from-gray-800/20 to-gray-900/40"
                      }`}
                    >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        className={`${
                          sponsor.name === "Origo"
                            ? "object-contain p-2"
                            : "object-cover"
                        } filter brightness-95 group-hover:brightness-105 transition-all duration-300`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Connecting lines */}
              <div className="absolute top-1/3 left-1/2 w-px h-16 bg-gradient-to-b from-[#ff3131]/30 to-[#ff914d]/30 transform -translate-x-1/2"></div>
              <div className="absolute top-2/3 left-1/2 w-px h-12 bg-gradient-to-b from-[#ff914d]/30 to-transparent transform -translate-x-1/2"></div>

              {/* Floating particles */}
              {isClient &&
                Array.from({ length: 8 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-[#ff914d]/40 rounded-full"
                    style={{
                      left: `${15 + i * 10}%`,
                      top: `${25 + Math.sin(animationTime + i) * 25}%`,
                      opacity: 0.2 + Math.sin(animationTime + i * 0.7) * 0.3,
                    }}
                  />
                ))}
            </div>
          </div>

          <div className="mt-20">
            <Link
              href="mailto:vulcangp@outlook.com?subject=Sponsorship Inquiry"
              className="rajdhani-font inline-flex items-center px-8 py-4 bg-[#ff3131] hover:bg-[#e12a2a] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#ff3131]/20"
            >
              Become a Sponsor
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
