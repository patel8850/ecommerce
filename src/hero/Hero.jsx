import React from 'react'
import hand_img from '../assets/Images/handIcon.jpg'
import hero_img from '../assets/Images/men2.jpg'

export const Hero = () => {
  return (
  <div
  className="
    bg-cover bg-no-repeat bg-center
    h-[510px]  md:h-[100vh] lg:h-[135vh]
    w-full
  "
  style={{ backgroundImage: `url(${hero_img})` }}
>

      <div className="pt-26 px-4  text-black">
        <h1 className="text-xl  font-bold">New Arrivals only</h1>

        <div className="mt-4">
          <div className="flex items-center gap-2">
            <p className="text-[55px] sm:text-[60px] font-bold lg:text-[110px] leading-none">
              New
            </p>

            <img
              src={hand_img}
              alt=""
              className="mt-3 w-[60px] h-[60px] lg:h-[110px] lg:w-[110px] sm:w-[66px] sm:h-[66px] mix-blend-multiply"
            />
          </div>

          <p className="text-[55px] sm:text-[60px] lg:text-[110px] font-bold leading-none">
            Collection
          </p>

          <p className="text-[55px] sm:text-[60px] lg:text-[110px] font-bold leading-none">
            For Everyone
          </p>
        </div>

        <button className="text-xl sm:text-2xl bg-red-500 text-white rounded-full px-6 py-2 sm:px-8 sm:py-3 mt-5 lg:text-[40px]">
          Latest Collection
        </button>
      </div>
    </div>
  )
}
