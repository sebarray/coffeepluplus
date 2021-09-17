import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const ItemCount = ({ onAdd, minus, increment, counters }) => {
  return (
    <div className="d-inline-flex  flex-column">
      <div className="d-inline-flex justify-content-center">
        <div className="d-inline-flex" onClick={minus}>
          <FontAwesomeIcon size="2x" icon={faMinusCircle} color="#0D6EFD" />
        </div>
        <i className="fs-1 m-4 count">{counters}</i>

        <div className="d-inline-flex" onClick={increment}>
          <FontAwesomeIcon size="2x" icon={faPlusCircle} color="#0D6EFD" />
        </div>
      </div>
      <button
        type="button"
        className="btn bg-primary text-white fs-4  p-3"
        onClick={onAdd}
      >
        AGREGAR AL CARRITO
      </button>
    </div>
  );
};

export default ItemCount;
