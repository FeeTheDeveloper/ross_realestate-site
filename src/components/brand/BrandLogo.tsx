"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const sizeMap = {
  sm: 56,
  md: 96,
  lg: 160
} as const;

type BrandLogoProps = {
  size?: keyof typeof sizeMap;
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ size = "md", className, priority = false }: BrandLogoProps) {
  const [usePng, setUsePng] = useState(true);
  const dimension = sizeMap[size];
  const src = useMemo(
    () => (usePng ? "/brand/logo/logo-primary.png" : "/brand/logo/logo-primary.svg"),
    [usePng]
  );

  return (
    <Image
      src={src}
      alt="Tross Realtor crest"
      width={dimension}
      height={dimension}
      priority={priority}
      className={["h-auto w-auto", className].filter(Boolean).join(" ")}
      onError={() => setUsePng(false)}
    />
  );
}
