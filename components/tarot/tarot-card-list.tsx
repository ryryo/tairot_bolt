"use client";

import { TarotCardDetail } from "@/types/tarot";
import { useTarotCards } from "@/hooks/use-tarot-cards";
import { Card } from "@/components/ui/card";

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
    <div className="space-y-8">
      {/* 大アルカナセクション */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-black">大アルカナ</h2>
        <div className="space-y-4">
          {/* 愚者を最初に表示 */}
          <Card
            className="p-4 bg-gradient-to-r from-tarot-purple/5 to-tarot-teal/5 hover:from-tarot-purple/10 hover:to-tarot-teal/10 cursor-pointer transition-colors border-tarot-purple/20"
            onClick={() => onCardClick(majorArcana[0])}
          >
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-32 flex-shrink-0 bg-tarot-purple/10 rounded flex items-center justify-center">
                <span className="text-black">{majorArcana[0].name}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black">{majorArcana[0].name}</h3>
                <p className="text-gray-600 line-clamp-2">{majorArcana[0].story}</p>
              </div>
            </div>
          </Card>
          {/* 残りの大アルカナ */}
          {majorArcana.slice(1).map((card) => (
            <Card
              key={card.id}
              className="p-4 bg-gradient-to-r from-tarot-purple/5 to-tarot-teal/5 hover:from-tarot-purple/10 hover:to-tarot-teal/10 cursor-pointer transition-colors border-tarot-purple/20"
              onClick={() => onCardClick(card)}
            >
              <div className="flex items-center gap-6">
                <div className="relative w-20 h-32 flex-shrink-0 bg-tarot-purple/10 rounded flex items-center justify-center">
                  <span className="text-black">{card.name}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">{card.name}</h3>
                  <p className="text-gray-600 line-clamp-2">{card.story}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 小アルカナセクション */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-black">小アルカナ</h2>
        <div className="space-y-8">
          {(Object.keys(suits) as Array<keyof typeof suits>).map((suit) => (
            <div key={suit}>
              <h3 className="text-xl font-semibold mb-4 text-black">{suitTitles[suit]}</h3>
              <div className="space-y-4">
                {suits[suit].map((card) => (
                  <Card
                    key={card.id}
                    className="p-4 bg-gradient-to-r from-tarot-orange/5 to-tarot-teal/5 hover:from-tarot-orange/10 hover:to-tarot-teal/10 cursor-pointer transition-colors border-tarot-orange/20"
                    onClick={() => onCardClick(card)}
                  >
                    <div className="flex items-center gap-6">
                      <div className="relative w-20 h-32 flex-shrink-0 bg-tarot-orange/10 rounded flex items-center justify-center">
                        <span className="text-black">{card.name}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-black">{card.name}</h3>
                        <p className="text-gray-600 line-clamp-2">{card.story}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}