import { NextApiRequest, NextApiResponse } from "next";

import { withSessionRoute } from "@/lib/withSession";

export default withSessionRoute(createSessionRoute);

async function createSessionRoute(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // const { phone } = req.body;
    //
    // let {
    //   data: { users, session },
    //   error,
    // } = await supabase.auth.verifyOtp({
    //   phone: phone,
    //   token: req.body.token,
    //   type: "sms",
    // });
    //
    // if (error) {
    //   res.status(403).json({ error: error.message });
    //   return;
    // }

    // const sessionData = {
    //   access_token: session!.access_token!,
    //   expires_at: session!.expires_at!,
    //   expires_in: session!.expires_in!,
    //   refresh_token: session!.refresh_token!,
    //   token_type: session!.token_type!,
    // };

    // req.session.users = sessionData;

    // await req.session.save();

    res.status(200).json({ message: "success" });
  } else {
    res.status(404).send("");
  }
}
