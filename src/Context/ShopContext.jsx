import React, { useState } from "react";
import { AllProduct } from "../assets/AllProduct";
import { createContext } from "react";

export const ShopContext = createContext(null);
  const getDefaultCart=()=>{
    let cart ={}
    for (let index = 0; index < AllProduct.length+1; index++) {
      cart[index] = 0;
    }
    return cart
  }
const ShopContextProvider = (props) => {
  const [cartItems,setcartItems] = useState(getDefaultCart())


  const addtoCart = (itemId) =>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  }
    const removeCart = (itemId) =>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
 const getTotalCart = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      const itemInfo = AllProduct.find(
        (product) => product.id === Number(item)
      );
      totalAmount += itemInfo.newprice * cartItems[item];
    }
  }
  return totalAmount;
};
 const getTotalItem = ()=>{
  let totalItem = ""
  for(const item in cartItems){
    if (cartItems[item]>0){
      totalItem+=cartItems[item]
    }
  }
  return totalItem
 }

    const contextValue = {AllProduct,getTotalItem,getTotalCart,cartItems,addtoCart,removeCart}
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
