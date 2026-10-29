"use client";

import { Cpu } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function SkillsSection() {
  return (
    <section className="space-y-3 sm:space-y-4">
      <div className="flex items-center gap-2 text-[#ff8f3d] font-mono text-xs uppercase tracking-wider">
        <Cpu className="w-4 h-4" />
        <span>Tech Arsenal</span>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-2.5">
        {PROFILE.skills.map((tech) => (
          <span
            key={tech}
            className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg bg-[#0d1527] border border-[#1e2942] text-slate-300 font-mono text-[11px] sm:text-xs hover:border-[#ff6b4a]/60 hover:text-[#ff8f3d] transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
