"use client";

import { motion } from "framer-motion";

interface LightParticleProps {
  index: number;
}

export function LightParticle({ index }: LightParticleProps) {
  return (
    <motion.div
      key={index}
      className="absolute w-2 h-2 bg-white rounded-full"
      initial={{
        x: `${Math.random() * 100}vw`,
        y: `${Math.random() * 100}vh`,
        scale: 0,
        opacity: 0
      }}
      animate={{
        y: "-100vh",
        scale: [0, 1.5, 0],
        opacity: [0, 1, 0]
      }}
      transition={{
        duration: 2,
        delay: Math.random() * 0.5,
        ease: "easeOut"
      }}
    />
  );
}