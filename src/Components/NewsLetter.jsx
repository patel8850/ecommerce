import React from "react";

export const NewsLetter = () => {
  return (
    <div className="bg-gradient-to-r  from-blue-200 to-purple-200 h-70 w-full flex  justify-center mt-5 ">
      <div className="flex flex-col items-center">
        <h1 className="  font-bold text-5xl mt-10">
          Get Exclusive Offer On Your Email
        </h1>

        <div>
          <p className="text-lg m-5">
            Subscribe our Newsletter and stay updated{" "}
          </p>

          <div className="border-2 w-115 h-14 flex justify-between rounded-full">
            {" "}
            <input
              className="ml-2 w-75 border-none focus:outline-none  rounded-full"
              type="email"
              placeholder="Your Email Id"
            />
            <button className="bg-black w-35 rounded-full  text-white ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
