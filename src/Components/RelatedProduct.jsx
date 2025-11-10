import React from "react";
import { Item } from "./Item";
import { new_Collection } from "../assets/newCollection";
export const RelatedProduct = () => {
  return (
    <div>
     <h1 className=' flex-col items-center flex text-4xl mt-5'>Related Products <hr className="h-[6px] bg-black rounded-full w-[200px] m-2 mb-7"/></h1>
      <hr />
      <div className="grid grid-cols-4">
        {new_Collection.map((item, i) => {
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
