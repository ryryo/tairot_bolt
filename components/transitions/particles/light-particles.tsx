"use client";

import { motion } from "framer-motion";

export function LightParticles() {
  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full shadow-glow"
          style={{
            boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.3)',
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
          }}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            y: [0, -window.innerHeight * 1.5],
            scale: [0, 1.5, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 1,
            delay: Math.random() * 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      ))}
    </motion.div>
  );
}