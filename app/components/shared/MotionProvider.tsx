'use client';

import { MotionConfig } from 'framer-motion';
import { ReactNode } from 'react';

// Honour the operating system's "reduce motion" setting for every Framer Motion animation:
// movement (slides, scaling, the logo marquee) is switched off, simple fades remain.
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
