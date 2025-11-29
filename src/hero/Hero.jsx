import React from "react";
import hand_img from "../assets/Images/handIcon.jpg";
import hero_img from "../assets/Images/men2.jpg";

export const Hero = () => {
  return (
    <div
      className="
        bg-cover bg-no-repeat bg-center
        h-[420px] sm:h-[520px] md:h-[90vh] lg:h-[135vh]
        w-full
      "
      style={{ backgroundImage: `url(${hero_img})` }}
    >
      <div className="pt-20 px-4 text-black">

        {/* Title */}
        <h1 className="text-lg sm:text-xl font-bold">New Arrivals only</h1>

        {/* Text Area */}
        <div className="mt-4">

          {/* New + Hand icon */}
          <div className="flex items-center gap-2">
            <p className="text-[42px] sm:text-[60px] lg:text-[110px] font-bold leading-none">
              New
            </p>

            <img
              src={hand_img}
              alt="hand"
              className="
                mt-2
                w-[48px] h-[48px]
                sm:w-[66px] sm:h-[66px]
                lg:w-[110px] lg:h-[110px]
                mix-blend-multiply
              "
            />
          </div>

          {/* Collection Lines */}
          <p className="text-[42px] sm:text-[60px] lg:text-[110px] font-bold leading-none">
            Collection
          </p>

          <p className="text-[42px] sm:text-[60px] lg:text-[110px] font-bold leading-none">
            For Everyone
          </p>
        </div>

        {/* Button */}
        <button
          className="
            text-lg sm:text-2xl lg:text-[40px]
            bg-red-500 text-white
            rounded-full
            px-6 py-2 sm:px-8 sm:py-3
            mt-5
          "
        >
          Latest Collection
        </button>
      </div>
    </div>
  );
};
