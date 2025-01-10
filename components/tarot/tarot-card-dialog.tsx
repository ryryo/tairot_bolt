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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tarot-purple to-tarot-teal">
            {card.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-[300px,1fr] gap-6">
          <div className="relative aspect-[2/3] w-full bg-gradient-to-br from-tarot-purple/5 to-tarot-teal/5 rounded-lg border border-tarot-purple/20 flex items-center justify-center">
            <span className="text-gray-600">{card.name}</span>
          </div>

          <div className="space-y-6">
            <Tabs defaultValue="story" className="w-full">
              <TabsList className="grid grid-cols-4 bg-gray-100">
                <TabsTrigger value="story">物語</TabsTrigger>
                <TabsTrigger value="symbols">シンボル</TabsTrigger>
                <TabsTrigger value="interpretations">解釈</TabsTrigger>
                <TabsTrigger value="connections">つながり</TabsTrigger>
              </TabsList>

              <TabsContent value="story" className="mt-4">
                <div className="prose max-w-none">
                  <p className="text-gray-600">{card.story}</p>
                </div>
              </TabsContent>

              <TabsContent value="symbols" className="mt-4">
                <div className="space-y-4">
                  {card.symbols?.map((symbol, index) => (
                    <div key={index} className="p-4 bg-gradient-to-br from-tarot-purple/5 to-tarot-teal/5 rounded-lg border border-tarot-purple/20">
                      <h4 className="text-lg font-bold mb-2 text-gray-900">{symbol.name}</h4>
                      <p className="text-gray-600">{symbol.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="interpretations" className="mt-4">
                <Tabs defaultValue="general">
                  <TabsList className="bg-gray-100">
                    <TabsTrigger value="general">基本</TabsTrigger>
                    <TabsTrigger value="love">恋愛</TabsTrigger>
                    <TabsTrigger value="work">仕事</TabsTrigger>
                    <TabsTrigger value="relationships">対人</TabsTrigger>
                  </TabsList>

                  {["general", "love", "work", "relationships"].map((category) => (
                    <TabsContent key={category} value={category} className="mt-4">
                      <div className="space-y-4">
                        <div className="p-4 bg-gradient-to-br from-tarot-purple/5 to-tarot-orange/5 rounded-lg border border-tarot-purple/20">
                          <h4 className="text-lg font-bold mb-2 text-gray-900">キーワード</h4>
                          <p className="text-tarot-purple">
                            {card.interpretations[category as keyof typeof card.interpretations]?.keywords.essence}
                          </p>
                        </div>
                        <div className="p-4 bg-gradient-to-br from-tarot-teal/5 to-tarot-orange/5 rounded-lg border border-tarot-teal/20">
                          <h4 className="text-lg font-bold mb-2 text-gray-900">基本的な解釈</h4>
                          <p className="text-gray-600">
                            {card.interpretations[category as keyof typeof card.interpretations]?.basic}
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </TabsContent>

              <TabsContent value="connections" className="mt-4">
                <div className="space-y-6">
                  {card.connections?.previous && (
                    <div className="p-4 bg-gradient-to-br from-tarot-purple/5 to-tarot-teal/5 rounded-lg border border-tarot-purple/20">
                      <h4 className="text-lg font-bold mb-2 text-gray-900">
                        前のカード: {card.connections.previous.name}
                      </h4>
                      <p className="text-gray-600">{card.connections.previous.description}</p>
                    </div>
                  )}
                  {card.connections?.next && (
                    <div className="p-4 bg-gradient-to-br from-tarot-teal/5 to-tarot-orange/5 rounded-lg border border-tarot-teal/20">
                      <h4 className="text-lg font-bold mb-2 text-gray-900">
                        次のカード: {card.connections.next.name}
                      </h4>
                      <p className="text-gray-600">{card.connections.next.description}</p>
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