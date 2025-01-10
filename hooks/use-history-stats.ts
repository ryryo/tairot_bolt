"use client";

import { useMemo } from "react";
import { HistoryEntry } from "@/types/history";

export function useHistoryStats(history: HistoryEntry[]) {
  return useMemo(() => {
    // 総占い回数
    const totalReadings = history.length;

    // ブックマーク数
    const bookmarkedReadings = history.filter(entry => entry.bookmarked).length;
    
    // カテゴリー別の集計
    const categoryStats = history.reduce((acc, entry) => {
      acc[entry.category] = (acc[entry.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // 最も多いカテゴリーを取得
    let mostFrequentCategory = "none";
    let maxCount = 0;

    Object.entries(categoryStats).forEach(([category, count]) => {
      if (count > maxCount) {
        maxCount = count;
        mostFrequentCategory = category;
      }
    });

    // カテゴリー別の割合を計算
    const categoryPercentages = Object.entries(categoryStats).reduce((acc, [category, count]) => {
      acc[category] = Math.round((count / totalReadings) * 100);
      return acc;
    }, {} as Record<string, number>);

    return {
      totalReadings,
      bookmarkedReadings,
      mostFrequentCategory: totalReadings > 0 ? mostFrequentCategory : "none",
      categoryStats,
      categoryPercentages,
    };
  }, [history]);
}