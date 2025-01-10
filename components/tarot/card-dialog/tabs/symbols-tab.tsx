```tsx
"use client";

import { TabsContent } from "@/components/ui/tabs";
import { TarotCardDetail } from "@/types/tarot";

interface SymbolsTabProps {
  card: TarotCardDetail;
}

export function SymbolsTab({ card }: SymbolsTabProps) {
  return (
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
  );
}
```