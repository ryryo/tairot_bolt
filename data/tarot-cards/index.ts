import { TarotCardType } from "@/types/tarot";
import { foolCardDetail, createDummyCardDetail } from "./card-details";

// 78枚のカードデータを生成
export const allCards = Array.from(
  { length: 78 },
  (_, i) => i === 0 ? foolCardDetail : createDummyCardDetail(i)
);

// 大アルカナと小アルカナを分離
export const cardGroups = {
  majorArcana: allCards.slice(0, 22),
  minorArcana: {
    wands: allCards.slice(22, 36),
    cups: allCards.slice(36, 50),
    swords: allCards.slice(50, 64),
    pentacles: allCards.slice(64, 78),
  },
};

export const suitTitles = {
  wands: "ワンドのスート",
  cups: "カップのスート",
  swords: "ソードのスート",
  pentacles: "ペンタクルのスート",
} as const;