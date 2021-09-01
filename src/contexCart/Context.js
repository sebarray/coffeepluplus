import React, { useState, createContext } from "react";
import cartObj from "./itemCart";
export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemCart, SetCard] = useState([]);
  const [itemcountcart, Setcount] = useState(0);

  const addCart = (obj, cantidad) => {
    const icart = new cartObj(
      obj.Id,
      obj.Stock,
      obj.Name,
      cantidad,
      obj.Img,
      obj.Price
    );
    let index = itemCart.findIndex((c) => c.Id === icart.Id);
    if (index !== -1) {
      itemCart[index].Cuantity += cantidad;
      SetCard(itemCart);
    } else {
      icart.Cuantity = cantidad;
      itemCart.push(icart);
      SetCard(itemCart);
    }

    Setcount(itemcountcart + cantidad);
    console.log("cantidad", itemcountcart);
    console.log("cart", itemCart);
  };

  const desc = (id) => {
    let index = itemCart.findIndex((c) => c.Id === id);
    if (itemCart[index].Cuantity !== 1) {
      itemCart[index].Cuantity -= 1;
      SetCard(itemCart);
      Setcount(itemcountcart - 1);
    }
  };

  const clear = () => {
    console.log("clear", itemCart);
    SetCard([]);
    console.log("clear", itemCart);
  };

  return (
    <cartContext.Provider
      value={{ itemCart, SetCard, addCart, itemcountcart, desc, clear }}
    >
      {children}
    </cartContext.Provider>
  );
};
