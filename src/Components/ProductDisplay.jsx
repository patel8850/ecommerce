import React, { useContext } from "react";
import star from "../assets/Images/star.png";
import graystar from "../assets/Images/gray_star.png";
import { ShopContext } from "../Context/ShopContext";
export const ProductDisplay = (props) => {
  const { product } = props;
  const {addtoCart} = useContext(ShopContext)
  return (
    <div className="ml-23">
      <div className="flex">
        <div className="flex  mr-15 ">
          <div className="flex gap-4 ml-3  flex-col ">
            <img className="h-38 w-36" src={product.image} alt="" />
            <img className="h-38 w-36 " src={product.image} alt="" />
            <img className="h-38 w-36" src={product.image} alt="" />
            <img className="h-38 w-36" src={product.image} alt="" />
          </div>
          <div>
            <img className="h-165 w-140 ml-4" src={product.image} alt="" />
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold mb-4">{product.name}</h1>
          <div className="flex mb-5 ">
            <img className="h-7 w-7" src={star} alt="" />
            <img className="h-7 w-7" src={star} alt="" />
            <img className="h-7 w-7" src={star} alt="" />
            <img className="h-7 w-7" src={star} alt="" />
            <img className="h-7 w-7" src={graystar} alt="" />
            <p>(122)</p>
          </div>
          

          <div className="flex gap-4 mb-5">
            <div className="text-gray-600 font-bold line-through text-2xl"> ${[product.oldprice]}</div>
            <div className="text-red-500 font-bold text-2xl"> ${[product.newprice]}</div>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corrupti tenetur quibusdam eos, harum excepturi
          </div>
          <div>
            <div className="text-3xl mb-5 mt-5">Select Size</div>
            <div className="flex mt-5 gap-3">
            <div className="bg-gray-300 p-4">S</div>
            <div className="bg-gray-300 p-4">M</div>
            <div className="bg-gray-300 p-4">L</div>
            <div className="bg-gray-300 p-4">XL</div>
            <div className="bg-gray-300 p-4">XXL</div>
            </div>
          </div>

          <button className="text-2xl bg-red-600 p-5 text-white mt-12 mb-12" onClick={() => addtoCart(product.id)}>ADD TO CART</button>
          <p>
            <span>Category:</span>Women,T-shirt, Crop top
          </p>
          <p>
            <span>Tags:</span>Modern Latest
          </p>
        </div>
      </div>
    </div>
  );
};
