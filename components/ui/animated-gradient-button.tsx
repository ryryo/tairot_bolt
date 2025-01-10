"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@/types/button";

const AnimatedGradientButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative overflow-hidden bg-gradient-to-r from-tarot-purple via-tarot-teal to-tarot-orange",
          "bg-[length:200%_100%] animate-gradient hover:shadow-lg",
          "text-white font-medium",
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

export { AnimatedGradientButton };