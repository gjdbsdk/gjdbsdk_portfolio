"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ZoomIn } from "lucide-react";
import { DesignWork } from "@/data/profile";
import SpotlightCard from "@/components/SpotlightCard";
import ImageGalleryModal from "@/components/ImageGalleryModal";
import ImageZoomModal from "@/components/ImageZoomModal";

export default function DesignTabContent({ works }: { works: DesignWork[] }) {
  const [galleryWork, setGalleryWork] = useState<DesignWork | null>(null);

  const [zoomContext, setZoomContext] = useState<{
    images: string[];
    index: number | null;
  }>({
    images: [],
    index: null,
  });

  const openZoom = (images: string[], index: number) => {
    setZoomContext({ images, index });
  };

  const closeZoom = () => {
    setZoomContext((prev) => ({ ...prev, index: null }));
  };

  const navigateZoom = (newIndex: number) => {
    setZoomContext((prev) => ({ ...prev, index: newIndex }));
  };

  return (
    <>
      <motion.div
        key="design"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        className="grid grid-cols-1 gap-5 sm:gap-6"
      >
        {works.map((work) => (
          <SpotlightCard key={work.id} className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1e2942] pb-3 sm:pb-4 mb-3.5 sm:mb-5">
              <div>
                <span className="text-xs font-mono text-[#ff8f3d]">
                  {work.period}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mt-0.5">
                  {work.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">{work.role}</p>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#101b33] border border-[#1e2b48] text-slate-300 w-fit">
                Design Portfolio
              </span>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {work.description}
            </p>

            {work.images &&
              work.images.length > 0 &&
              (() => {
                const maxDisplay = 4;
                const displayImages = work.images.slice(0, maxDisplay);
                const remainingCount = work.images.length - maxDisplay;

                return (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                        Visual Preview ({work.images.length})
                      </span>
                      {work.images.length > maxDisplay && (
                        <button
                          onClick={() => setGalleryWork(work)}
                          className="text-[11px] font-mono text-[#ff8f3d] hover:underline transition-all flex items-center gap-1 cursor-pointer"
                        >
                          +{remainingCount} more images
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                      {displayImages.map((src, index) => {
                        const isLastItem =
                          index === maxDisplay - 1 && remainingCount > 0;

                        return (
                          <div
                            key={index}
                            onClick={() => {
                              if (isLastItem) {
                                setGalleryWork(work);
                              } else {
                                openZoom(work.images || [], index);
                              }
                            }}
                            className="relative aspect-video rounded-xl overflow-hidden border border-[#1e2942] bg-[#070b14] group/img cursor-pointer"
                          >
                            <Image
                              src={src}
                              alt={`${work.title} preview ${index + 1}`}
                              fill
                              className="object-cover transition-transform duration-300 group-hover/img:scale-105"
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                            />

                            {!isLastItem && (
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                <ZoomIn className="w-5 h-5 text-white/90 drop-shadow" />
                              </div>
                            )}

                            {isLastItem && (
                              <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px] flex flex-col items-center justify-center transition-all group-hover/img:bg-slate-950/70">
                                <span className="text-xl sm:text-2xl font-black text-slate-100 tracking-tight">
                                  +{remainingCount}
                                </span>
                                <span className="text-[10px] sm:text-[11px] font-medium text-slate-300">
                                  전체보기
                                </span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}

            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                Key Deliverables
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                {work.deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 p-2 sm:p-2.5 rounded-lg bg-[#070b14] border border-[#19243d] text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6b4a] shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-0.5 rounded bg-[#101b33] text-slate-400 border border-[#1e2b48]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </motion.div>

      <ImageGalleryModal
        work={galleryWork}
        onClose={() => setGalleryWork(null)}
        onSelectImageIndex={(idx) => {
          if (galleryWork?.images) {
            openZoom(galleryWork.images, idx);
          }
        }}
      />

      <ImageZoomModal
        images={zoomContext.images}
        currentIndex={zoomContext.index}
        onClose={closeZoom}
        onNavigate={navigateZoom}
      />
    </>
  );
}
