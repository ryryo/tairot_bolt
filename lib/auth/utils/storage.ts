"use client";

import { AUTH_STORAGE_KEY } from '../constants';

export function getStoredAuthState(): boolean {
  try {
    if (typeof window === 'undefined') return false;
    const data = sessionStorage.getItem(AUTH_STORAGE_KEY);
    return data === 'true';
  } catch {
    return false;
  }
}

export function setStoredAuthState(isAuthenticated: boolean): void {
  try {
    if (typeof window === 'undefined') return;
    sessionStorage.setItem(AUTH_STORAGE_KEY, String(isAuthenticated));
  } catch (error) {
    console.error('Failed to set stored auth state:', error);
  }
}

export function clearStoredAuthState(): void {
  try {
    if (typeof window === 'undefined') return;
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear stored auth state:', error);
  }
}