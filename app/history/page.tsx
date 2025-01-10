"use client";

import { useState } from "react";
import { InfiniteHistoryList } from "@/components/history/infinite-history-list";
import { HistoryFilters } from "@/components/history/history-filters";
import { HistoryStats } from "@/components/history/history-stats";
import { DecorativeShapes } from "@/components/decorative/shapes";
import { useInfiniteHistory } from "@/hooks/use-infinite-history";

export default function HistoryPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const { items } = useInfiniteHistory(activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative py-24">
        <DecorativeShapes />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-tarot-purple to-tarot-teal">
              占い履歴
            </h1>
            <p className="text-gray-600 mb-8">
              過去の占い結果を振り返り、時間の流れとともに見える変化を感じてください
            </p>

            <HistoryStats history={items} />
            <HistoryFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
            <InfiniteHistoryList filter={activeFilter} />
          </div>
        </div>
      </div>
    </div>
  );
}