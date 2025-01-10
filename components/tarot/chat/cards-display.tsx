import { TarotCardType } from "@/types/tarot";
import { Card } from "@/components/ui/card";
import { useTarotCardDetail } from "@/hooks/use-tarot-card-detail";

interface ChatCardsDisplayProps {
  cards: TarotCardType[];
}

export function ChatCardsDisplay({ cards }: ChatCardsDisplayProps) {
  const { openCardDetail } = useTarotCardDetail();

  if (!cards || cards.length === 0) return null;

  return (
    <div className="my-8 p-8 bg-gradient-to-br from-tarot-purple/5 to-tarot-teal/5 rounded-lg border border-tarot-purple/20">
      <div className="flex flex-wrap justify-center gap-4">
        {cards.map((card, index) => (
          <Card 
            key={index}
            className="relative aspect-[2/3] w-24 bg-gradient-to-br from-tarot-purple/5 to-tarot-teal/5 border-tarot-purple/20 cursor-pointer transition-all duration-300 hover:scale-110"
            onClick={() => openCardDetail(card.id)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm text-center text-gray-600 px-2">
                {card.name}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}