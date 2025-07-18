"use client";

import { useState, useEffect, useRef } from "react";
import {
  HeroSection,
  TeamSection,
  StemRacingSection,
  CarSection,
  SponsorSection,
  AnimatedBackground,
} from "@/components/main";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [animationTime, setAnimationTime] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const teamSectionRef = useRef<HTMLElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    // Animation loop for smooth sponsor circles and dots
    const animate = () => {
      setAnimationTime(Date.now() * 0.001);
      animationRef.current = requestAnimationFrame(animate);
    };

    // Set initial window size
    handleResize();
    animate();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleScrollToTeam = () => {
    if (teamSectionRef.current) {
      const elementTop = teamSectionRef.current.offsetTop;
      const offset = 25;

      window.scrollTo({
        top: elementTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-black text-white overflow-hidden relative">
      {/* Animated Orange Dots Background */}
      <AnimatedBackground animationTime={animationTime} isClient={isClient} />

      {/* Hero Section */}
      <HeroSection onScrollToTeam={handleScrollToTeam} />

      {/* Team Section */}
      <TeamSection
        ref={teamSectionRef}
        mousePosition={mousePosition}
        windowSize={windowSize}
      />

      {/* STEM Racing in India Section */}
      <StemRacingSection />

      {/* The Car Section */}
      <CarSection />

      {/* Our Sponsors Section */}
      <SponsorSection animationTime={animationTime} isClient={isClient} />
    </div>
  );
}
