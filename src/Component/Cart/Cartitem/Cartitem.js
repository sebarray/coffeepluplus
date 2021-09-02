import React, { useState } from "react";
import "./Cartitem.css";

const Cartitem = ({ data, desc, sum, del }) => {
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
    <div className="d-flex">
      <h3 className="fs-1 m-0 p-0 ms-4">{data.Name}</h3>
      <h3 className="fs-1 m-0 p-0 ms-4">{data.Price}</h3>
      <h3 className="fs-1 m-0 p-0 ms-4">{cuantity}</h3>
      <img src={data.Img} alt={data.Name} className="imgcart"></img>
      <button className="btn" onClick={increment}>
        increment
      </button>
      <button className="btn" onClick={decrement}>
        decrement
      </button>
      <button className="btn" onClick={cls}>
        delete
      </button>
    </div>
  );
};

export default Cartitem;
