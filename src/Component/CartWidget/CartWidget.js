import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { cartContext } from "../../contexCart/Context";
import { Link } from "react-router-dom";
const CartWidget = () => {
  const { itemcountcart } = useContext(cartContext);

  return (
    <div>
      {itemcountcart !== 0 && (
        <Link to="/cart">
          <span className="fs-1 text-white cartwd">{itemcountcart}</span>
          <FontAwesomeIcon
            size="3x"
            icon={faCartPlus}
            color="white"
            className="cartwd"
          />
          ;
        </Link>
      )}
    </div>
  );
};

export default CartWidget;
