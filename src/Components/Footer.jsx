import React from "react";
import shopIcon from "../assets/Images/shopping.png";
import whatsapp from "../assets/Images/whatapp.png";
import insta from "../assets/Images/insta.jpeg";
import fb from "../assets/Images/fb.png";
export const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex m-4">
        <img className="h-15 w-15 mr-5" src={shopIcon} alt="footer" />
        <p className="text-5xl font-bold">SHOPPER</p>
      </div>
      <ul className="flex h-5 text-lg gap-5">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-4 m-8">
        <img className=" h-11 w-11" src={insta} alt="SocialIcon" />
        <img className="h-12 w-16" src={whatsapp} alt="SocialIcon" />
        <img className="h-12 w-12" src={fb} alt="SocialIcon" />
      </div>
<hr className="h-2 w-230" />
      <p>Copyright @ 2025 - All right</p>
    </div>
  );
};
