"use client";

import { useState, useEffect } from "react";
import { AnimatedBackground } from "@/components/main";

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    date: "2nd June 2025",
    title: "Crowned Champions",
    description:
      "VulcanGP emerged victorious at the STEM Racing India South Regionals, earning the championship title and qualification for nationals.",
  },
  {
    id: "2",
    date: "3rd June 2025",
    title: "Nationals Work Begins",
    description:
      "Immediately after our regional victory, the team began intensive preparation for the national competition with renewed focus and determination.",
  },
  {
    id: "3",
    date: "20th June 2025",
    title: "Initial Car Design Complete",
    description:
      "Finalized the complete car design with all aerodynamic optimizations, structural improvements, and performance enhancements for the national stage.",
  },
  {
    id: "4",
    date: "10th July 2025",
    title: "Sponsors & Brand Identity Ready",
    description:
      "Secured major sponsorship deals and completed our comprehensive brand identity package, establishing VulcanGP as a professional racing team.",
  },
  {
    id: "5",
    date: "14th July 2025",
    title: "Car Complete",
    description:
      "Manufacturing and assembly of our championship car completed with precision engineering, ready for final testing and competition deployment.",
  },
  {
    id: "6",
    date: "16th July 2025",
    title: "Portfolios Complete",
    description:
      "Finished all team portfolios, documentation, and presentation materials showcasing our engineering process and achievements.",
  },
  {
    id: "7",
    date: "18th July 2025",
    title: "Website Complete",
    description:
      "Launched our official VulcanGP website featuring our story, team, car specifications, and journey to the nationals.",
  },
  {
    id: "8",
    date: "25th July 2025",
    title: "National Competition",
    description:
      "The ultimate challenge awaits as VulcanGP competes at the national level, representing the South region with our championship-winning car.",
  },
];

export default function TimelinePage() {
  const [animationTime, setAnimationTime] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [activeEvent, setActiveEvent] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);

    const animate = () => {
      setAnimationTime(Date.now() * 0.001);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden relative min-h-screen">
      {/* Animated Orange Dots Background - Reduced opacity to prevent interference */}
      <div className="opacity-30">
        <AnimatedBackground animationTime={animationTime} isClient={isClient} />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold horizon-font mb-8">
            <span className="text-white">Our </span>
            <span className="text-[#ff914d]">Journey</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            From regional champions to national competitors. Follow our
            incredible journey from victory to preparation for the ultimate
            challenge.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#ff914d] via-[#ff3131] to-[#ff914d] rounded-full hidden md:block"></div>

            {/* Timeline Events */}
            <div className="space-y-8 md:space-y-6">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="relative flex items-center"
                  onMouseEnter={() => setActiveEvent(event.id)}
                  onMouseLeave={() => setActiveEvent(null)}
                >
                  {/* Small Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
                    <div
                      className={`w-3 h-3 rounded-full bg-[#ff3131] border-2 border-white transition-all duration-300 ${
                        activeEvent === event.id
                          ? "scale-150 shadow-lg shadow-[#ff914d]/50"
                          : ""
                      }`}
                    ></div>
                  </div>

                  {/* Event Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-8"
                        : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div
                      className={`bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 backdrop-blur-sm border border-gray-800/50 hover:border-[#ff914d]/50 transition-all duration-300 ${
                        activeEvent === event.id
                          ? "transform scale-105 shadow-lg shadow-[#ff914d]/20 border-[#ff914d]"
                          : ""
                      }`}
                    >
                      {/* Header Section - Stacked on mobile, side-by-side on desktop */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-4">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold horizon-font text-white flex-1 min-w-0">
                          {event.title}
                        </h3>
                        <span className="text-sm sm:text-base font-bold text-[#ff3131] flex-shrink-0">
                          {event.date}
                        </span>
                      </div>

                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
