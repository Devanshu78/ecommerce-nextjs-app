import { createContext, useState, useContext } from "react";
import { Product } from "@/types/index";

interface SearchState {
  searchQuery: string;
  filteredProducts: Product[];
  allProducts: Product[];
}

interface SearchActions {
  setSearchQuery: (query: string) => void;
  setFilteredProducts: (products: Product[]) => void;
  setAllProducts: (products: Product[]) => void;
}

const SearchContext = createContext<SearchState | null>(null);
const SearchActionsContext = createContext<SearchActions | null>(null);

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const setSearchQueryHandler = (query: string) => {
    setSearchQuery(query);
  };

  const setFilteredProductsHandler = (products: any[]) => {
    setFilteredProducts(products);
  };

  return (
    <SearchContext.Provider
      value={{ searchQuery, filteredProducts, allProducts }}
    >
      <SearchActionsContext.Provider
        value={{
          setSearchQuery: setSearchQueryHandler,
          setFilteredProducts: setFilteredProductsHandler,
          setAllProducts,
        }}
      >
        {children}
      </SearchActionsContext.Provider>
    </SearchContext.Provider>
  );
};

export { SearchProvider };

export const useSearch = () => {
  const context = useContext(SearchContext);
  const actions = useContext(SearchActionsContext);
  return {
    searchQuery: context?.searchQuery ?? "",
    filteredProducts: context?.filteredProducts ?? [],
    allProducts: context?.allProducts ?? [],
    setSearchQuery: actions?.setSearchQuery ?? (() => {}),
    setFilteredProducts: actions?.setFilteredProducts ?? (() => {}),
    setAllProducts: actions?.setAllProducts ?? (() => {}),
  };
};
