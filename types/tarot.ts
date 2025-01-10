export interface TarotCardType {
  id: number;
  name: string;
  image: string;
}

export interface TarotCardDetail {
  id: number;
  name: string;
  image: string;
  story: string;
  symbols: {
    name: string;
    description: string;
  }[];
  interpretations: {
    general: {
      keywords: {
        essence: string;
        positive: string[];
        negative: string[];
      };
      basic: string;
      reversed: {
        delay: string;
        attenuation: string;
        opposite: string;
        weakness: string;
        direction: string;
      };
    };
    love: {
      keywords: {
        essence: string;
        positive: string[];
        negative: string[];
      };
      basic: string;
      reversed: string;
    };
    work: {
      keywords: {
        essence: string;
        positive: string[];
        negative: string[];
      };
      basic: string;
      reversed: string;
    };
    relationships: {
      keywords: {
        essence: string;
        positive: string[];
        negative: string[];
      };
      basic: string;
      reversed: string;
    };
  };
  connections: {
    previous?: {
      id: number;
      name: string;
      description: string;
    };
    next?: {
      id: number;
      name: string;
      description: string;
    };
  };
}

export interface ChatSummary {
  title: string;
  category: 'love' | 'work' | 'health' | 'other';
  keywords: string[];
}

export interface ChatConclusion {
  summary: string;
  insights: string[];
  advice: string;
  nextSteps: string[];
}

export interface Message {
  role: "user" | "assistant";
  content: string;
  cards?: TarotCardType[];
  summary?: ChatSummary;
  conclusion?: ChatConclusion;
}