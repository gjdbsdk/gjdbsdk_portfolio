"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";

interface ImageZoomModalProps {
  images: string[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ImageZoomModal({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: ImageZoomModalProps) {
  const isOpen = currentIndex !== null && images.length > 0;
  const currentSrc = isOpen ? images[currentIndex] : null;

  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const dragStartRef = useRef({ x: 0, y: 0 });
  const initialPinchDistRef = useRef<number | null>(null);
  const initialScaleRef = useRef(1);
  const touchStartRef = useRef({ x: 0, y: 0, time: 0 });

  const resetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.5, 4));
  const handleZoomOut = () =>
    setScale((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });

  const goNext = useCallback(() => {
    if (currentIndex === null) return;
    resetZoom();
    if (currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0);
    }
  }, [currentIndex, images.length, onNavigate, resetZoom]);

  const goPrev = useCallback(() => {
    if (currentIndex === null) return;
    resetZoom();
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(images.length - 1);
    }
  }, [currentIndex, images.length, onNavigate, resetZoom]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, goNext, goPrev]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setScale((prev) => Math.min(prev + 0.25, 4));
    } else {
      setScale((prev) => {
        const next = Math.max(prev - 0.25, 1);
        if (next === 1) setPosition({ x: 0, y: 0 });
        return next;
      });
    }
  };

  const handleDoubleClick = () => {
    if (scale > 1) {
      resetZoom();
    } else {
      setScale(2);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const getTouchDist = (touches: React.TouchList) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      initialPinchDistRef.current = getTouchDist(e.touches);
      initialScaleRef.current = scale;
    } else if (e.touches.length === 1) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: Date.now(),
      };
      if (scale > 1) {
        setIsDragging(true);
        dragStartRef.current = {
          x: e.touches[0].clientX - position.x,
          y: e.touches[0].clientY - position.y,
        };
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && initialPinchDistRef.current !== null) {
      const currentDist = getTouchDist(e.touches);
      const ratio = currentDist / initialPinchDistRef.current;
      const nextScale = Math.min(
        Math.max(initialScaleRef.current * ratio, 1),
        4,
      );
      setScale(nextScale);
      if (nextScale === 1) setPosition({ x: 0, y: 0 });
    } else if (e.touches.length === 1 && scale > 1 && isDragging) {
      setPosition({
        x: e.touches[0].clientX - dragStartRef.current.x,
        y: e.touches[0].clientY - dragStartRef.current.y,
      });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.touches.length < 2) {
      initialPinchDistRef.current = null;
    }

    if (e.changedTouches.length === 1 && scale === 1) {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const dx = touchEndX - touchStartRef.current.x;
      const dy = touchEndY - touchStartRef.current.y;
      const dt = Date.now() - touchStartRef.current.time;

      if (dt < 400 && Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        if (dx > 0) goPrev();
        else goNext();
      }
    }

    if (scale <= 1) {
      setPosition({ x: 0, y: 0 });
    }
    setIsDragging(false);
  };

  return (
    <AnimatePresence>
      {isOpen && currentSrc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center select-none overflow-hidden touch-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-pointer"
          />

          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 z-30 flex items-center justify-between text-white pointer-events-none">
            <span className="text-xs sm:text-sm font-mono bg-[#0d1527]/80 px-3 py-1.5 rounded-full border border-[#1e2942]">
              {currentIndex + 1} / {images.length}
            </span>

            <button
              onClick={onClose}
              className="p-2 sm:p-2.5 rounded-full bg-[#0d1527]/80 hover:bg-[#ff6b4a] border border-[#1e2942] text-white transition-colors cursor-pointer pointer-events-auto"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {images.length > 1 && (
            <button
              onClick={goPrev}
              className="absolute left-2 sm:left-6 z-30 p-2.5 sm:p-3.5 rounded-full bg-[#0d1527]/80 hover:bg-[#ff6b4a] border border-[#1e2942] text-white transition-all shadow-xl cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}

          {images.length > 1 && (
            <button
              onClick={goNext}
              className="absolute right-2 sm:right-6 z-30 p-2.5 sm:p-3.5 rounded-full bg-[#0d1527]/80 hover:bg-[#ff6b4a] border border-[#1e2942] text-white transition-all shadow-xl cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}

          <div
            className="relative w-full h-[75vh] sm:h-[85vh] max-w-5xl flex items-center justify-center p-2 sm:p-4 z-20"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              key={currentIndex}
              onDoubleClick={handleDoubleClick}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                cursor: scale > 1 ? "grab" : "zoom-in",
                transition: isDragging ? "none" : "transform 0.15s ease-out",
              }}
              className="relative w-full h-full flex items-center justify-center active:cursor-grabbing"
            >
              <Image
                src={currentSrc}
                alt="Zoomed image"
                fill
                className="object-contain pointer-events-none"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          <div className="absolute bottom-5 sm:bottom-7 z-30 flex items-center gap-2 bg-[#0d1527]/85 border border-[#1e2942] px-3.5 py-1.5 rounded-full shadow-2xl backdrop-blur-md">
            <button
              onClick={handleZoomOut}
              disabled={scale <= 1}
              className="p-1.5 text-slate-300 hover:text-white disabled:opacity-40 transition-colors"
            >
              <ZoomOut className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono text-slate-300 min-w-10 text-center">
              {Math.round(scale * 100)}%
            </span>

            <button
              onClick={handleZoomIn}
              disabled={scale >= 4}
              className="p-1.5 text-slate-300 hover:text-white disabled:opacity-40 transition-colors"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            <div className="w-px h-3.5 bg-[#1e2942] mx-1" />

            <button
              onClick={resetZoom}
              className="p-1.5 text-slate-400 hover:text-[#ff8f3d] transition-colors"
              title="원래 크기로 리셋"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
