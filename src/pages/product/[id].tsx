import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Product } from "../../types";
import { useContext } from "react";
import { CartContext } from "../../state/cartStore";
import ProductLoader from "../../components/ProductLoader";

const ProductDetail = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  const { dispatch } = useContext(CartContext) || {};
  const cart = useContext(CartContext) || {
    state: { items: [] },
    dispatch: () => {},
  };

  useEffect(() => {
    setLoading(true);
    if (id) {
      // Fetch product data based on the ID
      const fetchProduct = async () => {
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();
        setLoading(false);
        setProduct(data);
      };
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product && cart?.dispatch) {
      cart.dispatch({
        type: "ADD_ITEM",
        payload: { ...product, quantity },
      });
    }
  };

  if (loading || !product)
    return (
      <div>
        <ProductLoader />
      </div>
    );

  return (
    <div className="container mx-auto p-4 dark:text-neutral-200">
      <div className="flex flex-col md:flex-row">
        <img
          src={product.image}
          alt={product.title}
          className="h-auto w-md lg:w-xl"
        />
        <div className="md:ml-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-xl text-gray-700 dark:text-gray-100 font-bold mt-2">
            ${product.price}
          </p>
          <p className="mt-2">{product.description}</p>
          <div className="mt-4">
            <label className="block text-sm">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              className="border rounded p-1 w-16"
            />
          </div>
          <button
            onClick={handleAddToCart}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Category: {product.category}</h2>
      </div>
    </div>
  );
};

export default ProductDetail;
