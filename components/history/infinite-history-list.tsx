"use client";

import { useState } from "react";
import { HistoryEntry } from "@/types/history";
import { HistoryDetailDialog } from "./history-detail-dialog";
import { useInfiniteHistory } from "@/hooks/use-infinite-history";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { HistoryCard } from "./history-card";
import { useHistoryNavigation } from "@/hooks/use-history-navigation";

interface InfiniteHistoryListProps {
  filter: string;
}

export function InfiniteHistoryList({ filter }: InfiniteHistoryListProps) {
  const { 
    items, 
    isLoading, 
    hasMore, 
    loadMore,
    toggleBookmark,
    isInitialLoad 
  } = useInfiniteHistory(filter);

  const [selectedEntry, setSelectedEntry] = useState<HistoryEntry | null>(null);

  const {
    handlePrevious,
    handleNext,
    hasPrevious,
    hasNext
  } = useHistoryNavigation({
    items,
    selectedEntry,
    setSelectedEntry
  });

  // Intersection Observer を使用して無限スクロールを実装
  const observerRef = (node: HTMLDivElement | null) => {
    if (!node) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  };

  return (
    <>
      <div className="space-y-4">
        {items.map((entry) => (
          <HistoryCard
            key={entry.id}
            entry={entry}
            onSelect={() => setSelectedEntry(entry)}
            onBookmarkToggle={() => toggleBookmark(entry.id)}
          />
        ))}
        
        {(hasMore || isLoading) && (
          <div 
            ref={observerRef} 
            className="h-20 flex items-center justify-center"
          >
            {isLoading && <LoadingSpinner />}
          </div>
        )}

        {!hasMore && items.length > 0 && (
          <div className="text-center text-gray-500 py-4">
            これ以上の履歴はありません
          </div>
        )}

        {!isLoading && items.length === 0 && (
          <div className="text-center text-gray-500 py-4">
            履歴がありません
          </div>
        )}
      </div>

      <HistoryDetailDialog
        entry={selectedEntry}
        isOpen={!!selectedEntry}
        onClose={() => setSelectedEntry(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
      />
    </>
  );
}