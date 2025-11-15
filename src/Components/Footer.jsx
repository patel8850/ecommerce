import React from "react";
import shopIcon from "../assets/Images/shopping.png";
import whatsapp from "../assets/Images/whatapp.png";
import insta from "../assets/Images/insta.jpeg";
import fb from "../assets/Images/fb.png";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row items-center justify-center m-4 text-center sm:text-left">
        <img className="h-15 w-15 mr-0 sm:mr-5 mb-2 sm:mb-0" src={shopIcon} alt="footer" />
        <p className="text-4xl sm:text-5xl font-bold">SHOPPER</p>
      </div>

      <ul className="flex flex-wrap justify-center text-base sm:text-lg gap-3 sm:gap-5 mb-4">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="flex flex-wrap justify-center gap-4 m-4">
        <img className="h-10 w-10 sm:h-11 sm:w-11" src={insta} alt="SocialIcon" />
        <img className="h-11 w-14 sm:h-12 sm:w-16" src={whatsapp} alt="SocialIcon" />
        <img className="h-11 w-11 sm:h-12 sm:w-12" src={fb} alt="SocialIcon" />
      </div>

      <hr className="h-[2px] w-11/12 sm:w-230 bg-gray-300 my-2" />
      <p className="text-sm sm:text-base">Copyright @ 2025 - All right</p>
    </div>
  );
};
