"use client";

import { useState, useCallback } from "react";

export function useHistoryLoading(maxPages: number) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const finishLoading = useCallback(() => {
    setIsLoading(false);
    setIsInitialLoad(false);
  }, []);

  const resetLoadingState = useCallback(() => {
    setHasMore(true);
    setPage(1);
    setIsInitialLoad(true);
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    hasMore,
    page,
    isInitialLoad,
    startLoading,
    finishLoading,
    setHasMore,
    setPage,
    resetLoadingState,
  };
}