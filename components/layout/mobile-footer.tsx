"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { mobileNavigation } from "@/config/navigation";

export function MobileFooter() {
  const pathname = usePathname();
  const [animatingIcon, setAnimatingIcon] = useState<string | null>(null);

  const handleIconClick = (name: string) => {
    setAnimatingIcon(name);
    // アニメーション終了後にリセット
    setTimeout(() => setAnimatingIcon(null), 1000);
  };

  return (
    <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <nav className="flex justify-around items-center h-16">
        {mobileNavigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          const isAnimating = animatingIcon === item.name;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full transition-colors duration-300",
                isActive ? "text-tarot-purple" : "text-gray-500"
              )}
              onClick={() => handleIconClick(item.name)}
            >
              <div className="relative">
                <Icon 
                  className={cn(
                    "w-6 h-6 transition-transform duration-300",
                    isAnimating && item.animation,
                    isAnimating && "animate-bounce"
                  )} 
                />
                {isAnimating && (
                  <div className="absolute inset-0 animate-ping-once">
                    <Icon className="w-6 h-6 text-tarot-purple/50" />
                  </div>
                )}
              </div>
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}