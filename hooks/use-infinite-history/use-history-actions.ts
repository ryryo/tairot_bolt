"use client";

import { useCallback } from "react";
import { HistoryEntry } from "@/types/history";

export function useHistoryActions(
  setItems: React.Dispatch<React.SetStateAction<HistoryEntry[]>>
) {
  const toggleBookmark = useCallback((id: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, bookmarked: !item.bookmarked } : item
      )
    );
  }, [setItems]);

  const addNote = useCallback((id: string, note: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, notes: [...(item.notes || []), note] }
          : item
      )
    );
  }, [setItems]);

  return { toggleBookmark, addNote };
}