"use client";

import { TarotCard } from "../card/card";
import { CardSectionProps } from "../card/types";
import { gridStyles } from "./styles";

export function CardSection({ 
  title, 
  cards, 
  onCardClick, 
  showSingleCard 
}: CardSectionProps) {
  return (
    <section>
      <h3 className={gridStyles.section.title}>{title}</h3>
      <div className={gridStyles.section.grid}>
        {showSingleCard && (
          <div className={gridStyles.section.singleCard}>
            <TarotCard
              card={cards[0]}
              size="lg"
              onClick={() => onCardClick(cards[0])}
            />
          </div>
        )}
        <div className={gridStyles.section.multiCard}>
          {(showSingleCard ? cards.slice(1) : cards).map((card) => (
            <TarotCard
              key={card.id}
              card={card}
              onClick={() => onCardClick(card)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}