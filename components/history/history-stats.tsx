"use client";

import { Card } from "@/components/ui/card";
import { HistoryEntry } from "@/types/history";
import { PieChart, Calendar, BookmarkIcon } from "lucide-react";
import { useHistoryStats } from "@/hooks/use-history-stats";

const CATEGORY_LABELS = {
  love: "恋愛",
  work: "仕事",
  health: "健康",
  other: "その他",
} as const;

interface HistoryStatsProps {
  history: HistoryEntry[];
}

export function HistoryStats({ history }: HistoryStatsProps) {
  const {
    totalReadings,
    bookmarkedReadings,
    mostFrequentCategory,
    categoryPercentages,
  } = useHistoryStats(history);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <Card className="p-4 bg-gradient-to-br from-tarot-purple/5 to-tarot-teal/5">
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-tarot-purple" />
          <div>
            <p className="text-sm text-gray-600">総占い回数</p>
            <p className="text-2xl font-bold">{totalReadings}回</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-gradient-to-br from-tarot-purple/5 to-tarot-teal/5">
        <div className="flex items-center gap-3">
          <BookmarkIcon className="w-5 h-5 text-tarot-purple" />
          <div>
            <p className="text-sm text-gray-600">ブックマーク</p>
            <p className="text-2xl font-bold">{bookmarkedReadings}件</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-gradient-to-br from-tarot-purple/5 to-tarot-teal/5">
        <div className="flex items-center gap-3">
          <PieChart className="w-5 h-5 text-tarot-purple" />
          <div>
            <p className="text-sm text-gray-600">よく占うテーマ</p>
            <p className="text-2xl font-bold">
              {mostFrequentCategory !== "none" ? CATEGORY_LABELS[mostFrequentCategory as keyof typeof CATEGORY_LABELS] : "なし"}
              {mostFrequentCategory !== "none" && categoryPercentages[mostFrequentCategory] && 
                <span className="text-sm text-gray-500 ml-2">
                  {categoryPercentages[mostFrequentCategory]}%
                </span>
              }
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}