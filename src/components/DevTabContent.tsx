"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";
import { Project } from "@/data/profile";
import SpotlightCard from "@/components/SpotlightCard";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function DevTabContent({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      key="dev"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
    >
      {projects.map((project) => (
        <SpotlightCard
          key={project.id}
          className="flex flex-col justify-between"
        >
          <div className="space-y-3.5 sm:space-y-4">
            {project.thumbnail && (
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#1e2942] bg-[#070b14] group/thumb mb-2">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            )}

            <div className="flex items-start justify-between gap-2">
              <div className="flex flex-wrap items-center gap-1.5">
                {project.award &&
                  (() => {
                    const awardData = project.award;
                    let label = "수상";
                    let detail = "";

                    if (typeof awardData === "object" && awardData !== null) {
                      label = awardData.label;
                      detail = awardData.detail;
                    } else if (typeof awardData === "string") {
                      detail = awardData;
                      label = awardData.includes("진출") ? "진출" : "수상";
                    }

                    return (
                      <div className="relative group/award inline-block">
                        <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/40 cursor-help transition-all group-hover/award:bg-amber-500/25">
                          <Award className="w-3 h-3 text-amber-400" />
                          <span>{label}</span>
                        </span>

                        <div className="absolute left-0 top-full mt-2 hidden group-hover/award:flex flex-col items-start z-30 pointer-events-none drop-shadow-2xl">
                          <div className="w-2.5 h-2.5 bg-[#0b1220] border-t border-l border-amber-500/50 rotate-45 ml-3.5 -mb-1.5 z-10" />
                          <div className="px-2.5 py-1.5 rounded-lg bg-[#0b1220] text-amber-200 text-xs font-medium border border-amber-500/50 shadow-2xl whitespace-nowrap">
                            {detail}
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                {project.highlight && (
                  <span className="text-[10px] sm:text-[11px] font-mono font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-[#ff6b4a]/10 text-[#ff8f3d] border border-[#ff6b4a]/20">
                    {project.highlight}
                  </span>
                )}

                {project.category.map((cat) => (
                  <span
                    key={cat}
                    className="text-[9px] sm:text-[10px] font-mono px-1.5 sm:px-2 py-0.5 rounded bg-[#101b33] text-slate-400 border border-[#1e2b48]"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-[#070b14] border border-[#1e2942] text-slate-400 hover:text-[#ff8f3d] hover:border-[#ff6b4a]/50 transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-[#ff6b4a]/15 border border-[#ff6b4a]/40 text-[#ff8f3d] hover:bg-[#ff6b4a] hover:text-white transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-[#ff8f3d] transition-colors leading-snug">
              {project.title}
            </h3>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-4 sm:pt-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-[#070b14] border border-[#19243d] text-slate-400 font-mono"
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
