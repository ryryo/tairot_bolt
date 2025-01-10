"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { headerNavigation } from "@/config/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="hidden md:flex justify-center">
          <nav>
            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
              {headerNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative block px-3 py-2 transition",
                      pathname === item.href
                        ? "text-tarot-purple"
                        : "hover:text-tarot-purple"
                    )}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-tarot-purple/0 via-tarot-purple/40 to-tarot-purple/0" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}