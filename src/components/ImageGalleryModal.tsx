"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { DesignWork } from "@/data/profile";

interface ImageGalleryModalProps {
  work: DesignWork | null;
  onClose: () => void;
  onSelectImageIndex: (index: number) => void;
}

export default function ImageGalleryModal({
  work,
  onClose,
  onSelectImageIndex,
}: ImageGalleryModalProps) {
  return (
    <AnimatePresence>
      {work && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative z-10 w-full max-w-4xl max-h-[85vh] bg-[#0d1527] border border-[#1e2942] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#1e2942] bg-[#070b14]/70">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-100">
                  {work.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  전체 이미지 ({work.images?.length}장) • 클릭하여 크게 보기
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#1e2942] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(85vh-75px)]">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {work.images?.map((src, idx) => (
                  <div
                    key={idx}
                    onClick={() => onSelectImageIndex(idx)}
                    className="relative aspect-square rounded-xl overflow-hidden border border-[#1e2942] bg-[#070b14] group cursor-pointer hover:border-[#ff6b4a]/60 transition-colors"
                  >
                    <Image
                      src={src}
                      alt={`${work.title} ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white drop-shadow" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
