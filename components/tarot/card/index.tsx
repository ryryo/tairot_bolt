"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TarotCardType } from "@/types/tarot";

interface TarotCardProps {
  card: TarotCardType;
  onClick?: () => void;
  className?: string;
}

export function TarotCard({ card, onClick, className }: TarotCardProps) {
  return (
    <Card 
      className={cn(
        "relative aspect-[2/3] overflow-hidden transition-all duration-300",
        onClick && "cursor-pointer hover:shadow-lg",
        className
      )}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-tarot-purple/10 to-tarot-teal/10">
        <div className="absolute inset-0 flex items-center justify-center text-gray-800 font-medium">
          {card.name}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
        <p className="text-xs text-center text-white">{card.name}</p>
      </div>
    </Card>
  );
}