"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/auth/store";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { Footer } from "@/components/home/footer";
import { DarkToLightTransition } from "@/components/transitions";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    if (isAuthenticated) {
      setIsTransitioning(true);
    } else {
      setShowLoginDialog(true);
    }
  };

  const handleTransitionComplete = () => {
    router.push(`/tarot/reading?q=${encodeURIComponent(question)}`);
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <DarkToLightTransition
      isTriggered={isTransitioning}
      onComplete={handleTransitionComplete}
    >
      <div className="relative">
        <HeroSection
          question={question}
          showLoginDialog={showLoginDialog}
          onQuestionChange={setQuestion}
          onSubmit={handleSubmit}
          onLoginDialogClose={() => setShowLoginDialog(false)}
          onScrollToFeatures={scrollToFeatures}
          submitButtonRef={submitButtonRef}
        />
        <FeaturesSection />
        <Footer />
      </div>
    </DarkToLightTransition>
  );
}