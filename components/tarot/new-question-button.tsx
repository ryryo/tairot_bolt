"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export function NewQuestionButton() {
  const router = useRouter();

  const handleNewQuestion = () => {
    router.push('/');
  };

  return (
    <Button
      onClick={handleNewQuestion}
      className="bg-tarot-purple hover:bg-tarot-purple/90 text-white"
    >
      <Sparkles className="mr-2 h-4 w-4" />
      新しい質問
    </Button>
  );
}