import { Sparkles, History, Library } from "lucide-react";
import { IconType } from "@/types/icon";

export const headerNavigation = [
  { name: "占う", href: "/" },
  { name: "履歴", href: "/history" },
  { name: "カード一覧", href: "/tarot/cards" },
] as const;

export const mobileNavigation = [
  { 
    name: "占う", 
    href: "/",
    icon: Sparkles,
    animation: "animate-sparkle"
  },
  { 
    name: "履歴", 
    href: "/history",
    icon: History,
    animation: "animate-rotate"
  },
  { 
    name: "カード", 
    href: "/tarot/cards",
    icon: Library,
    animation: "animate-float"
  },
] as const;