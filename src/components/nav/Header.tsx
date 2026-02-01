"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { BrandLogo } from "../brand/BrandLogo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Listings", href: "/listings" },
  { label: "Contact", href: "/contact" }
];

export function Header() {
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.header className="sticky top-0 z-40 w-full">
      <motion.div
        className="pointer-events-none absolute inset-0 bg-jet/80 backdrop-blur-sm"
        style={{ opacity: backgroundOpacity }}
      />
      <div className="container-site relative flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center">
          <BrandLogo size="sm" className="opacity-90" />
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-3 text-[10px] uppercase tracking-[0.25em] text-warm-ivory/80 sm:gap-5 sm:text-xs">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors duration-300 hover:text-warm-ivory"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
