"use client";

import { useCallback } from "react";
import { HistoryEntry } from "@/types/history";

interface UseHistoryNavigationProps {
  items: HistoryEntry[];
  selectedEntry: HistoryEntry | null;
  setSelectedEntry: (entry: HistoryEntry | null) => void;
}

export function useHistoryNavigation({
  items,
  selectedEntry,
  setSelectedEntry
}: UseHistoryNavigationProps) {
  const currentIndex = selectedEntry ? items.findIndex(e => e.id === selectedEntry.id) : -1;
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  const handlePrevious = useCallback(() => {
    if (hasPrevious) {
      setSelectedEntry(items[currentIndex - 1]);
    }
  }, [hasPrevious, items, currentIndex, setSelectedEntry]);

  const handleNext = useCallback(() => {
    if (hasNext) {
      setSelectedEntry(items[currentIndex + 1]);
    }
  }, [hasNext, items, currentIndex, setSelectedEntry]);

  return {
    handlePrevious,
    handleNext,
    hasPrevious,
    hasNext
  };
}