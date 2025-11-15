import React from "react";
import { Item } from "./Item";
import { Product } from "../assets/Product";

export const Popular = () => {
  return (
    <div className="px-4 sm:px-6">
      <h1 className="flex flex-col items-center text-3xl sm:text-4xl md:text-5xl mt-5 text-center">
        POPULAR IN MEN
        <hr className="h-[4px] sm:h-[6px] bg-black rounded-full w-[150px] sm:w-[200px] m-2 mb-5" />
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ml-0 sm:ml-3 mr-0 sm:mr-5">
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
