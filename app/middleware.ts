import { NextResponse } from 'next/server';

export async function middleware(request: Request) {
  const userAgent = (await request.headers.get('user-agent')) || '';  // 비동기 요청에 대해 await 사용
  const isMobile = /Mobi|Android/i.test(userAgent);

  if (isMobile) {
    // 모바일 기기에서 접근하면 /m 경로로 리디렉션
    return NextResponse.redirect(new URL('/m', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',  // 이 미들웨어가 적용될 경로를 지정
};
