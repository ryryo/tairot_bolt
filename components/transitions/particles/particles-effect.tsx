"use client";

import { motion } from "framer-motion";
import { LightParticle } from "./light-particle";

export function ParticlesEffect() {
  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <LightParticle key={i} index={i} />
        ))}
      </div>
    </motion.div>
  );
}