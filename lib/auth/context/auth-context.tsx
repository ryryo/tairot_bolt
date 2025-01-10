"use client";

import { createContext, useContext, ReactNode } from "react";
import { useAuthStore } from "../store";
import { AuthContextType } from "../types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { isAuthenticated, login, logout, validatePassword } = useAuthStore();

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, validatePassword }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}