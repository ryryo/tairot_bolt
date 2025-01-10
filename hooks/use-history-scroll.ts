"use client";

import { useRef, useEffect } from "react";
import { HistoryEntry } from "@/types/history";

interface UseHistoryScrollProps {
  items: HistoryEntry[];
  isInitialLoad: boolean;
}

export function useHistoryScroll({ items, isInitialLoad }: UseHistoryScrollProps) {
  const firstNewItemRef = useRef<HTMLDivElement>(null);
  const prevItemsLengthRef = useRef(items.length);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    if (isInitialLoad) {
      prevItemsLengthRef.current = items.length;
      return;
    }

    // 新しいアイテムが追加された場合
    if (items.length > prevItemsLengthRef.current && firstNewItemRef.current && !isScrollingRef.current) {
      isScrollingRef.current = true;

      // 新しく追加されたアイテムの最初の要素の位置を取得
      const firstNewItem = firstNewItemRef.current;
      const rect = firstNewItem.getBoundingClientRect();
      
      // ビューポートの上部から少し下にスクロール
      const targetPosition = window.scrollY + rect.top - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      setTimeout(() => {
        isScrollingRef.current = false;
        prevItemsLengthRef.current = items.length;
      }, 500);
    }
  }, [items.length, isInitialLoad]);

  return { 
    firstNewItemRef,
    prevItemsLength: prevItemsLengthRef.current
  };
}