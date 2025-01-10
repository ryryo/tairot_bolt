export interface HistoryEntry {
  id: string;
  date: string;
  category: 'love' | 'work' | 'health' | 'other';
  title: string;
  question: string;
  initialResponse: string;
  cards: Array<{
    id: number;
    name: string;
    image: string;
    interpretation: string;
  }>;
  followUps?: Array<{
    question: string;
    response: string;
  }>;
  conclusion?: {
    summary: string;
    insights: string[];
    advice: string;
    nextSteps: string[];
  };
  bookmarked: boolean;
  notes?: string[];
}