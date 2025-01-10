"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export function useAuth() {
  const { data: session, status } = useSession();

  return {
    isAuthenticated: status === "authenticated",
    login: async (password: string) => {
      try {
        const result = await signIn("credentials", {
          password,
          redirect: false,
        });
        return !result?.error;
      } catch (error) {
        console.error("Login error:", error);
        return false;
      }
    },
    logout: () => signOut({ redirect: true, callbackUrl: "/" }),
    status,
    session,
  };
}