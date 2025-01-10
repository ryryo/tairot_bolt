```tsx
"use client";

import { TabsContent } from "@/components/ui/tabs";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TarotCardDetail } from "@/types/tarot";

interface InterpretationsTabProps {
  card: TarotCardDetail;
}

export function InterpretationsTab({ card }: InterpretationsTabProps) {
  const categories = [
    { id: "general", label: "基本" },
    { id: "love", label: "恋愛" },
    { id: "work", label: "仕事" },
    { id: "relationships", label: "対人" },
  ];

  return (
    <TabsContent value="interpretations" className="mt-4">
      <Tabs defaultValue="general">
        <TabsList className="bg-gray-800">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => {
          const interpretation = card.interpretations[category.id as keyof typeof card.interpretations];
          return (
            <TabsContent key={category.id} value={category.id} className="mt-4">
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
          );
        })}
      </Tabs>
    </TabsContent>
  );
}
```