"use client";

import { motion } from "framer-motion";

interface FadeToLightProps {
  onComplete: () => void;
}

export function FadeToLight({ onComplete }: FadeToLightProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-white z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-tarot-purple/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      />
    </motion.div>
  );
}