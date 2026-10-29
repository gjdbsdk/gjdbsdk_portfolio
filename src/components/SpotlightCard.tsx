"use client";

import React, { useRef, useState } from "react";

export default function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: -500, y: -500 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl p-[1.5px] overflow-hidden transition-all duration-300 ${
        isHovered ? "shadow-[0_0_20px_rgba(255,107,74,0.15)]" : "shadow-xl"
      } ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, #ff8f3d 0%, #ff6b4a 40%, transparent 80%)`,
        }}
      />

      <div className="absolute inset-0 bg-[#1e2942] z-0" />

      <div className="relative z-10 w-full h-full rounded-[14.5px] bg-[#0b1326] p-5 sm:p-7 overflow-hidden flex flex-col justify-between">
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(260px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 107, 74, 0.28) 0%, rgba(255, 143, 61, 0.1) 40%, transparent 75%)`,
          }}
        />

        <div className="relative z-10 w-full flex flex-col justify-between flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
