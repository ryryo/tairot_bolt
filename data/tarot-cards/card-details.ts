import { TarotCardDetail } from "@/types/tarot";

// 愚者の詳細データ
export const foolCardDetail: TarotCardDetail = {
  id: 0,
  name: "愚者",
  image: "fool.jpg",
  story: "世界の始まりと終わりの境目に立つ愚者は、社会のルールから自由な、純粋な魂です。その存在には限りない可能性が秘められています。かつて宮廷では、道化師として真実を伝える大切な役目を担い、時に社会の常識を覆すトリックスターの役割を担っていました。",
  symbols: [
    {
      name: "白い太陽",
      description: "宇宙創造の源となる光を象徴する白い太陽は、愚者を祝福し、導く神聖なエネルギーです。"
    },
    {
      name: "白い犬",
      description: "古来より人類のパートナーである犬は、愚者の無意識、本能、そして純粋な忠誠心を象徴します。"
    }
  ],
  interpretations: {
    general: {
      keywords: {
        essence: "自由",
        positive: ["無限の可能性", "直感的な行動力", "新たな才能", "冒険の始まり", "好奇心"],
        negative: ["社会不適合", "現実が見えていない", "無責任", "無謀", "未熟"]
      },
      basic: "すべての始まりを告げる段階を示します。まだ何者でもない、そして何にでもなれる無限の可能性を秘めた状態です。",
      reversed: {
        delay: "新しい冒険や挑戦を始めるには、まだ時期尚早な状況です。",
        attenuation: "本来持っているはずの自由な発想や行動力が、様々な制約によって抑制されている状態です。",
        opposite: "自由や可能性を追求すべき時に、逆に制約や慎重さに縛られている状態です。",
        weakness: "愚者の持つ自由さが、単なる無秩序や無責任さとして表れている状態です。",
        direction: "エネルギーが拡散し、明確な方向性を見失っている状態です。"
      }
    },
    love: {
      keywords: {
        essence: "自由な恋愛",
        positive: ["新たな出会い", "心が躍る恋", "恋への冒険", "開放的な関係"],
        negative: ["浮気", "その場限りの恋", "真剣さが足りない"]
      },
      basic: "既存の価値観や周囲の目にとらわれない、自由な恋愛の可能性が開かれています。",
      reversed: "恋愛を始めるための心の準備がまだ整っていない状態です。"
    },
    work: {
      keywords: {
        essence: "自由な働き方",
        positive: ["新しいビジネス", "発明", "フリーランス", "創造力"],
        negative: ["無計画", "無責任", "不安定な事業"]
      },
      basic: "新しい仕事への挑戦や、従来の枠組みにとらわれない自由な働き方への転換のチャンスです。",
      reversed: "職務における無責任さや計画性の欠如が顕著になっています。"
    },
    relationships: {
      keywords: {
        essence: "純粋な交流",
        positive: ["個性の尊重", "束縛からの解放", "マイペース"],
        negative: ["孤立", "協調性がない", "責任感の欠如"]
      },
      basic: "既存の人間関係の枠を超えた、自由で純粋な交流が期待できる時期です。",
      reversed: "対人関係における自由さや純粋さが、かえって問題を引き起こしています。"
    }
  },
  connections: {
    next: {
      id: 1,
      name: "魔術師",
      description: "愚者が持つ無限の可能性と純粋な潜在能力を、魔術師は意識的な行動と実践的な技術によって現実世界に具現化していきます。"
    }
  }
};

// ダミーカードデータを生成する関数
export function createDummyCardDetail(id: number): TarotCardDetail {
  const name = `カード${id}`;
  return {
    id,
    name,
    image: `card_${id}.jpg`,
    story: `${name}のストーリー`,
    symbols: [
      { name: "シンボル1", description: "説明1" },
      { name: "シンボル2", description: "説明2" }
    ],
    interpretations: {
      general: {
        keywords: {
          essence: "基本的な意味",
          positive: ["ポジティブ1", "ポジティブ2"],
          negative: ["ネガティブ1", "ネガティブ2"]
        },
        basic: "基本的な解釈",
        reversed: {
          delay: "遅延の意味",
          attenuation: "減衰の意味",
          opposite: "反対の意味",
          weakness: "短所の意味",
          direction: "方向性の意味"
        }
      },
      love: {
        keywords: {
          essence: "恋愛の意味",
          positive: ["恋愛ポジティブ1"],
          negative: ["恋愛ネガティブ1"]
        },
        basic: "恋愛の基本的な解釈",
        reversed: "恋愛の逆位置の意味"
      },
      work: {
        keywords: {
          essence: "仕事の意味",
          positive: ["仕事ポジティブ1"],
          negative: ["仕事ネガティブ1"]
        },
        basic: "仕事の基本的な解釈",
        reversed: "仕事の逆位置の意味"
      },
      relationships: {
        keywords: {
          essence: "対人関係の意味",
          positive: ["対人ポジティブ1"],
          negative: ["対人ネガティブ1"]
        },
        basic: "対人関係の基本的な解釈",
        reversed: "対人関係の逆位置の意味"
      }
    },
    connections: {}
  };
}