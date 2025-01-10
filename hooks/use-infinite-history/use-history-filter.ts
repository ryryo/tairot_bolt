"use client";

import { useMemo } from "react";
import { HistoryEntry } from "@/types/history";

export function useHistoryFilter(items: HistoryEntry[], filter: string) {
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      if (filter === 'all') return true;
      if (filter === 'bookmarked') return item.bookmarked;
      return item.category === filter;
    });
  }, [items, filter]);

  return { filteredItems };
}