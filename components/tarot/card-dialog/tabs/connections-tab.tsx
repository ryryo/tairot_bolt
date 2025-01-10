```tsx
"use client";

import { TabsContent } from "@/components/ui/tabs";
import { TarotCardDetail } from "@/types/tarot";

interface ConnectionsTabProps {
  card: TarotCardDetail;
}

export function ConnectionsTab({ card }: ConnectionsTabProps) {
  return (
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
  );
}
```