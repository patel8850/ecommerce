import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import remove from "../assets/Images/remove.png";

export const CartItems = () => {
  const { AllProduct, getTotalCart, cartItems, removeCart } =
    useContext(ShopContext);
  return (
    <div className="ml-50 text-lg mr-50">
      <div className="text-2xl   mt-10 m-5 grid grid-cols-6">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="w-300" />
      {AllProduct.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div  key={e.id}>
              <div className=" text-lg justify-center items-center grid m-2 grid-cols-6 ">
                <img className="h-28 w-20" src={e.image} alt="gd" />
                <p>{e.name}</p>
                <p>${e.newprice}</p>
                <p>{cartItems[e.id]}</p>
                <p>{e.newprice * cartItems[e.id]}</p>
                <img
                  className="h-15 cursor-pointer w-15"
                  src={remove}
                  onClick={() => {
                    removeCart(e.id);
                  }}
                  alt="remove"
                />
              </div>
              <hr  className="w-300"/>
              <div className="ml-25">
                <h1 className="text-3xl font-bold m-10">Cart Total</h1>
                <div className="flex gap-50">
                  <p>SubTotal</p>
                  <p>${getTotalCart()}</p>
                </div>
                <hr className="w-80"/>
                <div className="flex gap-43">
                  <p>Shipping fee</p>
                  <p>free</p>
                </div>
                 <hr className="w-80" />
                  <div className="flex gap-55">
                    <p className="text-2xl font-semibold">Total</p>
                    <p>${getTotalCart()}</p>
                  </div>
                  <hr className="w-80"/>
                
                <button className="mt-5 px-5 py-2 bg-black text-white rounded-lg hover:scale-105 transition">PROCEED TO CHECKOUT</button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
