import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/db";
import { verifyCode } from "@/server/codes";
import { activeAndLogInUserByPhone, findUserByPhone } from "@/server/users";

import { initSession } from "@/lib/session";
import { withSessionRoute } from "@/lib/withSession";

export default withSessionRoute(createSessionRoute);

async function createSessionRoute(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { phone, token } = req.body;

    await db.transaction(async (tx) => {
      let user = await findUserByPhone(phone, tx);

      if (!user) {
        res.status(403).send("Código incorreto ou já utilizado.");
        return;
      }

      const hasCode = await verifyCode(user.id, token, tx);

      if (!hasCode) {
        res.status(403).json({ error: "Código incorreto ou já utilizado." });
        return;
      }

      const activatedUser = activeAndLogInUserByPhone(phone, tx);

      if (!activatedUser) {
        res.status(403).json({ error: "Código incorreto ou já utilizado." });
        return;
      }

      const sessionData = await initSession(user);

      req.session.user = sessionData;

      await req.session.save();

      res.status(200).json(sessionData);
    });
  } else {
    res.status(404).send("");
  }
}
