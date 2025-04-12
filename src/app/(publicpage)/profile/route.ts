import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const cookie = request.cookies.get("theme"); //get the cookie from the client
  console.log(cookie);

  return new Response("<h1>Hello from profile route</h1>", {
    status: 200,
    headers: {
      "Content-Type": "text/html", //from the server to the client response headers
      "Set-Cookie": "theme=dark", //send the cookie to the client
    },
  });
}

//simplified version of getting and setting cookies
//also this is much more usefull when using middleware
export async function GETs(request: NextRequest) {
  const CookieStore = await cookies();
  CookieStore.set("theme", "dark"); //server sends the cookie
  CookieStore.get("theme"); // server reads the cookie sent by client

  return new Response("<h1>Hello from profile route</h1>", {
    status: 200,
    headers: {
      "Content-Type": "text/html", //from the server to the client response headers
    },
  });
}
