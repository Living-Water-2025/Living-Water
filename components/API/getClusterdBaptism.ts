import type { NextApiRequest, NextApiResponse } from "next";
import { ClusteredBaptism } from "@/components/API/Models/ClusteredBaptism";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/GetClusteredBaptisms`);
    const data: ClusteredBaptism[] = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch clustered baptisms" });
  }
}