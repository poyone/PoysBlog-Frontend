import { NextResponse } from "next/server";

const allowedOrigins = ["http://127.0.0.1:2333"];

export function middleware(request) {
  const origin = request.headers.get("origin");
  console.log(origin);

  if (origin && allowedOrigins.includes(origin)) {
    const response = NextResponse.next();
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/blog/:path*"],
};
