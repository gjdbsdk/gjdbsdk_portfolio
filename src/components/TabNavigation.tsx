"use client";

import { Layers, Palette, Users } from "lucide-react";
import { MainTabType } from "@/data/profile";

interface TabNavigationProps {
  mainTab: MainTabType;
  setMainTab: (tab: MainTabType) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  categories: string[];
}

export default function TabNavigation({
  mainTab,
  setMainTab,
  selectedCategory,
  setSelectedCategory,
  categories,
}: TabNavigationProps) {
  return (
    <div className="flex flex-col gap-4 border-b border-[#1e2942] pb-5 sm:pb-6">
      <div className="w-full md:w-fit p-1 sm:p-1.5 bg-[#0d1527] border border-[#1e2942] rounded-2xl">
        <div className="grid grid-cols-3 md:flex md:items-center gap-1 sm:gap-2">
          <button
            onClick={() => setMainTab("Development")}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-2 sm:py-2.5 px-2 sm:px-5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              mainTab === "Development"
                ? "bg-[#ff6b4a] text-white shadow-lg shadow-[#ff6b4a]/25"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="truncate">
              <span className="sm:hidden">개발</span>
              <span className="hidden sm:inline">개발 (Dev)</span>
            </span>
          </button>

          <button
            onClick={() => setMainTab("Design")}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-2 sm:py-2.5 px-2 sm:px-5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              mainTab === "Design"
                ? "bg-[#ff6b4a] text-white shadow-lg shadow-[#ff6b4a]/25"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="truncate">
              <span className="sm:hidden">디자인</span>
              <span className="hidden sm:inline">디자인 (Design)</span>
            </span>
          </button>

          <button
            onClick={() => setMainTab("Management")}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-2 sm:py-2.5 px-2 sm:px-5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              mainTab === "Management"
                ? "bg-[#ff6b4a] text-white shadow-lg shadow-[#ff6b4a]/25"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="truncate">
              <span className="sm:hidden">운영·기획</span>
              <span className="hidden sm:inline">운영 & 기획 (Mgmt)</span>
            </span>
          </button>
        </div>
      </div>

      {mainTab === "Development" && (
        <div className="w-full overflow-x-auto no-scrollbar">
          <div className="flex gap-1.5 p-1 bg-[#0d1527] border border-[#1e2942] rounded-xl w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-[11px] sm:text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-[#1e2942] text-[#ff8f3d] border border-[#ff6b4a]/40"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
