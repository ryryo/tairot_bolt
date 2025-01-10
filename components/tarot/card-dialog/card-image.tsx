"use client";

import { TarotCardDetail } from "@/types/tarot";

interface CardImageProps {
  card: TarotCardDetail;
}

export function CardImage({ card }: CardImageProps) {
  return (
    <div className="relative aspect-[2/3] w-full bg-gray-800 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">{card.name}</span>
    </div>
  );
}