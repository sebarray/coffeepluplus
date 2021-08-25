import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const Itemdetail = ({ data }) => {
  const [stockx, setStockx] = useState(0);
  const [counters, setCounters] = useState(0);
  const [value, setValue] = useState(0);
  useEffect(() => {
    setStockx(data.Stock);
  }, [data.Stock]);
  useEffect(() => {
    console.log("el estado interno es :", value);
  }, [value]);

  const onAdd = () => {
    if (stockx !== 0 && counters > 0) {
      setValue(counters);
      setStockx(stockx - counters);

      setCounters(counters - counters);

      swal({
        title: "genial!",
        text: "el producto se añadio al carrito",
        icon: "success",
        timer: "2000",
      });
    } else {
      if (stockx === 0) {
        swal({
          title: "upps",
          text: "no tenemos stock de este producto",
          icon: "error",
          timer: "2000",
        });
      }
    }
    if (counters === 0) {
      swal({
        title: "upps",
        text: "icremente la cantidad del producto",
        icon: "error",
        timer: "2000",
      });
    }
  };

  const increment = () => {
    if (counters < stockx) {
      setCounters(counters + 1);
    } else {
      if (stockx !== 0) {
        swal({
          title: "upps",
          text: "es todo el stock que tenemos",
          icon: "error",
          timer: "2000",
        });
      } else {
        swal({
          title: "upps",
          text: "no tenemos stock de este producto",
          icon: "error",
          timer: "2000",
        });
      }
    }
  };

  const minus = () => {
    if (counters !== 0) setCounters(counters - 1);
  };

  return (
    <div className="row">
      <img src={data.Img} className="w-50 h-50" alt="producto"></img>

      <div className=" flex-column w-25 pt-5 mt-5">
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
