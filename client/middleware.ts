import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (new URL((request.nextUrl.pathname = 'change-password'))) {
    return NextResponse.rewrite(new URL('/change-password', request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/change-password',
}
