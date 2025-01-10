import { TarotCardDetail } from "@/types/tarot";
import { MAJOR_ARCANA_NAMES, MINOR_ARCANA_SUITS, MINOR_ARCANA_NUMBERS } from "./constants";

export function getCardName(id: number): string {
  if (id === 0) return "愚者";
  if (id <= 21) return MAJOR_ARCANA_NAMES[id - 1];

  const suitIndex = Math.floor((id - 22) / 14);
  const numberIndex = (id - 22) % 14;
  const suit = Object.values(MINOR_ARCANA_SUITS)[suitIndex];
  const number = MINOR_ARCANA_NUMBERS[numberIndex];

  return `${suit}の${number}`;
}

export function getCardImage(id: number): string {
  return `card_${id}.jpg`;
}

export function createDummyCardDetail(id: number): TarotCardDetail {
  const name = getCardName(id);
  return {
    id,
    name,
    image: getCardImage(id),
    story: `${name}のストーリー（準備中）`,
    symbols: [
      { name: "準備中", description: "準備中" }
    ],
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