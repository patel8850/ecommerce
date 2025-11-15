import React, { useContext } from "react";
import star from "../assets/Images/star.png";
import graystar from "../assets/Images/gray_star.png";
import { ShopContext } from "../Context/ShopContext";

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addtoCart } = useContext(ShopContext);

  return (
    <div className=" md:ml-23 p-3 ">
      <div className="flex flex-col lg:flex-row  lg:gap-20">
        {/* Left Section */}
        <div className="flex flex-row  items-center lg:items-start justify-center lg:justify-start">
          {/* Small Images */}
          <div className="flex-col  gap-  mb-4 sm:mb-0 sm:ml-3">
            <img className="h-33 w-32 md:h-41 md:w-36" src={product.image} alt="" />
            <img className=" h-33 w-32 md:h-41 md:w-36" src={product.image} alt="" />
            <img className="h-33 w-32 md:h-41 md:w-36" src={product.image} alt="" />
            <img className=" h-33 w-32 md:h-41 md:w-36" src={product.image} alt="" />
          </div>

          {/* Main Image */}
          <div>
            <img className="h-90 w-85 md:h-165 md:w-140 ml-4" src={product.image} alt="" />
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>

          <div className="flex justify-center lg:justify-start mb-5">
            {[...Array(4)].map((_, i) => (
              <img key={i} className="h-6 w-6" src={star} alt="star" />
            ))}
            <img className="h-6 w-6 " src={graystar} alt="graystar" />
            <p className="ml-2 text-base">(122)</p>
          </div>

          <div className="flex justify-center lg:justify-start gap-4 mb-5 text-xl sm:text-2xl">
            <div className="text-gray-600 font-bold line-through">${product.oldprice}</div>
            <div className="text-red-500 font-bold">${product.newprice}</div>
          </div>

          <p className="text-sm sm:text-base mb-2 px-1 sm:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corrupti tenetur quibusdam eos, harum excepturi.
          </p>

          <div>
            <div className="text-2xl sm:text-3xl mb-3 mt-5">Select Size</div>
            <div className="flex justify-center lg:justify-start mt-3 gap-2 sm:gap-3 flex-wrap">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div key={size} className="bg-gray-300 px-4 py-2 sm:p-4 rounded-md cursor-pointer hover:bg-gray-400">
                  {size}
                </div>
              ))}
            </div>
          </div>

          <button
            className="text-2xl p-2 bg-red-600 px-6 sm:p-5 text-white  mt-7 mb-8 rounded-md hover:bg-red-700 transition"
            onClick={() => addtoCart(product.id)}
          >
            ADD TO CART
          </button>

          <p className="text-base">
            <span className="font-semibold">Category:</span> Women, T-shirt, Crop top
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-semibold">Tags:</span> Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};
