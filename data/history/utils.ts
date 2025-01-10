import { HistoryEntry } from "@/types/history";

// ユニークなIDを生成する関数
export function generateHistoryId(index: number, timestamp: number): string {
  return `history_${timestamp}_${index}`;
}

// 日付を生成する関数
export function generateHistoryDate(index: number): string {
  const date = new Date();
  date.setDate(date.getDate() - index);
  return date.toISOString().split('T')[0];
}

// ランダムなカードを生成する関数
export function generateRandomCard(index: number) {
  const cardNames = ["魔術師", "女教皇", "女帝", "皇帝", "教皇", "恋人", "戦車", "力", "隠者"];
  const cardId = Math.floor(Math.random() * 78);
  const cardName = cardNames[Math.floor(Math.random() * cardNames.length)];
  
  return {
    id: cardId,
    name: cardName,
    image: `card_${cardId}.jpg`,
    interpretation: `${cardName}の解釈です。`
  };
}

// ランダムなカテゴリーを選択する関数
export function getRandomCategory(): HistoryEntry["category"] {
  const categories: HistoryEntry["category"][] = ["love", "work", "health", "other"];
  return categories[Math.floor(Math.random() * categories.length)];
}