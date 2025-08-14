import type { NextApiRequest, NextApiResponse } from "next";
import { products } from "@/data/products";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let { id } = req.query;
  if (Array.isArray(id)) id = id[0]; // Ensure id is a string

  const product = products.find((p) => p.id === id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
}
