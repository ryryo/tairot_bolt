"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookmarkIcon } from "lucide-react";
import { HistoryEntry } from "@/types/history";
import { useTarotCardDetail } from "@/hooks/use-tarot-card-detail";
import { cn } from "@/lib/utils";

interface HistoryCardProps {
  entry: HistoryEntry;
  onSelect: () => void;
  onBookmarkToggle: () => void;
}

const CATEGORY_COLORS = {
  love: "bg-pink-100 text-pink-800",
  work: "bg-blue-100 text-blue-800",
  health: "bg-green-100 text-green-800",
  other: "bg-purple-100 text-purple-800",
} as const;

export function HistoryCard({ entry, onSelect, onBookmarkToggle }: HistoryCardProps) {
  const { openCardDetail } = useTarotCardDetail();

  return (
    <Card 
      className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
      onClick={onSelect}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">{entry.title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{entry.date}</span>
              <Badge 
                className={CATEGORY_COLORS[entry.category]}
                variant="secondary"
              >
                {entry.category}
              </Badge>
            </div>
          </div>
          <BookmarkIcon 
            className={cn(
              "w-5 h-5 cursor-pointer transition-colors",
              entry.bookmarked ? "text-yellow-500 fill-yellow-500" : "text-gray-400"
            )}
            onClick={(e) => {
              e.stopPropagation();
              onBookmarkToggle();
            }}
          />
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {entry.cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 aspect-[2/3] bg-gradient-to-br from-tarot-purple/10 to-tarot-teal/10 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                openCardDetail(card.id);
              }}
            >
              <span className="text-sm text-center text-gray-600 px-2">
                {card.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}