"use client";

import { useState } from "react";
import { TarotCardGrid } from "@/components/tarot/tarot-card-grid";
import { TarotCardList } from "@/components/tarot/tarot-card-list";
import { Button } from "@/components/ui/button";
import { Grid, List } from "lucide-react";
import { TarotCardDetail } from "@/types/tarot";
import { TarotCardDialog } from "@/components/tarot/tarot-card-dialog";
import { Footer } from "@/components/home/footer";
import { DecorativeShapes } from "@/components/decorative/shapes";

export default function CardsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCard, setSelectedCard] = useState<TarotCardDetail | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative py-24">
        <DecorativeShapes />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tarot-purple to-tarot-teal">
              タロットカード一覧
            </h1>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className="bg-tarot-purple/10 hover:bg-tarot-purple/20 text-tarot-purple"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
                className="bg-tarot-purple/10 hover:bg-tarot-purple/20 text-tarot-purple"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {viewMode === "grid" ? (
            <TarotCardGrid onCardClick={setSelectedCard} />
          ) : (
            <TarotCardList onCardClick={setSelectedCard} />
          )}

          <TarotCardDialog
            card={selectedCard}
            isOpen={!!selectedCard}
            onClose={() => setSelectedCard(null)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}