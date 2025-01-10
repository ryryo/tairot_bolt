"use client";

import { TarotCardDetail } from "@/types/tarot";
import { useTarotCards } from "@/hooks/use-tarot-cards";
import { ListSection } from "./list-section";
import { listStyles } from "./styles";

interface TarotCardListProps {
  onCardClick: (card: TarotCardDetail) => void;
}

export function TarotCardList({ onCardClick }: TarotCardListProps) {
  const { cards } = useTarotCards();

  // 大アルカナと小アルカナを分離
  const majorArcana = cards.slice(0, 22);
  const minorArcana = cards.slice(22);

  // 小アルカナをスートごとに分類
  const suits = {
    wands: minorArcana.slice(0, 14),
    cups: minorArcana.slice(14, 28),
    swords: minorArcana.slice(28, 42),
    pentacles: minorArcana.slice(42)
  };

  const suitTitles = {
    wands: "ワンドのスート",
    cups: "カップのスート",
    swords: "ソードのスート",
    pentacles: "ペンタクルのスート"
  };

  return (
    <div className={listStyles.container}>
      <ListSection
        title="大アルカナ"
        cards={majorArcana}
        onCardClick={onCardClick}
        showSingleCard
      />

      <section>
        <h2 className="text-2xl font-bold mb-6">小アルカナ</h2>
        <div className="space-y-8">
          {(Object.keys(suits) as Array<keyof typeof suits>).map((suit) => (
            <ListSection
              key={suit}
              title={suitTitles[suit]}
              cards={suits[suit]}
              onCardClick={onCardClick}
            />
          ))}
        </div>
      </section>
    </div>
  );
}