import { NextResponse } from "next/server";

export const config = {
  matcher: "/admin/:path*",
};

const allowOrigins = ["www.poys.icu",];

export default async function middleware(request) {

}


function AuthenticateHandler(request, response) {
    
}