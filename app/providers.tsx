"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { ReactNode } from "react";

/**
 * Central Framer Motion provider. LazyMotion + domAnimation keeps the
 * client bundle small (only the animation features we actually use are
 * loaded), and MotionConfig wires up automatic reduced-motion support
 * site-wide so individual components don't need to check the media
 * query themselves.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
