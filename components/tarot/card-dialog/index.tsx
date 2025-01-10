"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TarotCardDetail } from "@/types/tarot";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TarotCardDialogProps {
  card: TarotCardDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export function TarotCardDialog({ card, isOpen, onClose }: TarotCardDialogProps) {
  if (!card) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{card.name}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-[300px,1fr] gap-6">
          <div className="relative aspect-[2/3] w-full bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">{card.name}</span>
          </div>

          <div className="space-y-6">
            <Tabs defaultValue="story" className="w-full">
              <TabsList className="grid grid-cols-4 bg-gray-800">
                <TabsTrigger value="story">物語</TabsTrigger>
                <TabsTrigger value="symbols">シンボル</TabsTrigger>
                <TabsTrigger value="interpretations">解釈</TabsTrigger>
                <TabsTrigger value="connections">つながり</TabsTrigger>
              </TabsList>

              <TabsContent value="story" className="mt-4">
                <div className="prose prose-invert max-w-none">
                  <p>{card.story}</p>
                </div>
              </TabsContent>

              <TabsContent value="symbols" className="mt-4">
                <div className="space-y-4">
                  {card.symbols?.map((symbol, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-bold mb-2">{symbol.name}</h4>
                      <p className="text-gray-300">{symbol.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="interpretations" className="mt-4">
                <Tabs defaultValue="general">
                  <TabsList className="bg-gray-800">
                    <TabsTrigger value="general">基本</TabsTrigger>
                    <TabsTrigger value="love">恋愛</TabsTrigger>
                    <TabsTrigger value="work">仕事</TabsTrigger>
                    <TabsTrigger value="relationships">対人</TabsTrigger>
                  </TabsList>

                  {Object.entries(card.interpretations).map(([key, interpretation]) => (
                    <TabsContent key={key} value={key} className="mt-4">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-bold mb-2">キーワード</h4>
                          <p className="text-purple-400">{interpretation.keywords.essence}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-2">基本的な解釈</h4>
                          <p className="text-gray-300">{interpretation.basic}</p>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </TabsContent>

              <TabsContent value="connections" className="mt-4">
                <div className="space-y-6">
                  {card.connections?.previous && (
                    <div>
                      <h4 className="text-lg font-bold mb-2">
                        前のカード: {card.connections.previous.name}
                      </h4>
                      <p className="text-gray-300">{card.connections.previous.description}</p>
                    </div>
                  )}
                  {card.connections?.next && (
                    <div>
                      <h4 className="text-lg font-bold mb-2">
                        次のカード: {card.connections.next.name}
                      </h4>
                      <p className="text-gray-300">{card.connections.next.description}</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}