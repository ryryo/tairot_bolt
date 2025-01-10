"use client";

import { TarotCardType } from "@/types/tarot";
import { Card } from "@/components/ui/card";
import { useTarotCardDetail } from "@/hooks/use-tarot-card-detail";

interface ChatCardDisplayProps {
  card: TarotCardType;
}

export function ChatCardDisplay({ card }: ChatCardDisplayProps) {
  const { openCardDetail } = useTarotCardDetail();

  return (
    <Card 
      className="relative aspect-[2/3] w-24 bg-gradient-to-br from-tarot-purple/5 to-tarot-teal/5 border-tarot-purple/20 group cursor-pointer transition-transform hover:scale-105"
      onClick={() => openCardDetail(card.id)}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm text-center text-gray-600 group-hover:opacity-0 transition-opacity px-2">
          {card.name}
        </span>
      </div>
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="text-xs text-white text-center px-2">
          詳細を表示
        </span>
      </div>
    </Card>
  );
}