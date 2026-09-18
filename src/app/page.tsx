"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Terminal,
  Code2,
  Rocket,
  ArrowUpRight,
  Cpu,
  Layers,
} from "lucide-react";
import { PROFILE, Project } from "@/data/profile";
import InteractiveBackground from "@/components/InteractiveBackground";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "AI / Vision", "Frontend", "Full Stack"];

  const filteredProjects =
    selectedCategory === "All"
      ? PROFILE.projects
      : PROFILE.projects.filter((p) => p.category === selectedCategory);

  const handleConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#f97316", "#fb923c", "#1c2541", "#ffffff"],
    });
  };

  return (
    <main className="relative min-h-screen bg-navy-950 text-slate-100 selection:bg-orange-500 selection:text-white px-6 md:px-16 py-12 overflow-x-hidden">
      <InteractiveBackground />

      <div className="relative z-10 max-w-6xl mx-auto space-y-28">
        <section className="pt-20 pb-12 flex flex-col items-start justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-900 border border-orange-500/30 text-orange-400 text-sm font-mono tracking-wide shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-orange-500 animate-spin" />
            <span>
              {PROFILE.university} • {PROFILE.likelion}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              안녕하세요, <br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">
                {PROFILE.name}
              </span>
              입니다.
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed">
              아이디어를 직관적이고 감각적인 인터페이스로 시각화하며,{" "}
              <br className="hidden md:block" />
              AI와 실시간 웹 기술로 사용자 경험의 한계를 넓혀갑니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={handleConfetti}
              className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2"
            >
              <Rocket className="w-4 h-4" />
              <span>Say Hello!</span>
            </button>
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-navy-900/80 hover:bg-navy-800 border border-slate-700/60 text-slate-300 hover:text-white transition-all transform hover:-translate-y-1"
            >
              프로젝트 둘러보기
            </a>
          </motion.div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3 text-orange-400 font-mono text-sm uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>Tech Arsenal</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {PROFILE.skills.map((tech, idx) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ y: -3, borderColor: "#f97316" }}
                className="px-4 py-2 rounded-lg bg-navy-900/90 border border-navy-800 text-slate-300 font-medium text-sm transition-colors cursor-default shadow-inner"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-navy-800/80 pb-6">
            <div>
              <div className="flex items-center gap-3 text-orange-400 font-mono text-sm uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>Featured Works</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                주요 프로젝트
              </h2>
            </div>

            <div className="flex gap-2 p-1.5 bg-navy-900/90 border border-navy-800 rounded-xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-orange-500 text-white shadow-md shadow-orange-500/25"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between p-7 rounded-2xl bg-navy-900/60 border border-navy-800/80 hover:border-orange-500/50 backdrop-blur-md transition-all duration-300 shadow-xl overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all" />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">
                      {project.highlight}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-orange-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100 group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 relative z-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-navy-950/70 border border-navy-800 text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <footer className="pt-16 pb-10 border-t border-navy-900 text-center text-slate-500 text-sm font-mono">
          <p>
            © 2026 {PROFILE.name}. Built with Next.js App Router & Framer
            Motion.
          </p>
        </footer>
      </div>
    </main>
  );
}
