"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Message } from "@/types/tarot";
import { User, Bot } from "lucide-react";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex gap-3", isUser ? "justify-end" : "justify-start")}>
      <Card 
        className={cn(
          "p-4 max-w-[80%]",
          isUser 
            ? "bg-tarot-purple/10 text-gray-900 border-tarot-purple/20" 
            : "bg-white text-gray-900 border-gray-100"
        )}
      >
        <div className="flex items-start gap-3">
          {!isUser && <Bot className="w-6 h-6 mt-1 text-tarot-teal" />}
          {isUser && <User className="w-6 h-6 mt-1 text-tarot-purple" />}
          <div className="prose prose-sm max-w-none">
            {message.content}
          </div>
        </div>
      </Card>
    </div>
  );
}