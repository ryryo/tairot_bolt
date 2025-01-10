"use client";

export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="relative">
        {/* 外側のリング */}
        <div className="absolute inset-0 w-12 h-12">
          <div className="w-full h-full rounded-full border-4 border-tarot-purple/20 border-t-tarot-purple animate-spin" />
        </div>
        
        {/* 内側のリング */}
        <div className="absolute inset-0 w-12 h-12 scale-75">
          <div className="w-full h-full rounded-full border-4 border-tarot-teal/20 border-t-tarot-teal animate-spin-reverse" />
        </div>

        {/* 中心の装飾 */}
        <div className="absolute inset-0 w-12 h-12 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-tarot-purple to-tarot-teal animate-pulse" />
        </div>
      </div>
    </div>
  );
}