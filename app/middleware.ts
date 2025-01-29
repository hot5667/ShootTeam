import { NextResponse } from 'next/server';

export async function middleware(request: Request) {
  // 요청의 헤더에서 User-Agent를 가져옵니다.
  const userAgent = request.headers.get('user-agent');

  // 아이폰과 안드로이드 기기 확인
  const isIphone = userAgent?.includes('iPhone');
  const isAndroid = userAgent?.includes('Android');

  // 모바일 기기일 경우 /m으로 리디렉션
  if (isIphone || isAndroid) {
    return NextResponse.redirect(new URL('/m', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',  // 이 미들웨어가 적용될 경로를 지정
};
