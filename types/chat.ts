export interface ChatSummary {
  title: string;
  category: 'love' | 'work' | 'health' | 'other';
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