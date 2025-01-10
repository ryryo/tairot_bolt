"use client";

import { Sparkles, ChevronDown } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { Textarea } from "@/components/ui/textarea";
import { LoginDialog } from "@/components/auth/login-dialog";
import { AuthDebugBox } from "@/components/auth/debug-box";
import { Starfield } from "@/components/decorative/starfield";
import { AnimatedShapes } from "@/components/decorative/animated-shapes";

interface HeroSectionProps {
  question: string;
  showLoginDialog: boolean;
  onQuestionChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onLoginDialogClose: () => void;
  onScrollToFeatures: () => void;
  submitButtonRef: React.RefObject<HTMLButtonElement>;
}

export function HeroSection({
  question,
  showLoginDialog,
  onQuestionChange,
  onSubmit,
  onLoginDialogClose,
  onScrollToFeatures,
  submitButtonRef
}: HeroSectionProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      onSubmit(e);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden snap-start">
      <Starfield />
      <AnimatedShapes />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wider">
            めちゃんこタロット
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            AIが導く、あなたの運命の道筋
          </p>
        </div>

        <form onSubmit={onSubmit} className="w-full max-w-lg space-y-4">
          <div className="relative">
            <Textarea
              value={question}
              onChange={(e) => onQuestionChange(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="あなたの質問を入力してください..."
              className="min-h-[120px] bg-white/10 text-white placeholder:text-gray-400 border-gray-800 focus:border-tarot-purple"
            />
            <div className="absolute right-2 bottom-2 text-xs text-gray-400">
              Ctrl + Enter で送信
            </div>
          </div>
          <GradientButton
            type="submit"
            className="w-full"
            disabled={!question.trim()}
            ref={submitButtonRef}
          >
            <Sparkles className="mr-2 h-4 w-4" />
            占いを始める
          </GradientButton>
        </form>

        <AuthDebugBox />

        <LoginDialog
          isOpen={showLoginDialog}
          onClose={onLoginDialogClose}
          redirectPath="/tarot/reading"
          initialQuestion={question}
        />

        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" 
          onClick={onScrollToFeatures}
        >
          <div className="text-gray-400 text-sm flex flex-col items-center gap-2">
            <span>詳細を見る</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}