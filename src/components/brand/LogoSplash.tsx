"use client";

import { useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { BrandLogo } from "./BrandLogo";

type LogoSplashProps = {
  onComplete: () => void;
};

export function LogoSplash({ onComplete }: LogoSplashProps) {
  const hasCompleted = useRef(false);

  const handleComplete = useCallback(() => {
    if (hasCompleted.current) {
      return;
    }
    hasCompleted.current = true;
    onComplete();
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-brand-navy text-brand-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onClick={handleComplete}
      role="button"
      aria-label="Dismiss intro"
    >
      <motion.div
        className="flex flex-col items-center gap-6 px-6 text-center"
        animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 1.05] }}
        transition={{ duration: 1.8, ease: "easeInOut", times: [0, 0.3, 0.7, 1] }}
        onAnimationComplete={handleComplete}
      >
        <BrandLogo
          size="lg"
          forcePng
          priority
          className="w-[220px] sm:w-[240px] md:w-[300px] lg:w-[340px]"
        />
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.45em] text-brand-white">
            TED ROSS REAL ESTATE
          </p>
          <div className="mx-auto h-px w-28 bg-brand-gold sm:w-36" />
        </div>
      </motion.div>
    </motion.div>
  );
}
