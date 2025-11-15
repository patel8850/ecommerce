import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import shopIcon from "../assets/Images/shopping.png";
import cartimg from "../assets/Images/cartimg.png";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [menu, setmenu] = useState("shop");
  const { getTotalItem } = useContext(ShopContext);

  return (
    <>
      <div className="h-auto pt-3 bg-blue-100 flex sm:flex items-center justify-between px-4 sm:px-8  sm:py-0">
        {/* Logo Section */}
        <div className="flex items-center mb-2 sm:mb-0">
          <img
            className="h-9 w-9 mt-3 sm:h-15 sm:w-15 mr-3 mix-blend-multiply"
            src={shopIcon}
            alt="footer"
          />
          <p className="text-2xl sm:text-5xl font-bold">SHOPPER</p>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 text-lg sm:text-[23px] mb-3 sm:mb-0">
          <li
            onClick={() => setmenu("Shop")}
            className={`cursor-pointer ${menu === "Shop" ? "-mt-1 sm:-mt-2 font-semibold" : ""}`}
          >
            <Link to="/">Shop</Link>
            {menu === "Shop" && <hr className="bg-red-700 border-none mt-1 h-1 rounded-full" />}
          </li>

          <li
            onClick={() => setmenu("Men")}
            className={`cursor-pointer ${menu === "Men" ? "-mt-1 sm:-mt-2 font-semibold" : ""}`}
          >
            <Link to="/mens">Men</Link>
            {menu === "Men" && <hr className="bg-red-700 border-none mt-1 h-1 rounded-full" />}
          </li>

          <li
            onClick={() => setmenu("Women")}
            className={`cursor-pointer ${menu === "Women" ? "-mt-1 sm:-mt-2 font-semibold" : ""}`}
          >
            <Link to="/women">Women</Link>
            {menu === "Women" && <hr className="bg-red-700 border-none mt-1 h-1 rounded-full" />}
          </li>

          <li
            onClick={() => setmenu("Kid")}
            className={`cursor-pointer ${menu === "Kid" ? "-mt-1 sm:-mt-2 font-semibold" : ""}`}
          >
            <Link to="/kid">Kids</Link>
            {menu === "Kid" && <hr className="bg-red-700 border-none mt-1 h-1 rounded-full" />}
          </li>
        </ul>

        {/* Login and Cart Section */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link to="/login">
            <button className="p-1 px-5 sm:px-8 rounded-full border-2 border-gray-400 text-lg mb-2 sm:text-[25px]">
              Login
            </button>
          </Link>

          <div className="flex items-center">
            <p className="ml-2 sm:ml-5 text-sm sm:text-base">{getTotalItem()}</p>
            <Link to="/cart">
              <img
                className="h-8 w-10 sm:h-10 sm:w-12 mix-blend-multiply ml-2 sm:ml-3"
                src={cartimg}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
