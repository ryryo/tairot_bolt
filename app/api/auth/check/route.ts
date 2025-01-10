import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { AUTH_COOKIE_NAME } from '@/lib/auth/constants';

export async function GET() {
  try {
    const authCookie = cookies().get(AUTH_COOKIE_NAME);
    return NextResponse.json({ 
      isAuthenticated: authCookie?.value === 'true' 
    });
  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json({ 
      isAuthenticated: false,
      error: 'Failed to check authentication status'
    });
  }
}