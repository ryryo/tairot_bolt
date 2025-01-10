"use client";

import { TarotCardType } from "@/types/tarot";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface TarotCardsDisplayProps {
  cards: TarotCardType[];
}

export function TarotCardsDisplay({ cards }: TarotCardsDisplayProps) {
  if (!cards || cards.length === 0) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-white border-b border-gray-100 shadow-sm z-40 h-[76px]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-2 h-[76px] overflow-x-auto">
          {cards.map((card, index) => (
            <Card 
              key={index} 
              className="relative h-[60px] w-[36px] bg-gradient-to-br from-tarot-purple/5 to-tarot-teal/5 border-tarot-purple/20 group"
            >
              <Image
                src={`/images/tarot-cards/small/${card.image}`}
                alt={card.name}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-1 text-center text-[8px] text-white opacity-0 group-hover:opacity-100">
                {card.name}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}