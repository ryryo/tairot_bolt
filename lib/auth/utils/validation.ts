"use client";

import { AUTH_ERRORS } from '../constants';
import type { ValidationResult } from '../types';

export function validateAuthPassword(password: string): ValidationResult {
  if (!password?.trim()) {
    return { valid: false, error: AUTH_ERRORS.MISSING_PASSWORD };
  }

  const validPassword = process.env.NEXT_PUBLIC_AUTH_PASSWORD;
  
  if (!validPassword) {
    console.error('環境変数 NEXT_PUBLIC_AUTH_PASSWORD が設定されていません');
    return { valid: false, error: AUTH_ERRORS.NOT_CONFIGURED };
  }

  const isValid = password === validPassword;
  console.log('Password validation:', { 
    input: password,
    expected: validPassword,
    isValid 
  });

  return {
    valid: isValid,
    error: isValid ? undefined : AUTH_ERRORS.INVALID_PASSWORD
  };
}