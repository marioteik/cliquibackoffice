import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { phone } = req.body;

    // if (error) {
    //   res.status(500).json({ error: error.message });
    //   return;
    // }

    res.status(200).json({ message: "success" });
  } else {
    res.status(404);
  }
}
