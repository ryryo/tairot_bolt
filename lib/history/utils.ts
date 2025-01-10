// ユニークなIDを生成する関数
export function generateHistoryId(index: number, timestamp: number): string {
  return `history_${timestamp}_${index}`;
}