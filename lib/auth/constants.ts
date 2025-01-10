export const AUTH_STORAGE_KEY = 'auth-state';

export const AUTH_ROUTES = {
  LOGIN: '/',
  PROTECTED: ['/tarot/reading']
} as const;

export const AUTH_ERRORS = {
  INVALID_PASSWORD: 'パスワードが正しくありません。',
  MISSING_PASSWORD: 'パスワードを入力してください。',
  LOGIN_FAILED: 'ログイン中にエラーが発生しました。',
  NOT_CONFIGURED: '認証設定が正しく構成されていません。',
} as const;