"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

interface PaperPlaneProps {
  startPosition: {
    x: number;
    y: number;
  };
}

export function PaperPlane({ startPosition }: PaperPlaneProps) {
  const spiralPath = {
    initial: {
      x: startPosition.x,
      y: startPosition.y,
      scale: 1,
      rotate: 0,
      opacity: 1
    },
    animate: {
      x: [
        startPosition.x,
        startPosition.x + 100,
        startPosition.x - 50,
        startPosition.x + 25,
        window.innerWidth / 2
      ],
      y: [
        startPosition.y,
        startPosition.y - 100,
        startPosition.y - 200,
        startPosition.y - 300,
        -100
      ],
      scale: [1, 1.2, 1, 0.8, 0],
      rotate: [0, 180, 360, 540, 720],
      opacity: [1, 1, 1, 0.5, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1]
      }
    }
  };

  return (
    <motion.div
      className="fixed left-0 top-0 w-full h-full pointer-events-none z-50"
      style={{ 
        transform: 'none',
        transformOrigin: '0 0'
      }}
    >
      <motion.div
        className="absolute text-white"
        initial="initial"
        animate="animate"
        variants={spiralPath}
        style={{ 
          transform: 'none',
          transformOrigin: '0 0'
        }}
      >
        <Send className="w-12 h-12" />
      </motion.div>
    </motion.div>
  );
}