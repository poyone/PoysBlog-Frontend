import { NextResponse } from "next/server";

export const config = {
  matcher: "/admin/:path*",
};
const protectedRoutes = ["/admin"];
const allowOrigins = ["www.poys.icu"];

export default async function middleware(request) {
  let response = NextResponse.next();
  response = AuthenticateHandler(request, response);

  return response;
}

function AuthenticateHandler(request, response) {
  const isAdminRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );
  const token = request.cookies.get("token")?.value;

  if (isAdminRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  return response;
}
