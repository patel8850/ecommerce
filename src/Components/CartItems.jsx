import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import remove from "../assets/Images/remove.png";

export const CartItems = () => {
  const { AllProduct, getTotalCart, cartItems, removeCart } = useContext(ShopContext);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header Row */}
      <div className="hidden sm:grid sm:grid-cols-6 text-lg font-semibold text-gray-700 border-b pb-3">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {/* Cart Items */}
      {AllProduct.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id} className="border-b py-5">
              <div className="grid grid-cols-2 sm:grid-cols-6 items-center text-sm sm:text-lg gap-4">
                {/* Product Image */}
                <img
                  className="h-24 w-20 object-cover mx-auto sm:mx-0"
                  src={e.image}
                  alt={e.name}
                />

                {/* Product Name */}
                <p className="text-center sm:text-left">{e.name}</p>

                {/* Price */}
                <p className="hidden sm:block">${e.newprice}</p>

                {/* Quantity */}
                <p className="text-center sm:text-left">{cartItems[e.id]}</p>

                {/* Total */}
                <p className="hidden sm:block">
                  ${e.newprice * cartItems[e.id]}
                </p>

                {/* Remove */}
                <div className="flex justify-center sm:justify-start">
                  <img
                    className="h-6 w-6 sm:h-7 sm:w-7 cursor-pointer hover:scale-110 transition"
                    src={remove}
                    onClick={() => removeCart(e.id)}
                    alt="remove"
                  />
                </div>
              </div>

              {/* Mobile-only details */}
              <div className="sm:hidden text-gray-600 mt-2 text-center">
                <p>
                  Price: <span className="font-medium">${e.newprice}</span>
                </p>
                <p>
                  Total:{" "}
                  <span className="font-medium">
                    ${e.newprice * cartItems[e.id]}
                  </span>
                </p>
              </div>
            </div>
          );
        }
        return null;
      })}

      {/* Cart Total Section */}
      <div className="mt-10 bg-gray-50 p-6 rounded-2xl shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
          Cart Total
        </h1>

        <div className="flex justify-between text-gray-700 mb-3">
          <p>Subtotal</p>
          <p>${getTotalCart()}</p>
        </div>
        <hr className="my-2" />

        <div className="flex justify-between text-gray-700 mb-3">
          <p>Shipping Fee</p>
          <p>Free</p>
        </div>
        <hr className="my-2" />

        <div className="flex justify-between items-center font-semibold text-lg mt-3">
          <p>Total</p>
          <p>${getTotalCart()}</p>
        </div>

        <button className="w-full mt-6 py-3 bg-black text-white rounded-lg hover:scale-105 transition-transform duration-200">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};
