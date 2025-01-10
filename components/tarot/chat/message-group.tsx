import { Message } from "@/types/tarot";
import { ChatMessage } from "./message";
import { ChatCardsDisplay } from "./cards-display";

interface MessageGroupProps {
  message: Message;
}

export function MessageGroup({ message }: MessageGroupProps) {
  if (message.role === "user") {
    return <ChatMessage message={message} />;
  }

  return (
    <div className="space-y-4">
      {message.cards && <ChatCardsDisplay cards={message.cards} />}
      <ChatMessage message={message} />
    </div>
  );
}