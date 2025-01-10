"use client";

import { Badge } from "@/components/ui/badge";
import { ChatSummary } from "@/types/chat";

interface ChatHeaderProps {
  summary?: ChatSummary;
}

const CATEGORY_LABELS = {
  love: "恋愛",
  work: "仕事",
  health: "健康",
  other: "その他",
} as const;

const CATEGORY_COLORS = {
  love: "bg-pink-100 text-pink-800 hover:bg-pink-100",
  work: "bg-blue-100 text-blue-800 hover:bg-blue-100",
  health: "bg-green-100 text-green-800 hover:bg-green-100",
  other: "bg-purple-100 text-purple-800 hover:bg-purple-100",
} as const;

export function ChatHeader({ summary }: ChatHeaderProps) {
  if (!summary) return null;

  return (
    <div className="mb-8 p-6 bg-gradient-to-br from-tarot-purple/5 to-tarot-teal/5 rounded-lg border border-tarot-purple/20">
      <h2 className="text-xl font-semibold mb-3">{summary.title}</h2>
      <Badge 
        className={CATEGORY_COLORS[summary.category]}
        variant="secondary"
      >
        {CATEGORY_LABELS[summary.category]}
      </Badge>
    </div>
  );
}