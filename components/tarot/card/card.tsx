"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TarotCardProps } from "./types";
import { sizeClasses, baseCardStyles } from "./styles";

export function TarotCard({ 
  card, 
  onClick, 
  size = "md",
  showName = true,
  className 
}: TarotCardProps) {
  return (
    <Card 
      className={cn(
        baseCardStyles.wrapper,
        sizeClasses[size],
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="relative h-full">
        <div className="relative w-full h-full bg-gray-700">
          <div className="absolute inset-0 flex items-center justify-center text-white text-sm">
            {card.name}
          </div>
        </div>
        {showName && size !== "sm" && (
          <div className={baseCardStyles.name.normal}>
            {card.name}
          </div>
        )}
        {size === "sm" && (
          <div className={baseCardStyles.name.small}>
            {card.name}
          </div>
        )}
      </div>
    </Card>
  );
}