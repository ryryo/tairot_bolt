"use client";

import { useCallback } from "react";
import { useTarotCards } from "./use-tarot-cards";
import { useCardDetailStore } from "@/stores/card-detail-store";

export function useTarotCardDetail() {
  const { cards } = useTarotCards();
  const { setSelectedCard } = useCardDetailStore();

  const openCardDetail = useCallback((cardId: number) => {
    const card = cards.find(c => c.id === cardId);
    if (card) {
      setSelectedCard(card);
    }
  }, [cards, setSelectedCard]);

  const closeCardDetail = useCallback(() => {
    setSelectedCard(null);
  }, [setSelectedCard]);

  return {
    openCardDetail,
    closeCardDetail,
  };
}