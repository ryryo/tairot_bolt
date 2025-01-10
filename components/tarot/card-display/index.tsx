"use client";

import { TarotCard } from "../card";
import { TarotCardType } from "@/types/tarot";

interface TarotCardsDisplayProps {
  cards: TarotCardType[];
  onCardClick?: (card: TarotCardType) => void;
}

export function TarotCardsDisplay({ cards, onCardClick }: TarotCardsDisplayProps) {
  if (!cards?.length) return null;

  return (
    <div className="my-8 p-8 bg-gradient-to-br from-tarot-purple/5 to-tarot-teal/5 rounded-lg border border-tarot-purple/20">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="transform hover:scale-105 transition-transform duration-200"
          >
            <TarotCard
              card={card}
              onClick={onCardClick ? () => onCardClick(card) : undefined}
            />
          </div>
        ))}
      </div>
    </div>
  );
}