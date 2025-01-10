"use client";

import { useMemo } from "react";
import { TarotCardDetail } from "@/types/tarot";
import { foolCardDetail } from "@/data/tarot-cards/card-details";
import { createDummyCardDetail } from "@/data/tarot-cards/utils";

export function useTarotCards() {
  const cards = useMemo(() => {
    return Array.from(
      { length: 78 },
      (_, i) => i === 0 ? foolCardDetail : createDummyCardDetail(i)
    );
  }, []);

  return {
    cards,
    majorArcana: cards.slice(0, 22),
    minorArcana: {
      wands: cards.slice(22, 36),
      cups: cards.slice(36, 50),
      swords: cards.slice(50, 64),
      pentacles: cards.slice(64, 78),
    }
  };
}