declare module "iron-session" {
  interface IronSessionData {
    user?: {
      access_token: string;
      expires_at: number;
      expires_in: number;
      refresh_token: string;
      token_type: string;
    };
  }
}
