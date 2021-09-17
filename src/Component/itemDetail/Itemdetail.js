import React, { useState, useEffect, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";

import { Link } from "react-router-dom";
import { cartContext } from "../../contexCart/Context";
import {
  addok,
  stockcero,
  stocklimit,
  stockincrement,
  stockrev,
} from "../../Alert/AlertSweet";

const Itemdetail = ({ data }) => {
  const [stockx, setStockx] = useState(0);
  const [counters, setCounters] = useState(0);
  const [value, setValue] = useState(0);
  const { addCart, itemCart } = useContext(cartContext);

  useEffect(() => {
    setStockx(data.Stock);
  }, [data.Stock]);
  useEffect(() => {}, [value]);

  const onAdd = () => {
    let index = itemCart.findIndex((c) => c.Id === data.Id);
    if (index === -1) {
      onAd();
    } else if (itemCart[index].Stock >= counters + itemCart[index].Cuantity) {
      onAd();
    } else {
      stockrev();
    }
  };

  const onAd = () => {
    if (stockx !== 0 && counters > 0) {
      setValue(counters);
      setStockx(stockx - counters);
      setCounters(counters - counters);
      addCart(data, counters);
      addok();
    } else {
      if (stockx === 0) {
        stockcero();
      }
    }
    if (counters === 0) {
      stockincrement();
    }
  };

  const increment = () => {
    if (counters < stockx) {
      setCounters(counters + 1);
    } else {
      if (stockx !== 0) {
        stocklimit();
      } else {
        stockcero();
      }
    }
  };

  const minus = () => {
    if (counters !== 0) setCounters(counters - 1);
  };

  return (
    <div className="row mt-5">
      <img
        src={data.Img}
        className="w-50 h-50"
        alt="producto col-12 col-xxl-2 "
      ></img>

      <div className=" flex-column pt-5 mt-5 col-12 col-xxl-2 ">
        <h2 className="fs-1">{data.Name}</h2>
        <h3 className="fs-3">{data.Description}</h3>
        <h3 className="fs-3">Stock: {stockx}</h3>
        {value === 0 ? (
          <ItemCount
            stock={data.Stock}
            initial={1}
            onAdd={onAdd}
            minus={minus}
            increment={increment}
            counters={counters}
          />
        ) : (
          <Link type="button" className="btn btn-success FS-2" to="/cart">
            TERMINAR COMPRA
          </Link>
        )}
      </div>
    </div>
  );
};

export default Itemdetail;
