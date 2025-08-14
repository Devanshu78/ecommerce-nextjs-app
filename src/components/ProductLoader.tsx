import React from "react";

const ProductLoader = () => {
  return (
    <div className="w-full ">
      <div className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row gap-4 animate-pulse">
        <div className="space-y-4">
          <p className="w-40 h-40 md:w-96 md:h-96 rounded-xl bg-slate-300"></p>
          <p className="w-full h-6 rounded-md bg-slate-300"></p>
        </div>
        <div className="flex-1 space-y-4">
          <p className="w-full h-6 rounded-md bg-slate-300"></p>
          <p className="w-full h-6 rounded-md bg-slate-300"></p>
          <p className="w-full h-6 rounded-md bg-slate-300"></p>
        </div>
      </div>
    </div>
  );
};

export default ProductLoader;
