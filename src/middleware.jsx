import { NextRequest, NextResponse } from "next/server";
 
 

const allowedOrigins = ["http://127.0.0.1:2333"];
const protectedRoutes = ['/admin'] 
const publicRoutes = ['/login', '/blog', '/']

export default async function middleware(request) {
  let res = NextResponse.next();
  res = handleCors(request, res);

  if (res.status === 200) {
    return handleAuth(request);
  }
  
  return res;
}

export const config = {
  matcher: ["/admin/:path*", "/blog/:path*"],
};

function handleCors(req, res) {
  const origin = req.headers.get("origin");
  if (origin && allowedOrigins.includes(origin)) {
    res.headers.set("Access-Control-Allow-Origin", origin);
    res.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
  }
  
  return res;
}

async function handleAuth(req) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)   
  const isPublicRoute = publicRoutes.includes(path)
  const token = req.cookies.get('token')?.value;
  
  if (isProtectedRoute && !token) {    
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }
   
  if (    
    isPublicRoute &&
    session?.userId &&  
    !req.nextUrl.pathname.startsWith('/admin')
  ) {
    return NextResponse.redirect(new URL('/admin', req.nextUrl))  
  }

  if (token) {
    req.headers.set('Authorization', `Bearer ${token}`);
  }

  return NextResponse.next();
}

