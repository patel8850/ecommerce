import React from "react";
import { Item } from "./Item";
import { Product } from "../assets/Product";

export const Popular = () => {
  return (
    <div className="w-full  mx-auto px-4 sm:px-6">
      {/* Heading */}
      <div className="text-center mt-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          POPULAR IN MEN
        </h1>
        <hr className="h-[4px] sm:h-[6px] bg-black rounded-full w-[160px] sm:w-[200px] mx-auto mt-3 mb-6" />
      </div>

      {/* Grid */}
      <div className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-4 sm:gap-6
      ">
        {Product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            newprice={item.newprice}
            oldprice={item.oldprice}
          />
        ))}
      </div>
    </div>
  );
};
