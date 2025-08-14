import React from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { useCart } from "../state/cartStore";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  rating?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  image,
  rating,
}) => {
  const { handleAddToCart } = useCart();
  return (
    <div className="border-dashed border-gray-200 rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow bg-gray-200 hover:bg-gray-300/50  dark:bg-neutral-700 dark:hover:bg-neutral-600">
      <Link href={`/product/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover rounded-md"
        />
        <h2 className="mt-2 text-lg text-neutral-700 dark:text-neutral-300 font-semibold">
          {title}
        </h2>
        <p className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
          ${price.toFixed(2)}
        </p>
        {rating && (
          <div className="flex items-center mt-1">
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                className={`h-5 w-5 ${
                  index < rating ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </Link>
      <button
        onClick={() =>
          handleAddToCart({ id, title, price, image, quantity: 1 })
        }
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors text-shadow-md"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
