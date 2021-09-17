import React, { useContext, useEffect, useState } from "react";
import Cartitem from "./Cartitem/Cartitem";
import { cartContext } from "../../contexCart/Context";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./cart.css";
const Cart = () => {
  const { itemCart, desc, clear, sum, del } = useContext(cartContext);
  const [statecart, setcarts] = useState([]);

  useEffect(() => {
    setcarts(itemCart);
  }, [itemCart]);

  return (
    <div className="container mt-5 pt-5 justify-content-center">
      <h3 className=" text-center fs-1  mt-5 pt-5">carrito </h3>

      {statecart.length !== 0 ? (
        statecart.map((item) => {
          return (
            <div className="row ">
              <Cartitem
                key={item.Img}
                data={item}
                desc={desc}
                sum={sum}
                del={del}
              />
            </div>
          );
        })
      ) : (
        <Link className=" fs-1 text-center carticon" to="/Product">
          No hay productos en el carrito
        </Link>
      )}
      <h3>
        TOTAL:$
        {statecart.reduce((acc, item) => {
          return (acc += item.Price * item.Cuantity);
        }, 0)}
      </h3>
      <span onClick={clear} className="cp">
        <FontAwesomeIcon size="2x" icon={faTrash} color="#0D6EFD" />
        clear cart
      </span>
      <Link className="btn btn-primary" to="/pago">
        Comprar
      </Link>
    </div>
  );
};
export default Cart;
