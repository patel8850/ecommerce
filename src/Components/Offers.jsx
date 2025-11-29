import React from "react";
import exclusive_img from "../assets/Images/exclusive.jpg";

export const Offers = () => {
  return (
    <div
      className="
        w-full
        bg-cover bg-no-repeat bg-center
        flex items-center
        py-28 sm:py-40 md:py-85
      "
      style={{ backgroundImage: `url(${exclusive_img})` }}
    >
      <div className="text-center sm:text-left px-4 sm:px-10 max-w-5xl mx-auto">
        <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
          Exclusive
        </h1>

        <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-4">
          Offers For You
        </h1>

        <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-6">
          ONLY ON BEST SELLERS PRODUCTS
        </p>

        <button
          className="
            text-lg sm:text-2xl md:text-3xl
            bg-red-600 text-white
            px-6 sm:px-8 py-3 sm:py-4
            rounded-full
            hover:bg-red-700 transition
          "
        >
          Check now
        </button>
      </div>
    </div>
  );
};
