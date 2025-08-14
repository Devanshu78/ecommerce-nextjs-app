import type { NextApiRequest, NextApiResponse } from "next";
import { products } from "../../../data/products";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let filtered = products;

  const { price, category, brand } = req.query;

  const categoryParam = category ? String(category).toLowerCase().trim() : null;
  const brandParam = brand ? String(brand).toLowerCase().trim() : null;

  if (price) {
    const maxPrice = Number(price);
    filtered = filtered.filter((p) => p.price <= maxPrice);
  }

  if (categoryParam && categoryParam !== "all") {
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === categoryParam
    );
  }

  if (brandParam && brandParam !== "all") {
    filtered = filtered.filter((p) => p.brand.toLowerCase() === brandParam);
  }

  res.status(200).json(filtered);
}
