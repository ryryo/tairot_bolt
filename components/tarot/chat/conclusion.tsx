"use client";

import { ChatConclusion } from "@/types/chat";
import { Card } from "@/components/ui/card";
import { CheckCircle, Lightbulb, ArrowRight } from "lucide-react";

interface ConclusionProps {
  conclusion: ChatConclusion;
}

export function Conclusion({ conclusion }: ConclusionProps) {
  return (
    <Card className="p-6 bg-gradient-to-br from-tarot-purple/5 to-tarot-teal/5 border-tarot-purple/20">
      <h3 className="text-xl font-semibold mb-4">占いのまとめ</h3>
      
      <div className="space-y-6">
        <div>
          <p className="text-gray-700 leading-relaxed">{conclusion.summary}</p>
        </div>

        <div>
          <h4 className="flex items-center gap-2 text-lg font-medium mb-2">
            <Lightbulb className="w-5 h-5 text-tarot-purple" />
            重要な気づき
          </h4>
          <ul className="space-y-2">
            {conclusion.insights.map((insight, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600">
                <CheckCircle className="w-4 h-4 mt-1 text-tarot-teal" />
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-2">アドバイス</h4>
          <p className="text-gray-700">{conclusion.advice}</p>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-2">次のステップ</h4>
          <ul className="space-y-2">
            {conclusion.nextSteps.map((step, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600">
                <ArrowRight className="w-4 h-4 mt-1 text-tarot-orange" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}