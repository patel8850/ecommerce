import React from "react";
import { Item } from "./Item";
import { new_Collection } from "../assets/newCollection";

export const RelatedProduct = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-10">
      {/* Title */}
      <h1 className="flex flex-col items-center text-3xl sm:text-4xl mt-5 text-center">
        Related Products
        <hr className="h-[5px] bg-black rounded-full w-[150px] sm:w-[200px] m-2 mb-7" />
      </h1>

      <hr className="mb-5" />

      {/* Product Grid */}
      <div
        className="
          grid 
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6 sm:gap-8
          place-items-center
        "
      >
        {new_Collection.map((item, i) => (
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
