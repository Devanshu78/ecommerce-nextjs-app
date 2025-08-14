import React from "react";

const CardLoader = () => {
  return (
    <div className="border border-gray-200 rounded-lg w-60 h-fit p-4 shadow-md hover:shadow-lg transition-shadow">
      <div className="animate-pulse space-y-2">
        <p className=" w-full h-56 bg-slate-300 rounded-md"> </p>
        <p className=" w-full h-5 bg-slate-300 rounded-md"> </p>
        <p className=" w-full h-5 bg-slate-300 rounded-md"> </p>
        <p className=" w-full h-6 bg-slate-300 rounded-md"> </p>
      </div>
    </div>
  );
};

export default CardLoader;
