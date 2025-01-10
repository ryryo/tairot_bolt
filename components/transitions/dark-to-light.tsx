"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LightParticles } from "./particles/light-particles";

interface DarkToLightTransitionProps {
  children: React.ReactNode;
  isTriggered: boolean;
  onComplete: () => void;
}

export function DarkToLightTransition({
  children,
  isTriggered,
  onComplete
}: DarkToLightTransitionProps) {
  return (
    <div className="relative">
      {children}
      <AnimatePresence>
        {isTriggered && (
          <>
            <motion.div
              className="fixed inset-0 bg-gradient-to-t from-black to-transparent z-30"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <LightParticles />
            <motion.div
              className="fixed inset-0 bg-white z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              onAnimationComplete={onComplete}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}