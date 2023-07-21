import {createEnv} from "@t3-oss/env-nextjs";
import {env} from "@/env.mjs";

const baseUrl = env.NEXT_PUBLIC_AUTH_BASE_URL;

export const phoneLogin = (phone: string) => {
  return fetch(baseUrl + "/api/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone: phone,
    }),
  });
};

export const phoneSignUp = (phone: string) => {
  return fetch(baseUrl + "/api/auth/signup/phone", {
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
  return fetch("/api/auth/code", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone,
      token,
    }),
  });
};

export const resendOtp = (phone: string) => {
  return fetch("/api/auth/resend", {
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
  return fetch("/api/auth/logout");
};
