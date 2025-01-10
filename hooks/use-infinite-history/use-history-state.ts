"use client";

import { useState } from "react";
import { HistoryEntry } from "@/types/history";

export function useHistoryState() {
  const [items, setItems] = useState<HistoryEntry[]>([]);
  return { items, setItems };
}