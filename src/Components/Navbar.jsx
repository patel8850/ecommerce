import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import shopIcon from "../assets/Images/shopping.png";
import cartimg from "../assets/Images/cartimg.png";
import { ShopContext } from "../Context/ShopContext";
const Navbar = () => {
   const[menu,setmenu]=useState("shop")
   const{getTotalItem}=useContext(ShopContext)
  return (
    <>
    <div className="h-22 bg-blue-100 items-center  flex justify-between">
    <div className=" flex">
    <img className="h-15 ml-5  mix-blend-multiply w-15 mr-5" src={shopIcon} alt="footer" />
            <p className="text-5xl font-bold">SHOPPER</p>
      </div>
        <ul className="text-[23px] flex w-90 justify-between mt-2">
  <li
    onClick={() => setmenu("Shop")}
    className={` cursor-pointer ${
      menu === "Shop" ? "-mt-2 font-semibold" : ""}`}>
        <Link to='/'>Shop</Link>{menu === "Shop" && (
    <hr className="bg-red-700 border-none mt-1 h-1 rounded-full" />
    )}
  </li>
  <li
    onClick={() => setmenu("Men")}
    className={`cursor-pointer ${
      menu === "Men" ? "-mt-2 font-semibold" : ""}`}>
      <Link to='/mens'>Men</Link>{menu === "Men" && (
      <hr className="bg-red-700 border-none mt-1 h-1 rounded-full" />
    )}
  </li>

  <li
    onClick={() => setmenu("Women")}
    className={`cursor-pointer ${
      menu === "Women" ? "-mt-2 font-semibold" : ""
    }`}
  >
  <Link to='/women'>Women</Link>
    {menu === "Women" && (
      <hr className="bg-red-700 border-none mt-1 h-1 rounded-full" />
    )}
  </li>

  <li
    onClick={() => setmenu("Kid")}
    className={`cursor-pointer ${
      menu === "Kid" ? "-mt-2 font-semibold" : ""
    }`}
  >
   <Link to='/kid'>Kids</Link>
    {menu === "Kid" && (
      <hr className="bg-red-700 border-none mt-1 h-1 rounded-full" />
    )}
  </li>
</ul>

        <Link to='/login'><button className=" p-2 pl-8 pr-8 rounded-full border-2 border-gray-400 text-[25px]">Login</button></Link>
        <div ><p className="ml-5">{getTotalItem()}</p><p><Link to='/cart'><img className="h-10 mix-blend-multiply mr-7 w-12" src={cartimg} alt="" /></Link></p></div>
        
      </div>
    </>
  )
}
export default Navbar;
