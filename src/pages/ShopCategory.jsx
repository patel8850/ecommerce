import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { AllProduct } from "../assets/AllProduct";
import { Item } from "../Components/Item";

export const ShopCategory = (props) => {
  const abc = useContext(ShopContext);
  return (
    <div>
      <img className="h-140 w-full" src={props.banner} alt="" />
      <p>
        <span>Showing 1-12</span> Out of 36 Products
      </p>
      <div>{/* Short by <img src={dropdown_icon} alt="" /> */}</div>
      <div className="grid grid-cols-4">
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
          } else null;
        })}
      </div>
    </div>
  );
};
