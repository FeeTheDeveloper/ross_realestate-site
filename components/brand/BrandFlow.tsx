"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LogoSplash } from "./LogoSplash";
import { Header } from "../nav/Header";

const splashKey = "tr_logo_splash_seen";

type BrandFlowProps = {
  children: React.ReactNode;
};

export function BrandFlow({ children }: BrandFlowProps) {
  const [showSplash, setShowSplash] = useState<boolean | null>(null);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem(splashKey) === "true";
    setShowSplash(!hasSeen);
  }, []);

  const handleComplete = useCallback(() => {
    sessionStorage.setItem(splashKey, "true");
    setShowSplash(false);
  }, []);

  return (
    <>
      <AnimatePresence>{showSplash ? <LogoSplash onComplete={handleComplete} /> : null}</AnimatePresence>
      {showSplash === false ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Header />
        </motion.div>
      ) : null}
      {children}
    </>
  );
}
