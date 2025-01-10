"use client";

export function Starfield() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-tarot-purple/30 via-black to-black opacity-50" />
      <div 
        className="absolute inset-0" 
        style={{ 
          background: "radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px)",
          backgroundSize: "550px 550px",
          animation: "stars 3s linear infinite"
        }} 
      />
    </>
  );
}