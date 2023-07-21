import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/db";
import { createCode } from "@/server/codes";
import { findUserByPhone, insertUserByPhone } from "@/server/users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { phone } = req.body;

    await db.transaction(async (tx) => {
      let user = await findUserByPhone(phone, tx);

      if (!user) {
        user = await insertUserByPhone(phone, tx);
      }

      const code = await createCode(user.id, tx);

      if (code.code !== null) {
        // TODO: send sms
        console.log(`Code: ${code.code}`);
      }
    });

    res.status(200).json({ message: "success" });
  } else {
    res.status(404);
  }
}
