import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
const ItemCount = ({ stock, initial, onAdd }) => {
  const [stockx, setStockx] = React.useState(0);
  const [counters, setCounters] = React.useState(0);

  useEffect(() => {
    setStockx(stockx + stock);
    setCounters(counters + initial);
  }, []);

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

  onAdd = () => {
    if (counters !== 0) setCounters(counters - 1);
  };

  const minus = () => {
    if (stockx !== 0 && counters > 0) {
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

  return (
    <div className="d-inline-flex  flex-column">
      <div className="d-inline-flex justify-content-center">
        <div className="d-inline-flex" onClick={increment}>
          <FontAwesomeIcon size="2x" icon={faPlusCircle} color="#0D6EFD" />
        </div>
        <i className="fs-1 m-4 count">{counters}</i>
        <div className="d-inline-flex" onClick={onAdd}>
          <FontAwesomeIcon size="2x" icon={faMinusCircle} color="#0D6EFD" />
        </div>
        <div>{stockx}</div>
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
