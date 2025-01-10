"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { TarotCardType } from "@/types/tarot";

interface TarotCardProps {
  card: TarotCardType;
}

export function TarotCard({ card }: TarotCardProps) {
  return (
    <Card className="overflow-hidden transition-transform hover:scale-105">
      <div className="relative aspect-[2/3]">
        <Image
          src={`/images/tarot-cards/small/${card.image}`}
          alt={card.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-2 text-center text-sm">{card.name}</div>
    </Card>
  );
}