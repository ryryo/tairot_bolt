"use client";

import { useSearchParams } from "next/navigation";
import { ChatInterface } from "@/components/tarot/chat-interface";
import { TarotProvider } from "@/providers/tarot-provider";
import { ChatHeader } from "@/components/layout/chat-header";
import { DecorativeShapes } from "@/components/decorative/shapes";

function ReadingContent() {
  return (
    <div className="min-h-screen bg-white">
      <ChatHeader />
      <div className="relative pt-12">
        <DecorativeShapes />
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="relative">
            <ChatInterface />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReadingPage() {
  const searchParams = useSearchParams();
  const initialQuestion = searchParams.get("q") || "";

  return (
    <TarotProvider initialQuestion={initialQuestion}>
      <ReadingContent />
    </TarotProvider>
  );
}