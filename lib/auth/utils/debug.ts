"use client";

export function getAuthDebugInfo() {
  try {
    if (typeof window === 'undefined') return null;
    const data = sessionStorage.getItem('auth-state');
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to get auth debug info:', error);
    return null;
  }
}

export function isDebugMode() {
  return process.env.NODE_ENV !== 'production';
}