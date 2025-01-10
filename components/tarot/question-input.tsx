"use client";

import { useState, useCallback, KeyboardEvent } from "react";
import { Textarea } from "@/components/ui/textarea";
import { GradientButton } from "@/components/ui/gradient-button";
import { useTarotContext } from "@/contexts/tarot-context";
import { SendHorizontal } from "lucide-react";

export function QuestionInput() {
  const [input, setInput] = useState("");
  const { sendMessage, isLoading } = useTarotContext();

  const handleSubmit = useCallback((e?: React.FormEvent) => {
    e?.preventDefault();
    if (input.trim() && !isLoading) {
      sendMessage(input);
      setInput("");
    }
  }, [input, isLoading, sendMessage]);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="追加の質問を入力してください..."
        className="pr-12 bg-white border-gray-200 text-gray-900 focus:border-tarot-purple"
        disabled={isLoading}
      />
      <GradientButton
        type="submit"
        size="icon"
        className="absolute right-2 bottom-2"
        disabled={!input.trim() || isLoading}
      >
        <SendHorizontal className="h-4 w-4" />
      </GradientButton>
    </form>
  );
}