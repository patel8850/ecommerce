import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { AllProduct } from "../assets/AllProduct";
import { Item } from "../Components/Item";

export const ShopCategory = (props) => {
  const abc = useContext(ShopContext);

  return (
    <div className="">
      {/* Banner */}
      <img
        className="w-full h-85 sm:h-80 md:h-100 lg:h-140  rounded-md"
        src={props.banner}
        alt=""
      />

      {/* Info text */}
      <p className="mt-4 text-center text-sm sm:text-base md:text-lg">
        <span className="font-semibold">Showing 1–12</span> out of 36 Products
      </p>

      {/* Product grid */}
      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          gap-4 
          sm:gap-6 
          mt-6
        "
      >
        {AllProduct.map((item, i) => {
          if (props.category === item.category) {
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
          } else return null;
        })}
      </div>
    </div>
  );
};

