import * as jwt from 'jsonwebtoken';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const ACCESS_TOKEN_EXPIRY_TIME = 60 * 60; // 1 hour in seconds
const REFRESH_TOKEN_EXPIRY_TIME = 7 * 24 * 3600; // 7 days in seconds
const REFRESH_THRESHOLD = 10 * 60; // 10 minutes in seconds

/**
 * /api로 시작하는 모든 경로 (API 라우트)
 *
 * /_next/static으로 시작하는 경로 (정적 파일)
 *
 * /_next/image로 시작하는 경로 (이미지 최적화 파일)
 *
 * /favicon.ico 파일
 *
 * /auth로 시작하는 모든 경로 (인증 관련 페이지)
 *
 * 위 경로는 미들웨어가 적용되지 않습니다.
 */
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|auth|images).*)'],
};

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;

  const loginUrl = new URL('/auth/login', request.url);
  loginUrl.searchParams.set('redirect', request.url);
  const response = NextResponse.redirect(loginUrl, { status: 302 });

  if (!token) {
    return response;
  }

  try {
    const decoded = jwt.decode(token) as { exp?: number };

    if (!decoded || typeof decoded === 'string' || !decoded.exp) {
      throw new Error('유효하지 않은 토큰');
    }

    const currentTime = Math.floor(Date.now() / 1000);
    const tokenExp = decoded.exp;

    if (currentTime >= tokenExp - REFRESH_THRESHOLD) {
      throw new jwt.TokenExpiredError('Token expired', new Date(tokenExp));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('error', error);
    if (error instanceof jwt.TokenExpiredError && refreshToken) {
      try {
        const newTokens = await refreshTokens(refreshToken);

        const response = NextResponse.next();
        response.cookies.set('accessToken', newTokens.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: ACCESS_TOKEN_EXPIRY_TIME, // 1 hour
          path: '/',
        });
        response.cookies.set('refreshToken', newTokens.refreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: REFRESH_TOKEN_EXPIRY_TIME, // 7 days
          path: '/',
        });

        return response;
      } catch (error) {
        console.error(error);
        return response;
      }
    } else {
      return response;
    }
  }
}

async function refreshTokens(refreshToken: string): Promise<{ token: string; refreshToken: string }> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (!response.ok) {
    throw new Error('Failed to refresh token');
  }

  return await response.json();
}
