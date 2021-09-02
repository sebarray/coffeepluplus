import React, { useContext, useEffect, useState } from "react";
import Cartitem from "./Cartitem/Cartitem";
import { cartContext } from "../../contexCart/Context";
import { Link } from "react-router-dom";
const Cart = () => {
  const { itemCart, desc, clear, sum, del } = useContext(cartContext);
  const [statecart, setcarts] = useState([]);

  useEffect(() => {
    setcarts(itemCart);
  }, [itemCart]);

  return (
    <div>
      <button onClick={clear}>clear cart</button>
      {statecart.length !== 0 ? (
        statecart.map((item) => {
          return (
            <Cartitem
              key={item.Id}
              data={item}
              desc={desc}
              sum={sum}
              del={del}
            />
          );
        })
      ) : (
        <Link to="/Product">No hay productos en el carrito</Link>
      )}
      <h3>
        TOTAL:$
        {statecart.reduce((acc, item) => {
          return (acc += item.Price * item.Cuantity);
        }, 0)}
      </h3>
    </div>
  );
};
export default Cart;
