"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "motion/react";

interface ScrollProgressProps {
  className?: string;
  color?: string;
  backgroundColor?: string;
}

export default function ScrollProgress({
  className,
  color = "#00C805",
  backgroundColor = "transparent",
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Background layer */}
      <div
        className={cn("fixed inset-x-0 top-0 z-[999] h-1", className)}
        style={{
          backgroundColor,
        }}
      />
      {/* Progress layer */}
      <motion.div
        className={cn(
          "fixed inset-x-0 top-0 z-[1000] h-1 origin-left",
          className,
        )}
        style={{
          scaleX,
          background: color,
        }}
      />
    </>
  );
}
