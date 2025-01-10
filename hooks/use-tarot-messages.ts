"use client";

import { useState } from "react";
import { Message } from "@/types/tarot";

export function useTarotMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [remainingQuestions, setRemainingQuestions] = useState(3);
  const [isInitialQuestion, setIsInitialQuestion] = useState(true);

  return {
    messages,
    setMessages,
    isLoading,
    setIsLoading,
    remainingQuestions,
    setRemainingQuestions,
    isInitialQuestion,
    setIsInitialQuestion,
  };
}