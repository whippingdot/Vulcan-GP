"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface TeamMember {
  name: string;
  role: string;
  angle: number;
  image: string;
}

interface TeamSectionProps {
  mousePosition: { x: number; y: number };
  windowSize: { width: number; height: number };
}

const TeamSection = forwardRef<HTMLElement, TeamSectionProps>(
  ({ mousePosition, windowSize }, ref) => {
    const router = useRouter();

    const teamMembers: TeamMember[] = [
      {
        name: "Arahant Veerareddy",
        role: "Manufacturing Engineer",
        angle: 0,
        image: "/Logo.png",
      },
      {
        name: "Aadya Pochampally",
        role: "Graphic Designer",
        angle: 60,
        image: "/Logo.png",
      },
      {
        name: "Sanjaay Rajkumar",
        role: "Head of Tech",
        angle: 120,
        image: "/Sanjaay.jpg",
      },
      {
        name: "Agastya Nadella",
        role: "Design Engineer",
        angle: 180,
        image: "/Agastya.jpeg",
      },
      {
        name: "Arnav Kaul",
        role: "Team Principal",
        angle: 240,
        image: "/Logo.png",
      },
      {
        name: "Adityesh Chandrayan",
        role: "Technical Director",
        angle: 300,
        image: "/Logo.png",
      },
    ];

    // Function to convert name to URL-friendly format (matching the team page)
    const nameToId = (name: string) => {
      return name.toLowerCase().replace(/\s+/g, "");
    };

    // Handle click on team member circle
    const handleMemberClick = (memberName: string) => {
      const memberId = nameToId(memberName);
      router.push(`/team#${memberId}`);
    };

    return (
      <section
        ref={ref}
        className="relative py-20 bg-black/80 min-h-screen flex items-center justify-center z-10 overflow-visible"
        style={{ paddingBottom: "8rem" }} // Reduced bottom padding
      >
        {/* Taper from gray at top */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0C111D]/80 to-transparent"></div>

        {/* Taper to gray at bottom */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0C111D] to-transparent"></div> */}

        <div className="mx-auto px-4 relative z-10">
          <div className="text-center relative">
            {/* Team Members in Circles */}
            <div className="relative h-[750px] flex items-center justify-center w-[32rem]">
              {/* Reduced height and width */}
              {/* Center Title - Properly sized */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="text-center px-6">
                  <h3 className="orbitron-font text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-[#ff914d]">The</span> Team
                  </h3>
                  <p className="ibm-plex-font text-base md:text-lg text-gray-300 leading-relaxed">
                    Meet the brilliant minds behind VulcanGP - a diverse group
                    of engineers, designers, and innovators united by our
                    passion for STEM racing excellence
                  </p>
                </div>
              </div>
              {teamMembers.map((member, index) => {
                const radius = 320; // Reduced from 400 to 320
                const angleRad = (member.angle * Math.PI) / 180;
                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;

                // Enhanced shimmer calculation - works across the full section
                const teamSectionElement = ref as React.RefObject<HTMLElement>;
                let shimmerIntensity = 0;
                let glowDirection = { x: 0, y: 0 };

                if (teamSectionElement?.current && windowSize.width > 0) {
                  const rect =
                    teamSectionElement.current.getBoundingClientRect();
                  const sectionCenterX = rect.left + rect.width / 2;
                  const sectionCenterY = rect.top + rect.height / 2;
                  const circleX = sectionCenterX + x;
                  const circleY = sectionCenterY + y;

                  // Calculate distance from mouse to circle
                  const distance = Math.sqrt(
                    Math.pow(mousePosition.x - circleX, 2) +
                      Math.pow(mousePosition.y - circleY, 2)
                  );

                  // Enhanced intensity calculation - works from much further away
                  const maxDistance =
                    Math.min(windowSize.width, windowSize.height) * 0.8;
                  shimmerIntensity = Math.max(0, 1 - distance / maxDistance);

                  // Calculate glow direction (from circle toward mouse)
                  if (distance > 0) {
                    glowDirection = {
                      x: (mousePosition.x - circleX) / distance,
                      y: (mousePosition.y - circleY) / distance,
                    };
                  }
                }

                // Create dynamic glow effect
                const glowSize = 20 + shimmerIntensity * 40;
                const glowOpacity = 0.2 + shimmerIntensity * 0.6;
                const glowColor = `rgba(255, 49, 49, ${glowOpacity})`;

                // Enhanced shadow with directional glow
                const shadowOffsetX = glowDirection.x * shimmerIntensity * 8;
                const shadowOffsetY = glowDirection.y * shimmerIntensity * 8;
                const boxShadow = `
                  0 0 ${glowSize}px ${glowColor},
                  ${shadowOffsetX}px ${shadowOffsetY}px ${
                  glowSize * 0.5
                }px rgba(255, 145, 77, ${glowOpacity * 0.3}),
                  inset 0 0 ${shimmerIntensity * 20}px rgba(255, 255, 255, ${
                  shimmerIntensity * 0.1
                })
                `;

                // Better tooltip positioning logic - adjusted for smaller radius
                const isTopHalf = y < -60; // Adjusted thresholds for smaller radius
                const isBottomHalf = y > 60;
                const isLeftSide = x < -60;
                const isRightSide = x > 60;

                let tooltipClass = "";
                if (isTopHalf) {
                  tooltipClass = "-top-20";
                } else if (isBottomHalf) {
                  tooltipClass = "-bottom-20";
                } else if (isLeftSide) {
                  tooltipClass = "-left-36 top-1/2 transform -translate-y-1/2"; // Adjusted offset
                } else if (isRightSide) {
                  tooltipClass = "-right-36 top-1/2 transform -translate-y-1/2"; // Adjusted offset
                } else {
                  tooltipClass = "-bottom-20";
                }

                return (
                  <div
                    key={index}
                    className="absolute group cursor-pointer z-10"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                    onClick={() => handleMemberClick(member.name)}
                  >
                    <div
                      className="w-36 h-36 bg-gradient-to-br from-[#ff3131] to-[#ff914d] rounded-full p-1 transition-all duration-200 group-hover:scale-110 active:scale-95"
                      style={{
                        boxShadow: boxShadow,
                        transform: `scale(${1 + shimmerIntensity * 0.05})`,
                      }}
                    >
                      <div
                        className="w-full h-full rounded-full overflow-hidden bg-gray-800 flex items-center justify-center relative"
                        style={{
                          background: `radial-gradient(circle at ${
                            50 + glowDirection.x * shimmerIntensity * 30
                          }% ${
                            50 + glowDirection.y * shimmerIntensity * 30
                          }%, rgba(255, 145, 77, ${
                            shimmerIntensity * 0.1
                          }) 0%, #374151 70%)`,
                        }}
                      >
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={140}
                          height={140}
                          className="w-full h-full object-cover"
                          style={{
                            filter: `brightness(${
                              1 + shimmerIntensity * 0.2
                            }) contrast(${1 + shimmerIntensity * 0.1})`,
                          }}
                        />

                        {/* Overlay highlight effect */}
                        <div
                          className="absolute inset-0 rounded-full pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at ${
                              50 + glowDirection.x * 50
                            }% ${
                              50 + glowDirection.y * 50
                            }%, rgba(255, 255, 255, ${
                              shimmerIntensity * 0.15
                            }) 0%, transparent 60%)`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Hover tooltip - better positioned to avoid cutoff */}
                    <div
                      className={`absolute ${tooltipClass} ${
                        isLeftSide || isRightSide
                          ? ""
                          : "left-1/2 transform -translate-x-1/2"
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50`}
                    >
                      <div className="ibm-plex-font bg-gray-800/95 backdrop-blur-sm border border-[#ff914d]/30 rounded-lg p-4 text-center whitespace-nowrap shadow-lg">
                        <h3 className="text-white font-semibold text-base mb-1">
                          {member.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{member.role}</p>
                        <p className="text-[#ff914d] text-xs mt-1">
                          Click to learn more
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

TeamSection.displayName = "TeamSection";

export default TeamSection;
