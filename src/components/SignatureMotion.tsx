"use client";

import type { HTMLAttributes } from "react";
import { motion, type MotionProps } from "framer-motion";

const baseVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

const transition = {
  duration: 0.9,
  ease: [0.22, 0.61, 0.36, 1]
};

type SignatureMotionProps = MotionProps &
  HTMLAttributes<HTMLElement> & {
    as?: keyof JSX.IntrinsicElements;
    isButton?: boolean;
    animateOnLoad?: boolean;
    type?: "button" | "submit" | "reset";
  };

export function SignatureMotion({
  as = "div",
  isButton = false,
  animateOnLoad = true,
  children,
  ...props
}: SignatureMotionProps) {
  const MotionTag = (motion as Record<string, typeof motion.div>)[as] || motion.div;

  return (
    <MotionTag
      initial={animateOnLoad ? "hidden" : undefined}
      animate={animateOnLoad ? "visible" : undefined}
      variants={animateOnLoad ? baseVariants : undefined}
      transition={animateOnLoad ? transition : undefined}
      whileHover={isButton ? { y: -2, boxShadow: "0 10px 30px rgba(0,0,0,0.25)" } : undefined}
      whileTap={isButton ? { y: 0 } : undefined}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
