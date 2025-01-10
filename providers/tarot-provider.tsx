"use client";

import { useState, useCallback, useRef, useEffect, ReactNode } from "react";
import { TarotContext } from "@/contexts/tarot-context";
import { Message } from "@/types/tarot";
import { useTarotMessages } from "@/hooks/use-tarot-messages";

interface TarotProviderProps {
  children: ReactNode;
  initialQuestion: string;
}

// ダミーデータ
const DUMMY_CARDS = [
  { id: 0, name: "愚者", image: "fool.jpg" },
  { id: 1, name: "魔術師", image: "magician.jpg" },
  { id: 2, name: "女教皇", image: "priestess.jpg" },
];

const DUMMY_SUMMARY = {
  title: "恋愛の進展に関する占い",
  category: "love" as const,
  keywords: ["恋愛", "進展", "タイミング"],
};

const DUMMY_CONCLUSION = {
  summary: "現在のあなたは、新しい恋愛のステージに進むための準備が整っている状態です。",
  insights: [
    "相手との関係を深める良いタイミングです",
    "自分の気持ちに正直になることが大切です",
    "コミュニケーションの質が向上しています",
  ],
  advice: "相手の気持ちを尊重しながら、自分の思いを素直に伝えていくことをお勧めします。",
  nextSteps: [
    "気持ちを言葉で表現する機会を作る",
    "二人で新しい体験を共有する",
    "将来についての会話を始める",
  ],
};

export function TarotProvider({ children, initialQuestion }: TarotProviderProps) {
  const {
    messages,
    setMessages,
    isLoading,
    setIsLoading,
    remainingQuestions,
    setRemainingQuestions,
    isInitialQuestion,
    setIsInitialQuestion,
  } = useTarotMessages();

  const initialQuestionProcessed = useRef(false);

  const sendMessage = useCallback(async (content: string) => {
    if (isLoading) return;

    setIsLoading(true);
    setMessages((prev) => [...prev, { role: "user", content }]);

    try {
      // ダミーレスポンスを生成
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newMessage: Message = {
        role: "assistant",
        content: "あなたの質問に対する回答です。カードが示す通り、新しい機会が訪れようとしています。",
        cards: isInitialQuestion ? DUMMY_CARDS : undefined,
        summary: isInitialQuestion ? DUMMY_SUMMARY : undefined,
        conclusion: !isInitialQuestion && remainingQuestions === 1 ? DUMMY_CONCLUSION : undefined,
      };

      setMessages((prev) => [...prev, newMessage]);

      if (!isInitialQuestion) {
        setRemainingQuestions((prev) => prev - 1);
      }
      setIsInitialQuestion(false);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, isInitialQuestion, remainingQuestions, setIsInitialQuestion, setIsLoading, setMessages, setRemainingQuestions]);

  const resetChat = useCallback(() => {
    setMessages([]);
    setRemainingQuestions(3);
    setIsInitialQuestion(true);
    initialQuestionProcessed.current = false;
  }, [setMessages, setRemainingQuestions, setIsInitialQuestion]);

  useEffect(() => {
    if (initialQuestion && !initialQuestionProcessed.current && messages.length === 0) {
      initialQuestionProcessed.current = true;
      sendMessage(initialQuestion);
    }
  }, [initialQuestion, sendMessage, messages.length]);

  return (
    <TarotContext.Provider
      value={{
        messages,
        isLoading,
        remainingQuestions,
        sendMessage,
        resetChat,
        isInitialQuestion,
      }}
    >
      {children}
    </TarotContext.Provider>
  );
}