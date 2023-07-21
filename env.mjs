import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(["production", "development", "test"]),
        PORT: z.string().min(1),
        COOKIE_NAME: z.string().min(1),
        COOKIE_SECRET: z.string().min(1),
        JWT_SECRET: z.string().min(1),
        JWT_AUDIENCE: z.string().min(1),
        JWT_ISSUER: z.string().min(1),
    },
    client: {
        NEXT_PUBLIC_APP_URL: z.string().optional(),
        NEXT_PUBLIC_AUTH_BASE_URL: z.string().url(),
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        PORT: process.env.PORT,
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
        NEXT_PUBLIC_AUTH_BASE_URL: process.env.NEXT_PUBLIC_AUTH_BASE_URL,
        COOKIE_NAME: process.env.COOKIE_NAME,
        COOKIE_SECRET: process.env.COOKIE_SECRET,
        JWT_SECRET: process.env.JWT_SECRET,
        JWT_AUDIENCE: process.env.JWT_AUDIENCE,
        JWT_ISSUER: process.env.JWT_ISSUER,
    },
})
