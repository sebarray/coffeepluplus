import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const ItemCount = ({ stock }) => {
  const [stockx, setStockx] = React.useState(0);
  const [counters, setCounters] = React.useState(1);
  useEffect(() => {
    fetch("https://coffeego.herokuapp.com/coffee");
    setStockx(stockx + stock);
  }, []);

  const increment = () => {
    if (counters < stockx) setCounters(counters + 1);
  };

  const decrement = () => {
    if (counters !== 0) setCounters(counters - 1);
  };

  const minus = () => {
    setStockx(stockx - counters);
    setCounters(counters - counters);
  };

  return (
    <div className="d-inline-flex  flex-column">
      <div className="d-inline-flex justify-content-center">
        <div className="d-inline-flex" onClick={increment}>
          <FontAwesomeIcon size="2x" icon={faPlusCircle} color="#0D6EFD" />
        </div>
        <i className="fs-1 m-4 count">{counters}</i>
        <div className="d-inline-flex" onClick={decrement}>
          <FontAwesomeIcon size="2x" icon={faMinusCircle} color="#0D6EFD" />
        </div>
        <p>{stockx}</p>
      </div>
      <button
        type="button"
        className="btn bg-primary text-white fs-4  p-3"
        onClick={minus}
      >
        AGREGAR AL CARRITO
      </button>
    </div>
  );
};

export default ItemCount;
