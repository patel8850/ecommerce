import React from "react";
import { Item } from "./Item";
import { Product } from "../assets/Product";
export const Popular = () => {
  return (
    <div className="">
      <h1 className=" flex-col items-center flex text-5xl mt-5">
        POPULAR IN MEN
        <hr className="h-[6px] bg-black rounded-full w-[200px] m-2 mb-5" />
      </h1>
      <div className=" ml-3 mr-5  grid gap-5 grid-cols-4">
        {Product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              newprice={item.newprice}
              oldprice={item.oldprice}
            />
          );
        })}
      </div>
    </div>
  );
};
