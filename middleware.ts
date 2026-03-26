import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default auth((req) => {
  const { nextUrl, auth: session } = req
  const isLoggedIn = !!session
  const isAdmin = session?.user?.role === 'ADMIN' || session?.user?.role === 'STAFF'

  // Protect /admin routes
  if (nextUrl.pathname.startsWith('/admin')) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/account/login?callbackUrl=/admin/dashboard', req.url))
    }
    if (!isAdmin) {
      return NextResponse.redirect(new URL('/', req.url))
    }
  }

  // Protect /account routes (except login/register)
  if (
    nextUrl.pathname.startsWith('/account') &&
    !nextUrl.pathname.includes('/login') &&
    !nextUrl.pathname.includes('/register') &&
    !nextUrl.pathname.includes('/forgot-password')
  ) {
    if (!isLoggedIn) {
      return NextResponse.redirect(
        new URL(`/account/login?callbackUrl=${nextUrl.pathname}`, req.url)
      )
    }
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/admin/:path*', '/account/:path*'],
}
