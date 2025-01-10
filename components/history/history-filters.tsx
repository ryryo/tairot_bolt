"use client";

import { Button } from "@/components/ui/button";
import { BookmarkIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const FILTERS = [
  { id: "all", label: "すべて" },
  { id: "bookmarked", label: "ブックマーク", icon: BookmarkIcon },
  { id: "love", label: "恋愛" },
  { id: "work", label: "仕事" },
  { id: "health", label: "健康" },
  { id: "other", label: "その他" },
] as const;

interface HistoryFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function HistoryFilters({ activeFilter, onFilterChange }: HistoryFiltersProps) {
  return (
    <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
      {FILTERS.map((filter) => (
        <Button
          key={filter.id}
          variant="ghost"
          onClick={() => onFilterChange(filter.id)}
          className={cn(
            "whitespace-nowrap",
            activeFilter === filter.id
              ? "bg-tarot-purple/10 text-tarot-purple hover:bg-tarot-purple/20"
              : "text-gray-600 hover:text-tarot-purple hover:bg-tarot-purple/5"
          )}
        >
          {filter.icon && <filter.icon className="w-4 h-4 mr-2" />}
          {filter.label}
        </Button>
      ))}
    </div>
  );
}