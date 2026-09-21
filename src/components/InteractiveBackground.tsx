"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function InteractiveBackground() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#070b14]">
      <motion.div
        className="w-[500px] h-[500px] rounded-full bg-[#ff6b4a]/8 blur-[140px] absolute"
        animate={{
          x: mousePos.x - 250,
          y: mousePos.y - 250,
        }}
        transition={{ type: "spring", damping: 35, stiffness: 180, mass: 0.6 }}
      />

      <div className="absolute -top-32 left-1/4 w-[700px] h-[500px] bg-[#1e293b]/50 rounded-full blur-[160px]" />
      <div className="absolute top-1/2 -right-20 w-[600px] h-[600px] bg-[#ff6b4a]/5 rounded-full blur-[180px]" />

      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_60%,transparent_100%)] opacity-70" />
    </div>
  );
}
