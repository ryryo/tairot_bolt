"use client";

import { useEffect, useState } from "react";
import { useAuthStore } from "@/lib/auth/store";
import { Card } from "@/components/ui/card";

export function AuthDebugBox() {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const [storageData, setStorageData] = useState<string | null>(null);

  useEffect(() => {
    const updateDebugInfo = () => {
      try {
        const data = sessionStorage.getItem('auth-state');
        setStorageData(data);
      } catch (error) {
        console.error('Storage error:', error);
      }
    };

    updateDebugInfo();
    const interval = setInterval(updateDebugInfo, 1000);
    return () => clearInterval(interval);
  }, []);

  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <Card className="mt-8 p-4 bg-gray-800/50 text-white rounded-lg text-sm border-gray-700">
      <h3 className="font-bold mb-2">認証デバッグ情報</h3>
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Zustand状態:</span>{" "}
          <span className={isAuthenticated ? "text-green-400" : "text-red-400"}>
            {isAuthenticated ? "認証済み" : "未認証"}
          </span>
        </p>
        {storageData && (
          <p>
            <span className="font-semibold">セッションストレージ:</span>{" "}
            <code className="text-xs bg-gray-700 px-1 py-0.5 rounded break-all">
              {storageData}
            </code>
          </p>
        )}
      </div>
    </Card>
  );
}