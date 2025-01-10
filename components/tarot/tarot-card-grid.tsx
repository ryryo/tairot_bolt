"use client";

import { TarotCardDetail } from "@/types/tarot";
import { useTarotCards } from "@/hooks/use-tarot-cards";
import { Card } from "@/components/ui/card";

interface TarotCardGridProps {
  onCardClick: (card: TarotCardDetail) => void;
}

export function TarotCardGrid({ onCardClick }: TarotCardGridProps) {
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
    <div className="space-y-12">
      {/* 大アルカナセクション */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-black">大アルカナ</h2>
        <div className="grid gap-4">
          {/* 愚者を中央に配置 */}
          <div className="flex justify-center mb-4">
            <Card
              className="w-48 overflow-hidden transition-transform hover:scale-105 cursor-pointer bg-gradient-to-br from-tarot-purple/5 to-tarot-teal/5 border-tarot-purple/20"
              onClick={() => onCardClick(majorArcana[0])}
            >
              <div className="relative aspect-[2/3]">
                <div className="absolute inset-0 flex items-center justify-center text-black">
                  {majorArcana[0].name}
                </div>
              </div>
            </Card>
          </div>
          {/* 残りの大アルカナ */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
            {majorArcana.slice(1).map((card) => (
              <Card
                key={card.id}
                className="overflow-hidden transition-transform hover:scale-105 cursor-pointer bg-gradient-to-br from-tarot-purple/5 to-tarot-teal/5 border-tarot-purple/20"
                onClick={() => onCardClick(card)}
              >
                <div className="relative aspect-[2/3]">
                  <div className="absolute inset-0 flex items-center justify-center text-black">
                    {card.name}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 小アルカナセクション */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-black">小アルカナ</h2>
        <div className="space-y-8">
          {(Object.keys(suits) as Array<keyof typeof suits>).map((suit) => (
            <div key={suit}>
              <h3 className="text-xl font-semibold mb-4 text-black">{suitTitles[suit]}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
                {suits[suit].map((card) => (
                  <Card
                    key={card.id}
                    className="overflow-hidden transition-transform hover:scale-105 cursor-pointer bg-gradient-to-br from-tarot-orange/5 to-tarot-teal/5 border-tarot-orange/20"
                    onClick={() => onCardClick(card)}
                  >
                    <div className="relative aspect-[2/3]">
                      <div className="absolute inset-0 flex items-center justify-center text-black">
                        {card.name}
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