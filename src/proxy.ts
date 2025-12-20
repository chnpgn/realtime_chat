import { NextRequest, NextResponse } from "next/server";
import { redis } from "./lib/redis";
import { nanoid } from "nanoid";

export const proxy = async (req: NextRequest) => {
  const pathname = req.nextUrl.pathname;
  const roomMatch = pathname.match(/^\/room\/([^\/]+)(\/.*)?$/);

  if (!roomMatch) return NextResponse.redirect(new URL("/", req.url));
  const roomId = roomMatch[1];

  const meta = await redis.hgetall<{ connected: string[]; createdAt: number }>(
    `meta:${roomId}`
  );

  if (!meta) {
    return NextResponse.redirect(new URL("/?error=room-not-found", req.url));
  }

  const existingToken = req.cookies.get("x-auth-token")?.value;

  // USER IS ALLOWED IF THEY HAVE AN EXISTING TOKEN
  if (existingToken && meta.connected.includes(existingToken)) {
    return NextResponse.next();
  }

  // USER IS NOT ALLOWED IF ROOM IS FULL
  if (meta.connected.length >= 2) {
    return NextResponse.redirect(new URL("/?error=room-full", req.url));
  }

  const response = NextResponse.next();
  const token = nanoid();

  // Set a cookie to identify the user in this room
  response.cookies.set(`x-auth-token`, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    // maxAge: 60 * 60 * 24 * 30, // 30 days
    sameSite: "strict",
    path: "/",
  });

  await redis.hset(`meta:${roomId}`, {
    connected: [...meta.connected, token],
  });

  return response;
};

export const config = {
  matcher: "/room/:path*",
};
