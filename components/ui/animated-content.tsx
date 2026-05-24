"use client";

import { motion, HTMLMotionProps } from "motion/react";
import { ReactNode } from "react";

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  delay?: number;
  className?: string;
  // Legacy props kept for compatibility (ignored)
  container?: string | HTMLElement | null;
  threshold?: number;
  ease?: string;
  disappearAfter?: number;
  disappearDuration?: number;
  disappearEase?: string;
  onComplete?: () => void;
  onDisappearanceComplete?: () => void;
  [key: string]: unknown;
}

export default function AnimatedContent({
  children,
  distance = 40,
  direction = "vertical",
  reverse = false,
  duration = 0.6,
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  delay = 0,
  className = "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  container,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  threshold,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ease,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  disappearAfter,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  disappearDuration,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  disappearEase,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onComplete,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onDisappearanceComplete,
  ...rest
}: AnimatedContentProps) {
  const axis = direction === "horizontal" ? "x" : "y";
  const offset = reverse ? -distance : distance;

  const initial: Record<string, number> = {
    [axis]: offset,
    scale,
    opacity: animateOpacity ? initialOpacity : 1,
  };

  const animate: Record<string, number> = {
    [axis]: 0,
    scale: 1,
    opacity: 1,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...(rest as HTMLMotionProps<"div">)}
    >
      {children}
    </motion.div>
  );
}
