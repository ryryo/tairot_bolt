"use client";

import { TarotCard } from "../card/card";
import { displayStyles } from "./styles";
import { TarotCardType } from "@/types/tarot";

interface TarotCardsDisplayProps {
  cards: TarotCardType[];
  onCardClick?: (card: TarotCardType) => void;
}

export function TarotCardsDisplay({ cards, onCardClick }: TarotCardsDisplayProps) {
  if (!cards?.length) return null;

  return (
    <div className={displayStyles.container}>
      <div className={displayStyles.inner}>
        <div className={displayStyles.cardList}>
          {cards.map((card, index) => (
            <TarotCard
              key={index}
              card={card}
              size="sm"
              onClick={onCardClick ? () => onCardClick(card) : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}