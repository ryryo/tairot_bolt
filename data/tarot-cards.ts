import { TarotCardDetail } from "@/types/tarot";

// 愚者の詳細データ
const foolCardDetail: TarotCardDetail = {
  id: 0,
  name: "愚者",
  image: "fool.jpg",
  story: "世界の始まりと終わりの境目に立つ愚者は、社会のルールから自由な、純粋な魂です...",
  // 他の詳細データは省略
};

// ダミーカードデータを生成する関数
function createDummyCard(id: number): TarotCardDetail {
  const majorArcanaNames = [
    "魔術師", "女教皇", "女帝", "皇帝", "教皇", "恋人", "戦車", "力", "隠者",
    "運命の輪", "正義", "吊るされた男", "死神", "節制", "悪魔", "塔", "星",
    "月", "太陽", "審判", "世界"
  ];

  const suits = ["ワンド", "カップ", "ソード", "ペンタクル"];
  const numbers = ["エース", "2", "3", "4", "5", "6", "7", "8", "9", "10", "ページ", "ナイト", "クイーン", "キング"];

  let name: string;
  let image: string;

  if (id <= 21) {
    // メジャーアルカナ
    name = id === 0 ? "愚者" : majorArcanaNames[id - 1];
    image = `major_${id}.jpg`;
  } else {
    // マイナーアルカナ
    const suitIndex = Math.floor((id - 22) / 14);
    const numberIndex = (id - 22) % 14;
    name = `${suits[suitIndex]}の${numbers[numberIndex]}`;
    image = `minor_${suits[suitIndex]}_${numbers[numberIndex]}.jpg`;
  }

  return {
    id,
    name,
    image,
    story: `${name}のストーリー（準備中）`,
    symbols: [{ name: "準備中", description: "準備中" }],
    interpretations: {
      general: {
        keywords: {
          essence: "準備中",
          positive: ["準備中"],
          negative: ["準備中"]
        },
        basic: "準備中",
        reversed: {
          delay: "準備中",
          attenuation: "準備中",
          opposite: "準備中",
          weakness: "準備中",
          direction: "準備中"
        }
      },
      love: {
        keywords: {
          essence: "準備中",
          positive: ["準備中"],
          negative: ["準備中"]
        },
        basic: "準備中",
        reversed: "準備中"
      },
      work: {
        keywords: {
          essence: "準備中",
          positive: ["準備中"],
          negative: ["準備中"]
        },
        basic: "準備中",
        reversed: "準備中"
      },
      relationships: {
        keywords: {
          essence: "準備中",
          positive: ["準備中"],
          negative: ["準備中"]
        },
        basic: "準備中",
        reversed: "準備中"
      }
    },
    connections: {}
  };
}

// 78枚のカードデータを生成
export const allCards: TarotCardDetail[] = Array.from(
  { length: 78 },
  (_, i) => i === 0 ? foolCardDetail : createDummyCard(i)
);