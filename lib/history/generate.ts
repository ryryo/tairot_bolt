import { HistoryEntry } from "@/types/history";
import { generateHistoryId } from "./utils";
import { INITIAL_HISTORY_ENTRIES } from "./initial-data";

export async function generateHistoryBatch(startIndex: number, count: number): Promise<HistoryEntry[]> {
  // 実際のAPIコールを模擬するための遅延
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const timestamp = Date.now();
  
  return Array.from({ length: count }, (_, i) => {
    const globalIndex = startIndex + i;
    
    // 最初の3つのエントリーは固定データを使用
    if (globalIndex < INITIAL_HISTORY_ENTRIES.length) {
      return {
        ...INITIAL_HISTORY_ENTRIES[globalIndex],
        id: generateHistoryId(globalIndex, timestamp)
      };
    }

    // それ以降はランダムデータを生成
    const date = new Date();
    date.setDate(date.getDate() - globalIndex);
    
    return {
      id: generateHistoryId(globalIndex, timestamp),
      date: date.toISOString().split('T')[0],
      category: ['love', 'work', 'health', 'other'][Math.floor(Math.random() * 4)] as HistoryEntry["category"],
      title: `占い ${globalIndex + 1}`,
      question: "将来の展望について教えてください",
      initialResponse: "カードは新しい可能性を示唆しています...",
      cards: [
        {
          id: Math.floor(Math.random() * 78),
          name: "魔術師",
          image: "magician.jpg",
          interpretation: "新しい始まりを示唆しています"
        },
        {
          id: Math.floor(Math.random() * 78),
          name: "星",
          image: "star.jpg",
          interpretation: "希望に満ちた未来が待っています"
        }
      ],
      bookmarked: Math.random() > 0.7,
      notes: [`占いメモ ${globalIndex + 1}`],
      followUps: [
        {
          question: "具体的にどのような行動を取るべきですか？",
          response: "まずは小さな一歩から始めることをお勧めします..."
        }
      ],
      conclusion: {
        summary: "新しい機会が訪れる時期です",
        insights: [
          "自己の可能性を信じることが重要です",
          "周囲のサポートを活用しましょう"
        ],
        advice: "焦らず着実に前進することをお勧めします",
        nextSteps: [
          "目標を明確に設定する",
          "行動計画を立てる",
          "必要なスキルを磨く"
        ]
      }
    };
  });
}