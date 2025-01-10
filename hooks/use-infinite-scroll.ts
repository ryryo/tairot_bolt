"use client";

import { useRef, useCallback, useEffect } from "react";

interface UseInfiniteScrollProps {
  onIntersect: () => void;
  isLoading: boolean;
  hasMore: boolean;
  rootMargin?: string;
  threshold?: number;
}

export function useInfiniteScroll({
  onIntersect,
  isLoading,
  hasMore,
  rootMargin = "100px",
  threshold = 0.1
}: UseInfiniteScrollProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isLoadingRef = useRef(isLoading);
  const hasMoreRef = useRef(hasMore);
  const isIntersectingRef = useRef(false);

  useEffect(() => {
    isLoadingRef.current = isLoading;
    hasMoreRef.current = hasMore;
  }, [isLoading, hasMore]);

  const setTargetRef = useCallback((node: HTMLDivElement | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    if (!node) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        // 交差状態を追跡
        isIntersectingRef.current = entry.isIntersecting;

        if (
          entry.isIntersecting && 
          hasMoreRef.current && 
          !isLoadingRef.current &&
          !isIntersectingRef.current // 前回の交差処理が完了していることを確認
        ) {
          onIntersect();
        }
      },
      { rootMargin, threshold }
    );

    observerRef.current.observe(node);
  }, [onIntersect, rootMargin, threshold]);

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { setTargetRef };
}