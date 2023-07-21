import { User } from "@/db/schemas/users";
import { env } from "@/env.mjs";
import { SignJWT } from "jose";

export async function initSession(user: User) {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60;

  const _token = await new SignJWT({ ...user })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setAudience(env.JWT_AUDIENCE)
    .setIssuer(env.JWT_ISSUER)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(env.JWT_SECRET));

  return {
    session: {
      access_token: _token,
      expires_at: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
      expires_in: 60 * 60,
      refresh_token: _token,
      token_type: "JWT",
    },
    user: {
      ...user,
    },
  };
}
