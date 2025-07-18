"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { teamData } from "@/lib/teamData";
import { AnimatedBackground } from "@/components/main";

export default function TeamPage() {
  const [animationTime, setAnimationTime] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const animate = () => {
      setAnimationTime(Date.now() * 0.001);
      requestAnimationFrame(animate);
    };

    animate();

    // Handle URL fragments to scroll to specific team members
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

    // Check for hash on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Function to convert name to URL-friendly format
  const nameToId = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, "");
  };

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Animated Background */}

      <div className="opacity-30">
        <AnimatedBackground animationTime={animationTime} isClient={isClient} />
      </div>

      {/* Hero Section - About the Team */}
      <section className="relative z-10 pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold horizon-font mb-8">
            <span className="text-white">Meet The </span>
            <span className="text-[#ff914d]">Team</span>
          </h1>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              We are{" "}
              <span className="text-[#ff3131] font-semibold hover:text-[#ff914d] transition-colors duration-300">
                VulcanGP
              </span>
              , a passionate team of young engineers and designers united by our
              love for motorsport and innovation. Based in Hyderabad, India, we
              represent the next generation of STEM talent pushing the
              boundaries of what&apos;s possible.
            </p>

            <p>
              Our journey began with a simple dream: to build a race car that
              could compete on the international stage. Through countless hours
              of design, manufacturing, and testing, we&apos;ve created
              something extraordinary. Each team member brings unique expertise,
              from advanced CAD modeling to precision manufacturing, creating a
              synergy that drives our success.
            </p>

            <p>
              As the{" "}
              <span className="text-[#ff914d] font-semibold hover:text-[#ff3131] transition-colors duration-300">
                2025 STEM Racing India South Regionals Winners
              </span>
              , we&apos;ve proven that with dedication, innovation, and
              teamwork, anything is possible. But this is just the beginning of
              our story.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold horizon-font text-center mb-12">
            <span className="text-[#ff914d]">Our</span>{" "}
            <span className="text-white">People</span>
          </h2>

          <div className="space-y-16">
            {teamData.map((member, index) => (
              <div
                key={member.name}
                id={nameToId(member.name)}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 lg:gap-16 group hover:scale-[1.02] transition-transform duration-500 scroll-mt-24`}
              >
                {/* Person Heading - Above the image */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div
                    className={`${
                      index % 2 === 0 ? "lg:text-left" : "lg:text-right"
                    } text-center`}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold horizon-font text-[#ff914d] mb-2 group-hover:text-[#ff3131] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-xl text-[#ff3131] font-semibold mb-6 group-hover:text-[#ff914d] transition-colors duration-300">
                      {member.role}
                    </p>
                  </div>

                  {/* Profile Image */}
                  <div
                    className={`flex ${
                      index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                    } justify-center`}
                  >
                    <div className="relative group/image">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ff3131] to-[#ff914d] rounded-2xl blur-lg opacity-30 group-hover:opacity-70 group-hover/image:opacity-90 transition-opacity duration-300"></div>
                      <div className="relative w-72 h-72 bg-gradient-to-br from-[#ff3131] to-[#ff914d] rounded-2xl p-1 group-hover:shadow-2xl group-hover:shadow-[#ff914d]/20 group-hover/image:shadow-3xl group-hover/image:shadow-[#ff914d]/40 transition-shadow duration-300">
                        <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-900">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={288}
                            height={288}
                            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover/image:scale-125 group-hover/image:brightness-110 group-hover/image:contrast-110"
                          />
                        </div>
                      </div>

                      {/* Additional photo-specific hover effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ff3131]/10 to-[#ff914d]/10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </div>

                {/* Description - Always left-aligned */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="text-left group-hover:transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="space-y-4 text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                      <p className="text-lg">{member.description}</p>

                      {member.achievements && (
                        <div className="mt-6">
                          <h4 className="text-[#ff914d] font-semibold mb-3 group-hover:text-[#ff3131] transition-colors duration-300">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {member.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 hover:text-white transition-colors duration-200"
                              >
                                <span className="text-[#ff3131] mt-1 group-hover:text-[#ff914d] transition-colors duration-300">
                                  •
                                </span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {member.specialties && (
                        <div className="mt-6">
                          <h4 className="text-[#ff914d] font-semibold mb-3 group-hover:text-[#ff3131] transition-colors duration-300">
                            Specialties:
                          </h4>
                          <div className="flex flex-wrap gap-2 justify-start">
                            {member.specialties.map((specialty, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-gradient-to-r from-[#ff3131]/20 to-[#ff914d]/20 border border-[#ff914d]/30 rounded-full text-sm hover:from-[#ff3131]/40 hover:to-[#ff914d]/40 hover:border-[#ff914d]/60 hover:scale-105 hover:shadow-lg hover:shadow-[#ff914d]/20 transition-all duration-300 cursor-pointer"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Excellence Section - For Sponsors */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold horizon-font mb-6">
            <span className="text-white">Excellence in </span>
            <span className="text-[#ff914d]">Engineering</span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Our team represents the perfect blend of youth, innovation, and
            proven results. With championship victories and cutting-edge
            engineering solutions, VulcanGP offers unparalleled value for
            forward-thinking sponsors looking to associate with the future of
            motorsport.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center space-y-3 hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="text-3xl font-bold text-[#ff914d] horizon-font group-hover:text-[#ff3131] transition-colors duration-300">
                6
              </div>
              <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                Expert Team Members
              </div>
            </div>
            <div className="text-center space-y-3 hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="text-3xl font-bold text-[#ff914d] horizon-font group-hover:text-[#ff3131] transition-colors duration-300">
                1st
              </div>
              <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                South India Regional Championship
              </div>
            </div>
            <div className="text-center space-y-3 hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="text-3xl font-bold text-[#ff914d] horizon-font group-hover:text-[#ff3131] transition-colors duration-300">
                100%
              </div>
              <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                Commitment to Innovation
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
