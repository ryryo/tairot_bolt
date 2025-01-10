"use client";

import { useState, useEffect, useCallback } from "react";

export function usePaperPlane(
  isTriggered: boolean,
  buttonRef: React.RefObject<HTMLButtonElement>
) {
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const updatePosition = useCallback(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + (rect.width / 2);
      const centerY = rect.top + (rect.height / 2);
      
      const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      
      setStartPosition({
        x: centerX + scrollX,
        y: centerY + scrollY
      });
    }
  }, [buttonRef]);

  useEffect(() => {
    if (isTriggered) {
      updatePosition();
    }
  }, [isTriggered, updatePosition]);

  useEffect(() => {
    if (isTriggered) {
      window.addEventListener('resize', updatePosition);
      return () => window.removeEventListener('resize', updatePosition);
    }
  }, [isTriggered, updatePosition]);

  return startPosition;
}