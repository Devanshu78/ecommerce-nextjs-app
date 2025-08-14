import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/state/cartStore";
import { Product } from "@/types/index";
import { useSearch } from "@/state/searchStore";

const Header: React.FC = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };
  const { cartItems } = useCart();
  const totalProducts = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const { searchQuery, setSearchQuery } = useSearch();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme === "dark" ? "dark" : "light";
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="bg-sky-700 p-4 mb-4">
      <header className="flex justify-between items-center max-w-7xl mx-auto text-white ">
        <Link href="/" className="text-xl md:text-2xl font-bold text-shadow-sm">
          LOGO
        </Link>
        <div className="flex items-center">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery?.(e.target.value)}
              className="p-2 rounded-md border-none outline-1 lg:outline-2 outline-gray-300 w-46 md:w-full"
            />
          </form>
          <Link href="/cart" className="relative ml-4">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              {totalProducts}
            </span>
          </Link>
          <button
            onClick={toggleTheme}
            className="ml-4 p-1 outline-2 bg-sky-900 rounded-full  transition-colors cursor-pointer hover:bg-sky-800"
          >
            {theme === "light" ? "🌞" : "🌙"}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
