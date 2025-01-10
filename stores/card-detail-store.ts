"use client";

import { create } from "zustand";
import { TarotCardDetail } from "@/types/tarot";

interface CardDetailState {
  selectedCard: TarotCardDetail | null;
  setSelectedCard: (card: TarotCardDetail | null) => void;
}

export const useCardDetailStore = create<CardDetailState>((set) => ({
  selectedCard: null,
  setSelectedCard: (card) => set({ selectedCard: card }),
}));