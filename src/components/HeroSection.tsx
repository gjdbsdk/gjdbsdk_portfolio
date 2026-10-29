"use client";

import { motion } from "framer-motion";
import { Sparkles, Flame, Rocket } from "lucide-react";
import confetti from "canvas-confetti";
import { PROFILE } from "@/data/profile";

export default function HeroSection() {
  const handleConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#ff6b4a", "#ff9f43", "#38bdf8", "#ffffff"],
    });
  };

  return (
    <section className="pt-10 sm:pt-16 pb-2 sm:pb-6 flex flex-col items-start space-y-5 sm:space-y-7">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap items-center gap-2"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f172a] border border-[#1e2942] text-slate-300 text-xs font-mono shadow-sm hover:border-slate-600 transition-colors">
          <Sparkles className="w-3.5 h-3.5 text-amber-300/85 shrink-0 animate-[pulse_3s_ease-in-out_infinite]" />
          <span>{PROFILE.university}</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff6b4a]/10 border border-[#ff6b4a]/30 text-[#ff8f3d] text-xs font-mono font-medium shadow-sm">
          <Flame className="w-3.5 h-3.5 text-[#ff6b4a] animate-pulse shrink-0" />
          <span>{PROFILE.likelion}</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-3 sm:space-y-4 max-w-3xl"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.2]">
          안녕하세요, <br />
          개발자&nbsp;
          <span className="bg-gradient-to-r from-[#ff8f3d] via-[#ff6b4a] to-[#ff4757] bg-clip-text text-transparent">
            {PROFILE.name}
          </span>
          입니다.
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-slate-400 font-light leading-relaxed">
          {PROFILE.bio}
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-2.5 sm:gap-3.5 pt-1 w-full sm:w-auto">
        <button
          onClick={handleConfetti}
          className="flex-1 sm:flex-initial justify-center px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff6b4a] to-[#ff8f3d] text-white font-medium text-xs sm:text-sm shadow-lg shadow-[#ff6b4a]/20 hover:brightness-110 transition-all flex items-center gap-2"
        >
          <Rocket className="w-4 h-4" />
          <span>Say Hello!</span>
        </button>
        <a
          href="#tabs"
          className="flex-1 sm:flex-initial text-center justify-center px-4 sm:px-5 py-2.5 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] border border-slate-800 text-slate-300 hover:text-white font-medium text-xs sm:text-sm transition-all"
        >
          활동 기록 둘러보기
        </a>
      </div>
    </section>
  );
}
