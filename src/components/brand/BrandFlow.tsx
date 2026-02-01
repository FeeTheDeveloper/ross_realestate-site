"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LogoSplash } from "./LogoSplash";
import { Header } from "../nav/Header";

const splashKey = "tr_splash_seen";

type BrandFlowProps = {
  children: React.ReactNode;
};

export function BrandFlow({ children }: BrandFlowProps) {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasSeen = typeof window !== "undefined" && sessionStorage.getItem(splashKey) === "true";
    if (!hasSeen) {
      setShowSplash(true);
    }
  }, []);

  const handleComplete = useCallback(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(splashKey, "true");
    }
    setShowSplash(false);
  }, []);

  return (
    <>
      <AnimatePresence>{showSplash ? <LogoSplash onComplete={handleComplete} /> : null}</AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Header />
      </motion.div>
      {children}
    </>
  );
}
