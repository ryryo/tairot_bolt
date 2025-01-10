"use client";

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { AuthState } from '../types';
import { AUTH_STORAGE_KEY } from '../constants';

// ストレージから初期状態を取得する関数
const getInitialState = () => {
  try {
    if (typeof window === 'undefined') return false;
    const stored = sessionStorage.getItem(AUTH_STORAGE_KEY);
    if (!stored) return false;
    const data = JSON.parse(stored);
    return data?.state?.isAuthenticated ?? false;
  } catch {
    return false;
  }
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: getInitialState(),
      login: () => set({ isAuthenticated: true }),
      logout: () => {
        set({ isAuthenticated: false });
        // ストレージを確実にクリア
        if (typeof window !== 'undefined') {
          sessionStorage.removeItem(AUTH_STORAGE_KEY);
        }
      },
    }),
    {
      name: AUTH_STORAGE_KEY,
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ isAuthenticated: state.isAuthenticated }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          // 再ハイドレーション後の状態を確認
          console.log('Rehydrated state:', state.isAuthenticated);
        }
      },
    }
  )
);