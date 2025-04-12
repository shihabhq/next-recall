import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  //   return NextResponse.redirect(new URL("/profile", request.url)); //one way to redirect
  if (request.nextUrl.pathname === "/marketing") {
    return NextResponse.rewrite(new URL("/profile", request.url));
  }
  const response = NextResponse.next(); //to act as default response
  const themePreference = request.cookies.get("theme");
  

  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("x-hello", "world");
  return response;
}

// export const config = {
//     matcher:'/marketing'
// }
