"use client";

import { useCallback, useEffect } from "react";
import { useHistoryState } from "./use-history-state";
import { useHistoryLoading } from "./use-history-loading";
import { useHistoryFilter } from "./use-history-filter";

const PAGE_SIZE = 10;
const MAX_PAGES = 10;

export function useInfiniteHistory(filter: string = 'all') {
  const { items, setItems } = useHistoryState();
  const { filteredItems } = useHistoryFilter(items, filter);
  const { 
    isLoading, 
    hasMore, 
    page,
    isInitialLoad,
    startLoading,
    finishLoading,
    setHasMore,
    setPage,
    resetLoadingState
  } = useHistoryLoading(MAX_PAGES);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;

    startLoading();
    try {
      const startIndex = (page - 1) * PAGE_SIZE;
      const { generateHistoryBatch } = await import('@/lib/history');
      const newItems = await generateHistoryBatch(startIndex, PAGE_SIZE);

      setItems(prev => {
        const existingIds = new Set(prev.map(item => item.id));
        const uniqueNewItems = newItems.filter(item => !existingIds.has(item.id));
        return [...prev, ...uniqueNewItems];
      });

      setHasMore(page < MAX_PAGES);
      setPage(prev => prev + 1);
    } finally {
      finishLoading();
    }
  }, [isLoading, hasMore, page, startLoading, finishLoading, setHasMore, setPage, setItems]);

  const toggleBookmark = useCallback((id: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, bookmarked: !item.bookmarked } : item
      )
    );
  }, [setItems]);

  useEffect(() => {
    setItems([]);
    resetLoadingState();
  }, [filter, setItems, resetLoadingState]);

  useEffect(() => {
    if (items.length === 0 && hasMore) {
      loadMore();
    }
  }, [items.length, hasMore, loadMore]);

  return {
    items: filteredItems,
    isLoading,
    hasMore,
    loadMore,
    toggleBookmark,
    isInitialLoad,
  };
}