import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session/edge";

import { ironConfig } from "@/lib/ironConfig";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const session = await getIronSession(req, res, ironConfig);
  const { user } = session;

  const canAccess =
    user?.session?.access_token &&
    false;

  if (!canAccess) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return res;
}
export const config = {
  matcher: [
    /*
     * Matches all request paths except for the ones starting with:
     * - /web/auth (AUTH routes)
     * - /login & /signup
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    "/((?!web/auth|login|signup|_next/static|favicon).*)",
  ],
};
