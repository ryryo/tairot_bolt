"use client";

import { NewQuestionButton } from "@/components/tarot/new-question-button";

export function ChatHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[76px] bg-black border-b border-gray-800 shadow-lg">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">めちゃんこタロット</h1>
        <NewQuestionButton />
      </div>
    </header>
  );
}