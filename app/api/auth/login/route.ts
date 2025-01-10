import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { AUTH_COOKIE_NAME, AUTH_COOKIE_OPTIONS } from '@/lib/auth/constants';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const validPassword = process.env.NEXT_PUBLIC_AUTH_PASSWORD;

    if (!validPassword || password !== validPassword) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // サーバーサイドでCookieを設定
    cookies().set(AUTH_COOKIE_NAME, 'true', AUTH_COOKIE_OPTIONS);
    
    return NextResponse.json({ 
      success: true,
      message: 'Login successful'
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}