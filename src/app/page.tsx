"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Rocket,
  Cpu,
  Layers,
  ExternalLink,
  Award,
  Palette,
  Users,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { PROFILE, MainTabType, CategoryType } from "@/data/profile";
import InteractiveBackground from "@/components/InteractiveBackground";
import SpotlightCard from "@/components/SpotlightCard";
import Image from "next/image";

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

export default function Home() {
  const [mainTab, setMainTab] = useState<MainTabType>("Development");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "AI / Vision", "Frontend", "Full Stack", "Game"];

  const filteredProjects =
    selectedCategory === "All"
      ? PROFILE.projects
      : PROFILE.projects.filter((p) =>
          p.category.includes(selectedCategory as CategoryType),
        );

  const handleConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.8 },
      colors: ["#ff6b4a", "#ff9f43", "#38bdf8", "#ffffff"],
    });
  };

  return (
    <main className="relative min-h-screen bg-[#070b14] text-slate-100 selection:bg-[#ff6b4a] selection:text-white px-6 md:px-16 py-14 overflow-x-hidden">
      <InteractiveBackground />

      <div className="relative z-10 max-w-6xl mx-auto space-y-24">
        <section className="pt-16 pb-6 flex flex-col items-start space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f172a] border border-[#ff6b4a]/30 text-[#ff8f3d] text-xs font-mono tracking-wide shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ff6b4a] animate-spin" />
            <span>
              {PROFILE.university} • {PROFILE.likelion}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4 max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.15]">
              기술과 기획의 경계를 허무는 <br />
              <span className="bg-gradient-to-r from-[#ff8f3d] via-[#ff6b4a] to-[#ff4757] bg-clip-text text-transparent">
                {PROFILE.name}
              </span>
              의 포트폴리오
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
              {PROFILE.bio}
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3.5 pt-2">
            <button
              onClick={handleConfetti}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff6b4a] to-[#ff8f3d] text-white font-medium text-sm shadow-lg shadow-[#ff6b4a]/20 hover:brightness-110 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <Rocket className="w-4 h-4" />
              <span>Say Hello!</span>
            </button>
            <a
              href="#tabs"
              className="px-5 py-2.5 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] border border-slate-800 text-slate-300 hover:text-white font-medium text-sm transition-all"
            >
              활동 기록 둘러보기
            </a>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2 text-[#ff8f3d] font-mono text-xs uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>Tech Arsenal</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {PROFILE.skills.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-lg bg-[#0d1527] border border-[#1e2942] text-slate-300 font-mono text-xs hover:border-[#ff6b4a]/60 hover:text-[#ff8f3d] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section id="tabs" className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#1e2942] pb-6">
            {/* MAIN TAB SWITCHER */}
            <div className="flex items-center gap-2 p-1.5 bg-[#0d1527] border border-[#1e2942] rounded-2xl w-fit">
              <button
                onClick={() => setMainTab("Development")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                  mainTab === "Development"
                    ? "bg-[#ff6b4a] text-white shadow-lg shadow-[#ff6b4a]/25"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Layers className="w-4 h-4 shrink-0" />
                <span>개발 (Development)</span>
              </button>

              <button
                onClick={() => setMainTab("Design")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                  mainTab === "Design"
                    ? "bg-[#ff6b4a] text-white shadow-lg shadow-[#ff6b4a]/25"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Palette className="w-4 h-4 shrink-0" />
                <span>디자인 (Design)</span>
              </button>

              <button
                onClick={() => setMainTab("Management")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                  mainTab === "Management"
                    ? "bg-[#ff6b4a] text-white shadow-lg shadow-[#ff6b4a]/25"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Users className="w-4 h-4 shrink-0" />
                <span>운영 & 기획 (Management)</span>
              </button>
            </div>

            {mainTab === "Development" && (
              <div className="flex flex-wrap gap-1.5 p-1 bg-[#0d1527] border border-[#1e2942] rounded-xl w-fit">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      selectedCategory === cat
                        ? "bg-[#1e2942] text-[#ff8f3d] border border-[#ff6b4a]/40"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          <AnimatePresence mode="wait">
            {mainTab === "Development" && (
              <motion.div
                key="dev"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {filteredProjects.map((project) => (
                  <SpotlightCard
                    key={project.id}
                    className="flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {project.award &&
                            (() => {
                              const label =
                                typeof project.award === "string"
                                  ? "수상"
                                  : project.award.label;
                              const detail =
                                typeof project.award === "string"
                                  ? project.award
                                  : project.award.detail;

                              return (
                                <div className="relative group/award inline-block">
                                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/40 cursor-help transition-all group-hover/award:bg-amber-500/25 group-hover/award:border-amber-400">
                                    <Award className="w-3 h-3 text-amber-400 animate-pulse" />
                                    <span>{label}</span>
                                  </span>

                                  <div className="absolute left-0 top-full mt-2 hidden group-hover/award:flex flex-col items-start z-30 pointer-events-none drop-shadow-2xl">
                                    <div className="w-2.5 h-2.5 bg-[#0b1220] border-t border-l border-amber-500/50 rotate-45 ml-3.5 -mb-1.5 z-10" />
                                    <div className="px-3 py-1.5 rounded-lg bg-[#0b1220] text-amber-200 text-xs font-medium border border-amber-500/50 shadow-2xl whitespace-nowrap">
                                      {detail}
                                    </div>
                                  </div>
                                </div>
                              );
                            })()}

                          {project.highlight && (
                            <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-[#ff6b4a]/10 text-[#ff8f3d] border border-[#ff6b4a]/20">
                              {project.highlight}
                            </span>
                          )}

                          {project.category.map((cat) => (
                            <span
                              key={cat}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#101b33] text-slate-400 border border-[#1e2b48]"
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

                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-[#ff8f3d] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-slate-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2 py-0.5 rounded bg-[#070b14] border border-[#19243d] text-slate-400 font-mono"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                ))}
              </motion.div>
            )}

            {mainTab === "Design" && (
              <motion.div
                key="design"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid grid-cols-1 gap-6"
              >
                {PROFILE.designWorks.map((work) => (
                  <SpotlightCard key={work.id} className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[#1e2942] pb-4">
                      <div>
                        <span className="text-xs font-mono text-[#ff8f3d]">
                          {work.period}
                        </span>
                        <h3 className="text-2xl font-bold text-slate-100 mt-1">
                          {work.title}
                        </h3>
                        <p className="text-sm text-slate-400">{work.role}</p>
                      </div>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#101b33] border border-[#1e2b48] text-slate-300 w-fit">
                        Design Portfolio
                      </span>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {work.description}
                    </p>

                    {work.images && work.images.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                          Visual Preview
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                          {work.images.map((src, index) => (
                            <div
                              key={index}
                              className="relative aspect-video rounded-xl overflow-hidden border border-[#1e2942] bg-[#070b14] group/img"
                            >
                              <Image
                                src={src}
                                alt={`${work.title} 작업물 ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-300 group-hover/img:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/70 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                        Key Deliverables
                      </span>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                        {work.deliverables.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 p-2.5 rounded-lg bg-[#070b14] border border-[#19243d] text-xs text-slate-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6b4a] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded bg-[#101b33] text-slate-400 border border-[#1e2b48]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                ))}
              </motion.div>
            )}

            {mainTab === "Management" && (
              <motion.div
                key="mgmt"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {PROFILE.managementWorks.map((work) => (
                  <SpotlightCard
                    key={work.id}
                    className="flex flex-col justify-between space-y-5"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-[#ff8f3d] px-2 py-0.5 rounded bg-[#ff6b4a]/10 border border-[#ff6b4a]/20">
                          {work.period}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          {work.organization}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-100">
                        {work.role}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {work.description}
                      </p>

                      <div className="space-y-1.5 pt-2">
                        {work.achievements.map((ach) => (
                          <div
                            key={ach}
                            className="flex items-start gap-2 text-xs text-slate-300"
                          >
                            <ChevronRight className="w-3.5 h-3.5 text-[#ff6b4a] shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1e2942]/60">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2 py-0.5 rounded bg-[#070b14] border border-[#19243d] text-slate-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <footer className="pt-16 pb-12 border-t border-[#19243d] text-center text-slate-500 text-xs font-mono space-y-2">
          <p>
            © 2026 {PROFILE.name}. Built with Next.js App Router & Framer
            Motion.
          </p>
          <p className="text-slate-600">
            Duksung Womens Univ. Software Engineering 24
          </p>
        </footer>
      </div>
    </main>
  );
}
