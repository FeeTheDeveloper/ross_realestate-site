"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.header className="sticky top-0 z-40 w-full">
      <motion.div
        className="pointer-events-none absolute inset-0 border-b border-brand-navy/10 bg-brand-white/90 shadow-sm backdrop-blur-sm"
        style={{ opacity: backgroundOpacity }}
      />
      <div className="container-site relative flex min-h-[72px] items-center justify-between gap-6 py-4 md:min-h-[88px] md:py-5">
        <Link href="/" className="flex items-center">
          <BrandLogo size="md" priority className="scale-110 md:scale-125" />
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-3 text-[10px] uppercase tracking-[0.25em] text-brand-navy sm:gap-5 sm:text-xs">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`transition-colors duration-300 hover:text-brand-blue ${
                pathname === link.href
                  ? "underline decoration-brand-red decoration-2 underline-offset-8"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
