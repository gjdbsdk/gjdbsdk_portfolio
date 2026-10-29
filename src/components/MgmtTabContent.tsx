"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ManagementWork } from "@/data/profile";
import SpotlightCard from "@/components/SpotlightCard";

export default function MgmtTabContent({ works }: { works: ManagementWork[] }) {
  return (
    <motion.div
      key="mgmt"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
    >
      {works.map((work) => (
        <SpotlightCard
          key={work.id}
          className="flex flex-col justify-between space-y-4 sm:space-y-5"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-mono text-[#ff8f3d] px-2 py-0.5 rounded bg-[#ff6b4a]/10 border border-[#ff6b4a]/20">
                {work.period}
              </span>
              <span className="text-xs text-slate-400 font-mono truncate">
                {work.organization}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-100">
              {work.role}
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              {work.description}
            </p>

            <div className="space-y-1.5 pt-1">
              {work.achievements.map((ach) => (
                <div
                  key={ach}
                  className="flex items-start gap-2 text-xs text-slate-300"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#ff6b4a] shrink-0 mt-0.5" />
                  <span className="leading-snug">{ach}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1e2942]/60">
            {work.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-[#070b14] border border-[#19243d] text-slate-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        </SpotlightCard>
      ))}
    </motion.div>
  );
}
