"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth/hooks/use-auth";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function LogoutPage() {
  const { logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const performLogout = async () => {
      try {
        logout();
        router.replace("/");
      } catch (error) {
        console.error("Logout error:", error);
        // エラーが発生しても必ずホームページにリダイレクト
        router.replace("/");
      }
    };

    performLogout();
  }, [logout, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <LoadingSpinner />
    </div>
  );
}