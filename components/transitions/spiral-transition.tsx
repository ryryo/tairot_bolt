"use client";

import { AnimatePresence, motion } from "framer-motion";
import { PaperPlane } from "./paper-plane/paper-plane";
import { usePaperPlane } from "./paper-plane/use-paper-plane";

interface SpiralTransitionProps {
  children: React.ReactNode;
  isTriggered: boolean;
  onComplete: () => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

export function SpiralTransition({
  children,
  isTriggered,
  onComplete,
  buttonRef
}: SpiralTransitionProps) {
  const startPosition = usePaperPlane(isTriggered, buttonRef);

  return (
    <div className="relative">
      {children}
      <AnimatePresence>
        {isTriggered && (
          <>
            <PaperPlane startPosition={startPosition} />
            <motion.div
              className="fixed inset-0 bg-white z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              onAnimationComplete={onComplete}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}