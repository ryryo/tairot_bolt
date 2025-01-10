"use client";

import { useState, useEffect } from "react";
import { HistoryEntry } from "@/types/history";

// ダミーデータを3つに増やす
const DUMMY_HISTORY: HistoryEntry[] = [
  {
    id: "1",
    date: "2024-02-20",
    category: "work",
    title: "キャリアの転換期における可能性",
    question: "今の仕事を続けるべきか、それとも新しい挑戦をするべきか迷っています。",
    initialResponse: "あなたの前には、新しい可能性への扉が開かれています。引いたカードは、あなたの持つ潜在能力と、それを活かすチャンスの到来を示唆しています。",
    cards: [
      { 
        id: 1,
        name: "魔術師", 
        image: "magician.jpg",
        interpretation: "スキルと創造性を活かすときです"
      },
      { 
        id: 10,
        name: "運命の輪", 
        image: "wheel.jpg",
        interpretation: "変化のチャンスが訪れています"
      },
      { 
        id: 17,
        name: "星", 
        image: "star.jpg",
        interpretation: "希望に向かって進む時期です"
      },
    ],
    followUps: [
      {
        question: "新しい挑戦をする際に、特に注意すべきことはありますか？",
        response: "慎重な準備と計画が重要です。急激な変化は避け、段階的なアプローチを心がけましょう。"
      },
      {
        question: "いつ頃が行動を起こすのに適切な時期でしょうか？",
        response: "運命の輪のカードが示すように、今後3ヶ月以内が変化に適した時期となりそうです。"
      }
    ],
    conclusion: {
      summary: "キャリアの転換期にあり、新しい可能性が開かれている状態です。",
      insights: [
        "現在の経験とスキルが、次のステップへの重要な資産となります",
        "変化への準備が整いつつあります",
        "直感的な判断が重要な役割を果たします"
      ],
      advice: "段階的な変化を心がけながら、新しい機会に対して前向きに取り組んでください。",
      nextSteps: [
        "具体的なキャリアプランの作成",
        "必要なスキルの棚卸しと習得計画の立案",
        "ネットワークの拡大と情報収集"
      ]
    },
    bookmarked: false,
    notes: ["転職を考えるきっかけとなった占い", "3ヶ月以内に行動を起こすことを検討"],
  },
  {
    id: "2",
    date: "2024-02-19",
    category: "love",
    title: "新しい出会いの可能性",
    question: "近い将来、運命的な出会いはありますか？",
    initialResponse: "カードは、あなたの周りに新しい出会いの機会が訪れることを示唆しています。",
    cards: [
      {
        id: 6,
        name: "恋人",
        image: "lovers.jpg",
        interpretation: "重要な出会いの予兆があります"
      },
      {
        id: 11,
        name: "正義",
        image: "justice.jpg",
        interpretation: "バランスの取れた関係が築けます"
      }
    ],
    followUps: [
      {
        question: "どのような場所で出会う可能性が高いですか？",
        response: "社交的な場所や、あなたの趣味に関連する活動の中での出会いが示唆されています。"
      }
    ],
    conclusion: {
      summary: "新しい出会いの機会が近づいています。",
      insights: [
        "オープンな心を持つことが重要です",
        "自然な出会いを大切にしましょう"
      ],
      advice: "焦らず、自然な流れに身を任せることをお勧めします。",
      nextSteps: [
        "社交の機会を増やす",
        "趣味の活動に積極的に参加する"
      ]
    },
    bookmarked: true,
    notes: ["前向きな気持ちになれた", "行動計画を立てる"]
  },
  {
    id: "3",
    date: "2024-02-18",
    category: "health",
    title: "健康管理と生活習慣の改善",
    question: "最近体調が優れません。改善のためのアドバイスをください。",
    initialResponse: "現在の体調不良は一時的なものですが、生活習慣の見直しが必要です。",
    cards: [
      {
        id: 14,
        name: "節制",
        image: "temperance.jpg",
        interpretation: "バランスの取れた生活が必要です"
      },
      {
        id: 9,
        name: "隠者",
        image: "hermit.jpg",
        interpretation: "内なる声に耳を傾けましょう"
      }
    ],
    followUps: [
      {
        question: "具体的にどのような生活習慣を改善すべきですか？",
        response: "睡眠時間の確保と規則正しい食事が特に重要です。"
      }
    ],
    conclusion: {
      summary: "心身のバランスを整えることが必要な時期です。",
      insights: [
        "休息の質を高めることが重要です",
        "規則正しい生活リズムを作りましょう"
      ],
      advice: "無理なく、少しずつ習慣を改善していくことをお勧めします。",
      nextSteps: [
        "就寝時間を固定する",
        "食事の時間を規則的にする",
        "軽い運動を取り入れる"
      ]
    },
    bookmarked: false,
    notes: ["生活習慣の見直しが必要"]
  }
];

export function useHistory() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    setHistory(DUMMY_HISTORY);
  }, []);

  const toggleBookmark = (id: string) => {
    setHistory(prev => 
      prev.map(entry => 
        entry.id === id 
          ? { ...entry, bookmarked: !entry.bookmarked }
          : entry
      )
    );
  };

  const addNote = (id: string, note: string) => {
    setHistory(prev =>
      prev.map(entry =>
        entry.id === id
          ? { ...entry, notes: [...(entry.notes || []), note] }
          : entry
      )
    );
  };

  return {
    history,
    toggleBookmark,
    addNote,
  };
}