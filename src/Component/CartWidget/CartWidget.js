import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { cartContext } from "../../contexCart/Context";
const CartWidget = () => {
  const { itemcountcart } = useContext(cartContext);

  return (
    <div>
      <span className="fs-1 text-white">{itemcountcart}</span>
      <FontAwesomeIcon size="3x" icon={faCartPlus} color="white" />;
    </div>
  );
};

export default CartWidget;
