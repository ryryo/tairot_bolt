"use client";

import { Star, Brain, MessageCircle } from "lucide-react";
import { DecorativeShapes } from "@/components/decorative/shapes";

export function FeaturesSection() {
  return (
    <div id="features" className="bg-white text-tarot-black py-24 relative">
      <DecorativeShapes />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-tarot-purple to-tarot-teal">
          めちゃんこタロットの特徴
        </h2>

        <div className="space-y-24">
          <Feature
            icon={<Star className="w-5 h-5 text-tarot-purple" />}
            title="直感的な操作"
            description="質問を入力するだけで、すぐに占いを始められます。複雑な手順は一切必要ありません。"
          />

          <Feature
            icon={<Brain className="w-5 h-5 text-tarot-teal" />}
            title="AIによる解釈"
            description="最新のAI技術により、タロットカードの意味を深く理解し、的確なアドバイスを提供します。"
          />

          <Feature
            icon={<MessageCircle className="w-5 h-5 text-tarot-orange" />}
            title="対話型占い"
            description="結果について気になることがあれば、追加の質問も可能。より深い理解を得ることができます。"
          />
        </div>
      </div>
    </div>
  );
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-tarot-black flex items-center gap-3">
          {icon} {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      <div className="bg-gradient-to-br from-tarot-purple/5 to-tarot-teal/5 rounded-lg p-6 aspect-video flex items-center justify-center">
        <span className="text-gray-400">イメージ準備中</span>
      </div>
    </div>
  );
}