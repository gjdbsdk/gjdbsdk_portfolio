"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        className="w-[450px] h-[450px] rounded-full bg-orange-500/10 blur-[120px] absolute"
        animate={{
          x: mousePosition.x - 225,
          y: mousePosition.y - 225,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-navy-800/40 rounded-full blur-[140px]" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[150px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c254115_1px,transparent_1px),linear-gradient(to_bottom,#1c254115_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
  );
}
