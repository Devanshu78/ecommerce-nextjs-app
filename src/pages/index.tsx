import { useEffect, useState } from "react";
import FilterSidebar from "../components/FilterSidebar";
import ProductList from "../components/ProductList";
import { Product } from "../types/index";
import { useSearch } from "../state/searchStore";
import CardLoader from "@/components/CardLoader";

const Home = () => {
  const [loding, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const { searchQuery, setAllProducts, setFilteredProducts } = useSearch();
  const [price, setPrice] = useState(1000);
  const [category, setCategory] = useState<string>("all");
  const [brand, setBrand] = useState<string>("all");
  const [openFilter, setOpenFilter] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const params = new URLSearchParams();

      params.set("price", price.toString());

      if (category !== "all") {
        params.set("category", category.toLowerCase());
      }

      if (brand !== "all") {
        params.set("brand", brand.toLowerCase());
      }

      const url = `/api/products/products?${params.toString()}`;
      console.log("Fetching URL:", url);

      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setProducts(data);
      setAllProducts(data);
      setFilteredProducts(data);
    };

    fetchProducts();
  }, [price, category, brand]);

  const filteredProducts = products.filter((product) => {
    const priceMatch = product.price <= price;
    const categoryMatch =
      category.toLowerCase() === "all" ||
      (product.category &&
        product.category.toLowerCase() === category.toLowerCase());

    const brandMatch =
      brand.toLowerCase() === "all" ||
      (product.brand && product.brand.toLowerCase() === brand.toLowerCase());
    const searchMatch =
      !searchQuery ||
      (product.title &&
        product.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return priceMatch && categoryMatch && brandMatch && searchMatch;
  });

  return (
    <div className="flex flex-col max-w-7xl mx-auto h-full">
      <div className="flex flex-col md:flex-row">
        {/* Mobile Filter Toggle Button */}
        <div className="md:hidden p-4 border-b border-gray-200 flex justify-between items-center">
          <button
            onClick={() => setOpenFilter(!openFilter)}
            className="text-sm font-medium text-blue-600 flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="w-5 h-5"
              fill="currentColor"
            >
              <path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z" />
            </svg>
            Filters
          </button>
        </div>

        {/* Mobile Filter Panel */}
        {openFilter && (
          <div className="md:hidden fixed inset-0 bg-transparent z-50 flex justify-center items-start pt-20">
            <div className="w-11/12 max-w-md bg-white rounded-lg shadow-lg p-4 relative">
              <button
                className="absolute top-2 right-2 text-xl"
                onClick={() => setOpenFilter(false)}
              >
                &times;
              </button>
              <FilterSidebar
                price={price}
                setPrice={setPrice}
                category={category}
                setCategory={setCategory}
                brand={brand}
                setBrand={setBrand}
              />
            </div>
          </div>
        )}
        <div className="hidden md:block text-neutral-700 dark:text-neutral-200 ">
          <FilterSidebar
            price={price}
            setPrice={setPrice}
            category={category}
            setCategory={setCategory}
            brand={brand}
            setBrand={setBrand}
          />
        </div>
        <div className="flex-1 p-4">
          {loding ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <CardLoader key={index} />
              ))}
            </div>
          ) : (
            <div>
              {products?.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <h1 className="text-2xl font-bold">No products found</h1>
                </div>
              ) : (
                <div>
                  {filteredProducts.length === 0 ? (
                    <div className="text-center text-gray-500 mt-10 text-lg">
                      No products found matching your search or filters.
                    </div>
                  ) : (
                    <ProductList products={filteredProducts} />
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
