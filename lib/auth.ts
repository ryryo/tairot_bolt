"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      login: () => set({ isAuthenticated: true }),
      logout: () => set({ isAuthenticated: false }),
    }),
    {
      name: 'auth-state',
      storage: {
        getItem: (name) => {
          try {
            if (typeof window === 'undefined') return null;
            const value = sessionStorage.getItem(name);
            return value ? value : null;
          } catch {
            return null;
          }
        },
        setItem: (name, value) => {
          try {
            if (typeof window === 'undefined') return;
            sessionStorage.setItem(name, value);
          } catch (error) {
            console.error('Storage error:', error);
          }
        },
        removeItem: (name) => {
          try {
            if (typeof window === 'undefined') return;
            sessionStorage.removeItem(name);
          } catch (error) {
            console.error('Storage error:', error);
          }
        },
      },
    }
  )
);