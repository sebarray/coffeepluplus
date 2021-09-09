import React, { useState, useEffect } from "react";
import "./Cartitem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faMinusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Cartitem = ({ data, desc, sum, del }) => {
  useEffect(() => {
    console.log("data:", data);
  });
  const [cuantity, setcuantity] = useState(data.Cuantity);
  const decrement = () => {
    if (cuantity !== 1) {
      setcuantity(cuantity - 1);
      desc(data.Id);
    }
  };
  const increment = () => {
    if (cuantity !== data.Stock) {
      sum(data.Id);
      setcuantity(cuantity + 1);
    }
  };
  const cls = () => {
    del(data);
  };

  return (
    <div className="d-inline-flex">
      <h3 className="fs-1 m-0 p-0 ms-4">{data.Name}</h3>
      <h3 className="fs-1 m-0 p-0 ms-4">{data.Price}$ c/u</h3>
      <h3 className="fs-1 m-0 p-0 ms-4">{cuantity}</h3>
      <img src={data.Img} alt={data.Name} className="imgcart"></img>
      <span className="btn cp" onClick={increment}>
        <FontAwesomeIcon size="2x" icon={faPlusCircle} color="#0D6EFD" />
      </span>
      <span className="btn cp" onClick={decrement}>
        <FontAwesomeIcon size="2x" icon={faMinusCircle} color="#0D6EFD" />
      </span>
      <span className="btn cp" onClick={cls}>
        <FontAwesomeIcon size="2x" icon={faTrash} color="#0D6EFD" />
      </span>
    </div>
  );
};

export default Cartitem;
