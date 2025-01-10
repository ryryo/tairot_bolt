"use client";

import {
  createContext,
  useContext,
  ReactNode,
} from "react";
import { Message } from "@/types/tarot";

interface TarotContextType {
  messages: Message[];
  isLoading: boolean;
  remainingQuestions: number;
  sendMessage: (content: string) => void;
  resetChat: () => void;
  isInitialQuestion: boolean;
}

const TarotContext = createContext<TarotContextType | undefined>(undefined);

export function useTarotContext() {
  const context = useContext(TarotContext);
  if (context === undefined) {
    throw new Error("useTarotContext must be used within a TarotProvider");
  }
  return context;
}

export { TarotContext };