"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import type { ButtonProps } from "@/types/button";

export const AnimatedGradientButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative overflow-hidden bg-gradient-to-r from-tarot-purple via-tarot-teal to-tarot-orange",
          "bg-[length:200%_auto] animate-gradient",
          "text-white font-semibold",
          "hover:bg-[length:220%_auto] hover:shadow-lg",
          "transition-all duration-300",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

AnimatedGradientButton.displayName = "AnimatedGradientButton";