"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/auth-store";
import { validateAuthPassword } from "../utils/validation";
import type { AuthHookResult } from "../types";

export function useAuth(): AuthHookResult {
  const { isAuthenticated, login: storeLogin, logout: storeLogout } = useAuthStore();
  const router = useRouter();

  const login = useCallback((password: string): boolean => {
    if (!password?.trim()) return false;
    
    const validation = validateAuthPassword(password);
    if (validation.valid) {
      storeLogin();
      return true;
    }
    return false;
  }, [storeLogin]);

  const logout = useCallback(() => {
    storeLogout();
    router.replace("/");
  }, [storeLogout, router]);

  const validatePassword = useCallback((password: string): boolean => {
    return validateAuthPassword(password).valid;
  }, []);

  return {
    isAuthenticated,
    login,
    logout,
    validatePassword
  };
}