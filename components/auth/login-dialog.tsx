"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { GradientButton } from "@/components/ui/gradient-button";
import { useAuth } from "@/lib/auth/hooks/use-auth";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { AUTH_ERRORS } from "@/lib/auth/constants";

interface LoginDialogProps {
  isOpen: boolean;
  onClose: () => void;
  redirectPath?: string;
  initialQuestion?: string;
}

export function LoginDialog({
  isOpen,
  onClose,
  redirectPath,
  initialQuestion
}: LoginDialogProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim() || isLoading) return;

    setError("");
    setIsLoading(true);

    try {
      const success = login(password.trim());
      
      if (success) {
        onClose();
        if (redirectPath) {
          const query = initialQuestion ? `?q=${encodeURIComponent(initialQuestion)}` : "";
          router.push(`${redirectPath}${query}`);
        }
      } else {
        setError(AUTH_ERRORS.INVALID_PASSWORD);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(AUTH_ERRORS.LOGIN_FAILED);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            ログイン
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="パスワード"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-800 border-gray-700"
              disabled={isLoading}
              autoFocus
            />
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
          </div>
          <GradientButton
            type="submit"
            className="w-full"
            disabled={isLoading || !password.trim()}
          >
            {isLoading ? <LoadingSpinner /> : "ログイン"}
          </GradientButton>
        </form>
      </DialogContent>
    </Dialog>
  );
}