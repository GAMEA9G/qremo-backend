import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers'
import { decrypt } from './app/lib/session';
const protectedRoutes = ['/api/Syllabus']
const publicRoutes = ['/api/auth', '/signup', '/']

export async function middleware(req: NextRequest) {
  // Authentication logic
  const response = NextResponse.next();
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
  
 
  if (path.startsWith('/api') && !path.startsWith('/api/auth')) {
     const cookie = (await cookies()).get('session')?.value
  const session = await decrypt(cookie)
    if (!session?.userId) {
      return NextResponse.json(
        { message: "Unauthorized access" },
        { status: 401 }
      );
    }
  }
 
 
 
  return NextResponse.next()
}


// Configure the scope of the middleware (example: match all page routes)
export const config = {
  matcher: ['/api/:path*']
};
