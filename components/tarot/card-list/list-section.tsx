"use client";

import { TarotCard } from "../card";
import { Card } from "@/components/ui/card";
import { listStyles } from "./styles";
import { CardSectionProps } from "../card/types";

export function ListSection({ 
  title, 
  cards, 
  onCardClick, 
  showSingleCard 
}: CardSectionProps) {
  return (
    <section>
      <h3 className={listStyles.section.title}>{title}</h3>
      <div className={listStyles.section.list}>
        {showSingleCard && (
          <Card
            className={listStyles.section.singleCard}
            onClick={() => onCardClick(cards[0])}
          >
            <div className="flex items-center gap-6">
              <TarotCard
                card={cards[0]}
                size="sm"
                showName={false}
                className="flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">{cards[0].name}</h3>
                <p className="text-gray-400 line-clamp-2">{cards[0].story}</p>
              </div>
            </div>
          </Card>
        )}
        {(showSingleCard ? cards.slice(1) : cards).map((card) => (
          <Card
            key={card.id}
            className={listStyles.section.card}
            onClick={() => onCardClick(card)}
          >
            <div className="flex items-center gap-6">
              <TarotCard
                card={card}
                size="sm"
                showName={false}
                className="flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">{card.name}</h3>
                <p className="text-gray-400 line-clamp-2">{card.story}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}