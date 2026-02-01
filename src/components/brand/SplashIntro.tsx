"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrandLogo } from "./BrandLogo";

const splashKey = "trr_splash_seen";

export function SplashIntro() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeen = typeof window !== "undefined" && sessionStorage.getItem(splashKey) === "true";
    if (hasSeen) {
      return undefined;
    }
    setIsVisible(true);
    const timer = window.setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem(splashKey, "true");
    }, 2600);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <BrandLogo size="lg" priority />
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Tross 3rd Realtor</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
