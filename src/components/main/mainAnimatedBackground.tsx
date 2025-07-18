"use client";

interface AnimatedBackgroundProps {
  animationTime: number;
  isClient: boolean;
}

export default function AnimatedBackground({
  animationTime,
  isClient,
}: AnimatedBackgroundProps) {
  if (!isClient) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-[5]">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900/20 z-[1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,145,77,0.15)_0%,transparent_70%)]"></div>
      </div>

      {/* Generate animated dots - highly visible */}
      {Array.from({ length: 50 }, (_, i) => {
        const x = (i * 23) % 100;
        const y = (i * 37) % 100;
        const delay = i * 0.1;
        const moveX = Math.sin(animationTime + delay) * 4;
        const moveY = Math.cos(animationTime + delay) * 3;
        const opacity = 0.6 + Math.sin(animationTime + delay) * 0.2;
        const size = i % 3 === 0 ? "w-2 h-2" : "w-1.5 h-1.5";

        return (
          <div
            key={i}
            className={`absolute ${size} bg-[#ff914d] rounded-full animate-pulse z-[5]`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: `translate(${moveX}px, ${moveY}px)`,
              opacity: opacity,
              animationDelay: `${delay}s`,
              boxShadow: `0 0 8px rgba(255, 145, 77, 0.4)`,
            }}
          />
        );
      })}

      {/* Additional static dots - bright and visible */}
      <div className="absolute inset-0 z-[5]">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={`static-${i}`}
            className="absolute w-1.5 h-1.5 bg-[#ff914d] rounded-full animate-pulse"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 29) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              opacity: 0.7,
              boxShadow: `0 0 6px rgba(255, 145, 77, 0.3)`,
            }}
          />
        ))}
      </div>

      {/* Decorative gradient lines - bright */}
      <div className="absolute top-1/4 left-10 w-3 h-28 bg-gradient-to-b from-[#ff914d] to-transparent opacity-50 z-[5]"></div>
      <div className="absolute bottom-1/4 right-10 w-3 h-28 bg-gradient-to-t from-[#ff914d] to-transparent opacity-50 z-[5]"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-24 bg-gradient-to-b from-[#ff914d] to-transparent opacity-40 z-[5]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-24 bg-gradient-to-t from-[#ff914d] to-transparent opacity-40 z-[5]"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-20 bg-gradient-to-b from-[#ff914d] to-transparent opacity-45 z-[5]"></div>
      <div className="absolute bottom-1/2 left-1/3 w-2 h-20 bg-gradient-to-t from-[#ff914d] to-transparent opacity-45 z-[5]"></div>
    </div>
  );
}
