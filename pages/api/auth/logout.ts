import { NextApiRequest, NextApiResponse } from "next";
import { logOutUserById } from "@/server/users";

import { withSessionRoute } from "@/lib/withSession";

export default withSessionRoute(logoutRoute);

async function logoutRoute(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const updatedUser = await logOutUserById(req.session.user.user.id);

    if (!updatedUser || !updatedUser?.updatedId) {
      res.status(404).send({ message: "No session found" });
      return;
    }

    req.session.destroy();

    res.status(200).send({ message: "Logged out" });
  } else {
    res.status(404).send("");
  }
}
