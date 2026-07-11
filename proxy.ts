import { NextRequest, NextResponse } from "next/server";

const PUBLIC_ROUTES = ["/", "/login"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  if (!token) {
    if (PUBLIC_ROUTES.includes(pathname)) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/", request.url));
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_USER_SERVICE_URL}/user/auth/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      const res = NextResponse.redirect(new URL("/", request.url));
      res.cookies.delete("token"); 
      return res;
    }

    if (pathname === "/") {
      return NextResponse.redirect(new URL("/workspace", request.url));
    }

    return NextResponse.next();
  } catch {
    const res = NextResponse.redirect(new URL("/", request.url));
    res.cookies.delete("token");
    return res;
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};