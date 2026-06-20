"use client";

import { MotionConfig } from "framer-motion";

/**
 * reducedMotion="user" — kullanıcının işletim sistemi "prefers-reduced-motion"
 * tercihini tüm Framer Motion animasyonlarına otomatik uygular.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
