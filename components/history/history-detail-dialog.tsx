"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HistoryEntry } from "@/types/history";
import { ChatCardsDisplay } from "@/components/tarot/chat/cards-display";
import { Conclusion } from "@/components/tarot/chat/conclusion";

interface HistoryDetailDialogProps {
  entry: HistoryEntry | null;
  isOpen: boolean;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

const CATEGORY_COLORS = {
  love: "bg-pink-100 text-pink-800 hover:bg-pink-100",
  work: "bg-blue-100 text-blue-800 hover:bg-blue-100",
  health: "bg-green-100 text-green-800 hover:bg-green-100",
  other: "bg-purple-100 text-purple-800 hover:bg-purple-100",
} as const;

export function HistoryDetailDialog({
  entry,
  isOpen,
  onClose,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: HistoryDetailDialogProps) {
  if (!entry) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">
              {entry.title}
            </DialogTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={onPrevious}
                disabled={!hasPrevious}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={onNext}
                disabled={!hasNext}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>{entry.date}</span>
            <Badge 
              className={CATEGORY_COLORS[entry.category]}
              variant="secondary"
            >
              {entry.category}
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-8 mt-4">
          {/* 初回の質問と回答 */}
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">質問</h3>
              <p className="text-gray-600">{entry.question}</p>
            </div>

            <ChatCardsDisplay cards={entry.cards} />

            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-medium mb-2">回答</h3>
              <p className="text-gray-600">{entry.initialResponse}</p>
            </div>
          </div>

          {/* 追加の質問と回答 */}
          {entry.followUps?.map((followUp, index) => (
            <div key={index} className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">追加質問 {index + 1}</h3>
                <p className="text-gray-600">{followUp.question}</p>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <h3 className="font-medium mb-2">回答</h3>
                <p className="text-gray-600">{followUp.response}</p>
              </div>
            </div>
          ))}

          {/* まとめ */}
          {entry.conclusion && (
            <Conclusion conclusion={entry.conclusion} />
          )}

          {/* メモ */}
          {entry.notes && entry.notes.length > 0 && (
            <div className="space-y-2">
              <h3 className="font-medium">メモ</h3>
              {entry.notes.map((note, index) => (
                <div key={index} className="p-2 bg-gray-50 rounded text-sm text-gray-600">
                  {note}
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}