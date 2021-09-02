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
  const sum = (id) => {
    let index = itemCart.findIndex((c) => c.Id === id);
    if (itemCart[index].Cuantity !== 0) {
      itemCart[index].Cuantity += 1;
      SetCard(itemCart);
      Setcount(itemcountcart + 1);
    }
    console.log(itemCart);
  };

  const clear = () => {
    console.log("clear", itemCart);
    Setcount(0);
    SetCard([]);
    console.log("clear", itemCart);
  };

  const del = (producto) => {
    let c = itemcountcart - producto.Cuantity;
    Setcount(c);
    let productoAEliminar = itemCart.find((x) => x.Id === producto.Id);
    let carritoModificado = [...itemCart];
    carritoModificado.splice(itemCart.indexOf(productoAEliminar), 1);
    SetCard(carritoModificado);
  };

  return (
    <cartContext.Provider
      value={{
        itemCart,
        SetCard,
        addCart,
        itemcountcart,
        desc,
        clear,
        sum,
        del,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
