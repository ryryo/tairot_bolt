"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";
import { useTarotContext } from "@/contexts/tarot-context";
import { ChatHeader } from "./chat/header";
import { MessageGroup } from "./chat/message-group";
import { Conclusion } from "./chat/conclusion";
import { QuestionInput } from "./question-input";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { GradientButton } from "@/components/ui/gradient-button";

export function ChatInterface() {
  const { messages, isLoading, remainingQuestions } = useTarotContext();
  const bottomRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // 最初のAIメッセージから要約を取得
  const firstAIMessage = messages.find(m => m.role === "assistant");
  const summary = firstAIMessage?.summary;

  // 最後のAIメッセージからまとめを取得
  const lastAIMessage = [...messages].reverse().find(m => m.role === "assistant");
  const conclusion = lastAIMessage?.conclusion;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleNewQuestion = () => {
    router.push('/');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 pt-24">
      <ChatHeader summary={summary} />

      <div className="space-y-8">
        {messages.map((message, index) => (
          <MessageGroup key={index} message={message} />
        ))}
        
        {!remainingQuestions && conclusion && (
          <Conclusion conclusion={conclusion} />
        )}

        {isLoading && (
          <div className="flex justify-center py-4">
            <LoadingSpinner />
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="sticky bottom-4">
        {remainingQuestions > 0 ? (
          <>
            <div className="text-sm text-gray-400 text-center mb-2">
              追加質問の残り回数: {remainingQuestions}回
            </div>
            <QuestionInput />
          </>
        ) : messages.length > 0 && (
          <div className="text-center">
            <GradientButton
              onClick={handleNewQuestion}
              className="px-6 py-2"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              新しい質問を開始する
            </GradientButton>
          </div>
        )}
      </div>
    </div>
  );
}