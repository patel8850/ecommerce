import React, { useContext } from "react";
import star from "../assets/Images/star.png";
import graystar from "../assets/Images/gray_star.png";
import { ShopContext } from "../Context/ShopContext";

export const ProductDisplay = ({ product }) => {
  const { addtoCart } = useContext(ShopContext);

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-4">
          
          {/* Small Images */}
          <div className="flex sm:flex-col gap-3">
            {[1, 2, 3, 4].map((n) => (
              <img
                key={n}
                src={product.image}
                alt="small preview"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-md border object-cover"
              />
            ))}
          </div>

          {/* Main Image */}
          <div>
            <img
              src={product.image}
              alt=""
              className="w-72 h-80 sm:w-96 sm:h-[450px] lg:w-[500px] lg:h-[550px] rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex justify-center lg:justify-start items-center mb-5">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={star} className="w-6 h-6" alt="star" />
            ))}
            <img src={graystar} className="w-6 h-6" alt="gray star" />
            <p className="ml-2 text-base">(122)</p>
          </div>

          {/* Price */}
          <div className="flex justify-center lg:justify-start gap-4 mb-5 text-xl sm:text-2xl">
            <p className="line-through text-gray-600 font-semibold">
              ${product.oldprice}
            </p>
            <p className="text-red-600 font-bold">${product.newprice}</p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base mb-3 px-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corrupti
            tenetur quibusdam eos, harum excepturi.
          </p>

          {/* Sizes */}
          <div className="mt-6">
            <p className="text-2xl sm:text-3xl font-semibold mb-3">Select Size</p>

            <div className="flex justify-center lg:justify-start gap-2 sm:gap-3 flex-wrap">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <span
                  key={size}
                  className="bg-gray-200 px-4 py-2 sm:px-6 sm:py-3 rounded-md cursor-pointer hover:bg-gray-300 transition"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addtoCart(product.id)}
            className="text-xl sm:text-2xl bg-red-600 text-white px-8 py-3 mt-8 mb-6 rounded-md hover:bg-red-700 transition"
          >
            ADD TO CART
          </button>

          {/* Extra Info */}
          <p className="text-base">
            <span className="font-semibold">Category:</span> Men, T-shirt
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-semibold">Tags:</span> Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};
