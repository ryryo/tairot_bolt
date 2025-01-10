export const MAJOR_ARCANA_NAMES = [
  "魔術師", "女教皇", "女帝", "皇帝", "教皇", "恋人", "戦車", "力", "隠者",
  "運命の輪", "正義", "吊るされた男", "死神", "節制", "悪魔", "塔", "星",
  "月", "太陽", "審判", "世界"
] as const;

export const MINOR_ARCANA_SUITS = {
  wands: "ワンド",
  cups: "カップ",
  swords: "ソード",
  pentacles: "ペンタクル"
} as const;

export const MINOR_ARCANA_NUMBERS = [
  "エース", "2", "3", "4", "5", "6", "7", "8", "9", "10",
  "ページ", "ナイト", "クイーン", "キング"
] as const;

export const SUIT_TITLES = {
  wands: "ワンドのスート",
  cups: "カップのスート",
  swords: "ソードのスート",
  pentacles: "ペンタクルのスート"
} as const;