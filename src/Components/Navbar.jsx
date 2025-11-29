import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import shopIcon from "../assets/Images/shopping.png";
import cartimg from "../assets/Images/cartimg.png";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [menu, setmenu] = useState("Shop");
  const { getTotalItem } = useContext(ShopContext);

  return (
    <>
      <div
        className="
          h-auto pt-3 bg-blue-100
          flex flex-col sm:flex-row
          items-center justify-between
          px-4 sm:px-8
        "
      >
        {/* Logo Section */}
        <div className="flex items-center mb-2 sm:mb-0">
          <img
            className="h-9 w-9 sm:h-15 sm:w-15 mr-3 mix-blend-multiply"
            src={shopIcon}
            alt="footer"
          />
          <p className="text-2xl sm:text-5xl font-bold">SHOPPER</p>
        </div>

        {/* Menu Links */}
        <ul
          className="
            flex flex-wrap justify-center
            gap-4 sm:gap-8
            text-lg sm:text-[23px]
            mb-3 sm:mb-0
          "
        >
          <li
            onClick={() => setmenu("Shop")}
            className={`cursor-pointer ${
              menu === "Shop" ? "font-semibold" : ""
            }`}
          >
            <Link to="/">Shop</Link>
            {menu === "Shop" && (
              <hr className="bg-red-700 border-none mt-1 h-1 rounded-full" />
            )}
          </li>

          <li
            onClick={() => setmenu("Men")}
            className={`cursor-pointer ${
              menu === "Men" ? "font-semibold" : ""
            }`}
          >
            <Link to="/mens">Men</Link>
            {menu === "Men" && (
              <hr className="bg-red-700 border-none mt-1 h-1 rounded-full" />
            )}
          </li>

          <li
            onClick={() => setmenu("Women")}
            className={`cursor-pointer ${
              menu === "Women" ? "font-semibold" : ""
            }`}
          >
            <Link to="/women">Women</Link>
            {menu === "Women" && (
              <hr className="bg-red-700 border-none mt-1 h-1 rounded-full" />
            )}
          </li>

          <li
            onClick={() => setmenu("Kid")}
            className={`cursor-pointer ${
              menu === "Kid" ? "font-semibold" : ""
            }`}
          >
            <Link to="/kid">Kids</Link>
            {menu === "Kid" && (
              <hr className="bg-red-700 border-none mt-1 h-1 rounded-full" />
            )}
          </li>
        </ul>

        {/* Login and Cart Section */}
      {/* Login and Cart Section */}
<div className="flex items-center gap-4 sm:gap-6 mb-3 sm:mb-0">
  <Link to="/login">
    <button
      className="
        px-5 py-1 sm:px-8
        rounded-full border-2 border-gray-400
        text-lg sm:text-[25px]
      "
    >
      Login
    </button>
  </Link>

  {/* Cart Icon with Badge */}
  <div className="relative ml-2 sm:ml-5">
    {/* Badge */}
    {getTotalItem() !== "" && (
      <span
        className="
          absolute -top-2 -right-2
          bg-red-600 text-white
          text-xs sm:text-sm
          h-5 w-5 sm:h-6 sm:w-6
          flex items-center justify-center
          rounded-full
          font-semibold
          shadow-md
        "
      >
        {getTotalItem()}
      </span>
    )}

    <Link to="/cart">
      <img
        className="h-8 w-10 sm:h-10 sm:w-12 mix-blend-multiply"
        src={cartimg}
        alt="cart"
      />
    </Link>
  </div>
</div>

      </div>
    </>
  );
};

export default Navbar;
