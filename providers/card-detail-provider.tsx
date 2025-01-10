"use client";

import { ReactNode } from "react";
import { TarotCardDialog } from "@/components/tarot/tarot-card-dialog";
import { useCardDetailStore } from "@/stores/card-detail-store";
import { useTarotCardDetail } from "@/hooks/use-tarot-card-detail";

interface CardDetailProviderProps {
  children: ReactNode;
}

export function CardDetailProvider({ children }: CardDetailProviderProps) {
  const selectedCard = useCardDetailStore((state) => state.selectedCard);
  const { closeCardDetail } = useTarotCardDetail();

  return (
    <>
      {children}
      <TarotCardDialog
        card={selectedCard}
        isOpen={!!selectedCard}
        onClose={closeCardDetail}
      />
    </>
  );
}