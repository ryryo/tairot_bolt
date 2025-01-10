"use client";

import { useState, useCallback, useEffect } from "react";
import { HistoryEntry } from "@/types/history";
import { generateHistoryBatch } from "@/lib/history/generate";

interface UseHistoryLoadingProps {
  filter: string;
  setItems: React.Dispatch<React.SetStateAction<HistoryEntry[]>>;
}

const PAGE_SIZE = 10;
const MAX_PAGES = 10;

export function useHistoryLoading({ filter, setItems }: UseHistoryLoadingProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const startIndex = (page - 1) * PAGE_SIZE;
      const newItems = await generateHistoryBatch(startIndex, PAGE_SIZE);

      setItems(prev => {
        const existingIds = new Set(prev.map(item => item.id));
        const uniqueNewItems = newItems.filter(item => !existingIds.has(item.id));
        return [...prev, ...uniqueNewItems];
      });

      setHasMore(page < MAX_PAGES && newItems.length === PAGE_SIZE);
      setPage(prev => prev + 1);
      setIsInitialLoad(false);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasMore, page, setItems]);

  // フィルターが変更されたら状態をリセット
  useEffect(() => {
    setItems([]);
    setHasMore(true);
    setPage(1);
    setIsInitialLoad(true);
  }, [filter, setItems]);

  // 初回ロード
  useEffect(() => {
    if (isInitialLoad && hasMore) {
      loadMore();
    }
  }, [isInitialLoad, hasMore, loadMore]);

  return {
    isLoading,
    hasMore,
    loadMore,
    isInitialLoad,
  };
}