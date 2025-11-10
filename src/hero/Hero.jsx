import React from 'react'
import hand_img from '../assets/Images/handIcon.jpg'
import hero_img from '../assets/Images/men2.jpg'

export const Hero = () => {
  return (
    <div  style={{
 backgroundImage: `url(${hero_img})`,
      height: "147vh",
       backgroundPosition: "bottom",
      width: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",

}}
 >
      <div className="pt-60 ml-15 p-4 text-black">
        <h1 className="text-4xl font-bold">New Arrivals only</h1>
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <p className="text-9xl font-bold">New</p>
            <img src={hand_img} alt="" className=" mt-10 mix-blend-multiply w-30 h-30" />
          </div>
          <p className="text-9xl font-bold">Collection</p>
          <p className="text-9xl font-bold">For Everyone</p>
        </div>
        <button className="text-3xl bg-red-500 text-white rounded-full p-3 pl-7 pr-7 mt-5 ">Latest Collection</button>
      </div>
    </div>
  )
}
