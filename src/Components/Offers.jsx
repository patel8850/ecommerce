import React from 'react'
import exclusive_img from '../assets/Images/exclusive.jpg'

export const Offers = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${exclusive_img})`,
          height: "135vh",
          backgroundPosition: "bottom",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="flex items-center sm:items-start"
      >
        <div className="text-center sm:text-left px-4 sm:px-10 md:ml-15 mt-40 sm:mt-60">
          <p className="font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl mb-2">Exclusive</p>
          <p className="font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl mb-3">Offers For You</p>
          <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-5">
            ONLY ON BEST SELLERS PRODUCTS
          </p>
          <button className="text-lg sm:text-2xl md:text-3xl bg-red-500 text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 mt-3 hover:bg-red-600 transition">
            Check now
          </button>
        </div>
      </div>
    </div>
  )
}
