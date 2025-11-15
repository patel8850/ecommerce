import React from "react";

export const NewsLetter = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-purple-200 w-full flex justify-center mt-5 py-10 px-4 sm:px-6">
      <div className="flex flex-col items-center text-center w-full max-w-3xl">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mt-5 sm:mt-10">
          Get Exclusive Offer On Your Email
        </h1>

        <p className="text-base sm:text-lg m-4 sm:m-5">
          Subscribe our Newsletter and stay updated
        </p>

        <div className="border-2 w-full sm:w-[28rem] md:w-[30rem] h-12 sm:h-14 flex justify-between rounded-full overflow-hidden">
          <input
            className="ml-3 w-[60%] sm:w-[70%] border-none focus:outline-none text-sm sm:text-base"
            type="email"
            placeholder="Your Email Id"
          />
          <button className="bg-black w-[40%] sm:w-[30%] text-sm sm:text-base rounded-full text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
