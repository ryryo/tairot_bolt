"use client";

import { useState, useCallback, useEffect } from "react";
import { HistoryEntry } from "@/types/history";
import { generateRandomHistory } from "@/data/history/generate-history";

const PAGE_SIZE = 10;
const MAX_PAGES = 10;

export function useInfiniteHistory(filter: string = 'all') {
  const [items, setItems] = useState<HistoryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const startIndex = (page - 1) * PAGE_SIZE;
      const newItems = generateRandomHistory(startIndex, PAGE_SIZE);

      setItems(prev => {
        const existingIds = new Set(prev.map(item => item.id));
        const uniqueNewItems = newItems.filter(item => !existingIds.has(item.id));
        return [...prev, ...uniqueNewItems];
      });

      setHasMore(page < MAX_PAGES);
      setPage(prev => prev + 1);
      setIsInitialLoad(false);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasMore, page]);

  // フィルターが変更されたら状態をリセット
  useEffect(() => {
    setItems([]);
    setHasMore(true);
    setPage(1);
    setIsInitialLoad(true);
  }, [filter]);

  // 初回ロード
  useEffect(() => {
    if (items.length === 0 && hasMore) {
      loadMore();
    }
  }, [items.length, hasMore, loadMore]);

  const toggleBookmark = useCallback((id: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, bookmarked: !item.bookmarked } : item
      )
    );
  }, []);

  const filteredItems = items.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'bookmarked') return item.bookmarked;
    return item.category === filter;
  });

  return {
    items: filteredItems,
    isLoading,
    hasMore: hasMore && filteredItems.length < items.length * MAX_PAGES,
    loadMore,
    toggleBookmark,
    isInitialLoad,
  };
}