export interface TarotCardProps {
  card: {
    id: number;
    name: string;
    image: string;
  };
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  showName?: boolean;
  className?: string;
}

export interface CardSectionProps {
  title: string;
  cards: Array<{
    id: number;
    name: string;
    image: string;
  }>;
  onCardClick: (card: any) => void;
  showSingleCard?: boolean;
}