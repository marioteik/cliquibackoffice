import {createEnv} from "@t3-oss/env-nextjs";
import {env} from "@/env.mjs";

const baseUrl = env.NEXT_PUBLIC_AUTH_BASE_URL;

export const phoneSignIn = (phone: string) => {
  return fetch(baseUrl + "/api/v1/auth/signin/phone", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone: phone,
    }),
  });
};

export const verifyOtp = (phone: string, token: string) => {
  return fetch(baseUrl + "/api/v1/auth/verify/code", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone,
      code: token,
    }),
  });
};

export const resendOtp = (phone: string) => {
  return fetch(baseUrl + "/api/v1/auth/resend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone,
    }),
  });
};

export const logout = () => {
  return fetch("/api/v1/auth/logout");
};
