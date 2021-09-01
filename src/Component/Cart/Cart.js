import React, { useContext, useEffect, useState } from "react";
import Cartitem from "./Cartitem/Cartitem";
import { cartContext } from "../../contexCart/Context";
const Cart = () => {
  const { itemCart, desc, clear, sum, del } = useContext(cartContext);
  const [statecart, setcarts] = useState([]);
  const [pricetotal, setprice] = useState(0);
  useEffect(() => {
    setcarts(itemCart);
    let price = itemCart.reduce((acc, item) => {
      return (acc += item.Price * item.Cuantity);
    }, 0);
    setprice(price);
  }, [itemCart]);

  return (
    <div>
      <button onClick={clear}>clear cart</button>
      {statecart.map((item) => {
        return (
          <Cartitem key={item.Id} data={item} desc={desc} sum={sum} del={del} />
        );
      })}
      <h3>TOTAL:${pricetotal}</h3>
    </div>
  );
};
export default Cart;
