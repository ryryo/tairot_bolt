import { HistoryEntry } from "@/types/history";
import { INITIAL_HISTORY_ENTRIES } from "./dummy-data";
import {
  generateHistoryId,
  generateHistoryDate,
  generateRandomCard,
  getRandomCategory,
} from "./utils";

export function generateRandomHistory(startIndex: number, count: number): HistoryEntry[] {
  const timestamp = Date.now();

  return Array.from({ length: count }, (_, i) => {
    const globalIndex = startIndex + i;
    
    // 最初の3つのエントリーは固定データを使用
    if (globalIndex < INITIAL_HISTORY_ENTRIES.length) {
      const entry = INITIAL_HISTORY_ENTRIES[globalIndex];
      // 固定データでもIDは一意になるように生成
      return {
        ...entry,
        id: generateHistoryId(globalIndex, timestamp)
      };
    }

    // それ以降はランダムデータを生成
    return {
      id: generateHistoryId(globalIndex, timestamp),
      date: generateHistoryDate(globalIndex),
      category: getRandomCategory(),
      title: `占い ${globalIndex + 1}`,
      question: "将来についての質問です。",
      initialResponse: "カードが示す道筋に従って、一歩ずつ前進していくことをお勧めします。",
      cards: [
        generateRandomCard(globalIndex * 2),
        generateRandomCard(globalIndex * 2 + 1)
      ],
      bookmarked: Math.random() > 0.7,
      notes: [`メモ ${globalIndex + 1}`],
    };
  });
}