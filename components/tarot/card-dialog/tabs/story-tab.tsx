```tsx
"use client";

import { TabsContent } from "@/components/ui/tabs";
import { TarotCardDetail } from "@/types/tarot";

interface StoryTabProps {
  card: TarotCardDetail;
}

export function StoryTab({ card }: StoryTabProps) {
  return (
    <TabsContent value="story" className="mt-4">
      <div className="prose prose-invert max-w-none">
        <p>{card.story}</p>
      </div>
    </TabsContent>
  );
}
```