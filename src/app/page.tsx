"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PROFILE, MainTabType, CategoryType } from "@/data/profile";

import InteractiveBackground from "@/components/InteractiveBackground";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import TabNavigation from "@/components/TabNavigation";
import DevTabContent from "@/components/DevTabContent";
import DesignTabContent from "@/components/DesignTabContent";
import MgmtTabContent from "@/components/MgmtTabContent";
import Footer from "@/components/Footer";

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

  return (
    <main className="relative min-h-screen bg-[#070b14] text-slate-100 selection:bg-[#ff6b4a] selection:text-white px-4 sm:px-8 md:px-16 py-10 sm:py-14 overflow-x-hidden">
      <InteractiveBackground />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16 sm:space-y-24">
        <HeroSection />

        <SkillsSection />

        <section id="tabs" className="space-y-8 sm:space-y-10">
          <TabNavigation
            mainTab={mainTab}
            setMainTab={setMainTab}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />

          <AnimatePresence mode="wait">
            {mainTab === "Development" && (
              <DevTabContent key="dev" projects={filteredProjects} />
            )}
            {mainTab === "Design" && (
              <DesignTabContent key="design" works={PROFILE.designWorks} />
            )}
            {mainTab === "Management" && (
              <MgmtTabContent key="mgmt" works={PROFILE.managementWorks} />
            )}
          </AnimatePresence>
        </section>

        <Footer />
      </div>
    </main>
  );
}
