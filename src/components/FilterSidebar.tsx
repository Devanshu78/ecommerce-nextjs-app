import React from "react";

interface FilterSidebarProps {
  price: number;
  setPrice: (price: number) => void;
  category: string;
  setCategory: (category: string) => void;
  brand: string;
  setBrand: (brand: string) => void;
}

const categories = ["All", "Clothing", "Electronics", "Toys"];
const brands = ["All", "H&M", "Sony"];

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  price,
  setPrice,
  category,
  setCategory,
  brand,
  setBrand,
}) => {
  return (
    <div className="p-4 md:border-r border-sky-500 h-fit">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="mb-4">
        <h3 className="font-medium">Categories</h3>
        <div className="flex flex-col space-y-1">
          {categories.map((cat) => (
            <label key={cat} className="inline-flex items-center">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={category.toLowerCase() === cat.toLowerCase()}
                onChange={() => setCategory(cat)}
                className="mr-2"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>
      <div className="mb-4 min-w-full">
        <h3 className="font-medium">Price Range</h3>
        <input
          type="range"
          min="0"
          max="1000"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full"
        />
        <span>${price}</span>
      </div>
      <div>
        <h3 className="font-medium">Brands</h3>
        <div className="flex flex-col space-y-1">
          {brands.map((b) => (
            <label key={b} className="inline-flex items-center">
              <input
                type="radio"
                name="brand"
                value={b}
                checked={brand.toLowerCase() === b.toLowerCase()}
                onChange={() => setBrand(b)}
                className="mr-2"
              />
              {b}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
