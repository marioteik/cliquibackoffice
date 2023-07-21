import { env } from "@/env.mjs";

export const ironConfig = {
  cookieName: env.COOKIE_NAME,
  password: env.COOKIE_SECRET,
  cookieOptions: {
    secure: env.NODE_ENV === "production",
  },
};
