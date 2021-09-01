import React, { useContext, useEffect, useState } from "react";
import Cartitem from "./Cartitem/Cartitem";
import { cartContext } from "../../contexCart/Context";
const Cart = () => {
  const { itemCart, desc, clear } = useContext(cartContext);
  const [statecart, setcarts] = useState([]);
  useEffect(() => {
    setcarts(itemCart);
  }, [itemCart]);
  return (
    <div>
      <button onClick={clear}>clear cart</button>
      {statecart.map((item) => {
        console.log(item);
        return <Cartitem key={item.Id} data={item} desc={desc} />;
      })}
    </div>
  );
};
export default Cart;
