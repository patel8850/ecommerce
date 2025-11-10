import React from 'react'
import exclusive_img from '../assets/Images/exclusive.jpg'
export const Offers = () => {
  return (
    <div>
      <div style={{backgroundImage:`url(${exclusive_img})`,
      height: "135vh",
       backgroundPosition: "bottom",
      width: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",}}>
         <div>
        <p className="pt-60 ml-15 p-4 font-bold text-9xl">Exclusive</p>
        <p className="ml-15 font-bold text-9xl">Offers For You</p>
        <p className="m-5 ml-15 text-5xl">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="ml-15 text-3xl bg-red-500 text-white rounded-full p-4 pl-8 pr-8 mt-5">Check now</button>
      </div>
      </div>
    </div>
  )
}
