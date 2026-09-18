"use client";

import * as React from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/* Fade-up reveal when scrolled into view */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "span";
}) {
  const reduce = useReducedMotion();
  const Tag = as === "section" ? motion.section : as === "span" ? motion.span : motion.div;

  if (reduce) {
    const Static = as === "section" ? "section" : as === "span" ? "span" : "div";
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

/* Staggered container + items for card grids */
export function Stagger({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.09, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 26 },
        show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* Image that reveals with a soft clip + scale settle */
export function ImageReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={cn("overflow-hidden", className)}>{children}</div>;
  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial={{ clipPath: "inset(12% 6% 12% 6%)", opacity: 0.001 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.15, delay, ease: EASE }}
    >
      <motion.div
        className="h-full w-full"
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.4, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* Gentle parallax wrapper — moves children vertically based on page scroll */
export function Parallax({
  children,
  className,
  amount = 60,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  amount?: number;
} & MotionProps) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);

  if (reduce) return <div className={className}>{children}</div>;
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="h-full w-full" {...rest}>
        {children}
      </motion.div>
    </div>
  );
}

export { EASE };
