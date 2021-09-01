import React, { useState } from "react";
import "./Cartitem.css";

const Cartitem = ({ data, desc }) => {
  const [cuantity, setcuantity] = useState(data.Cuantity);
  const decrement = () => {
    if (cuantity !== 1) setcuantity(cuantity - 1);
    desc(data.Id);
  };

  return (
    <div className="d-flex">
      <h3 className="fs-1 m-0 p-0 ms-4">{data.Name}</h3>
      <h3 className="fs-1 m-0 p-0 ms-4">{data.Price}</h3>
      <h3 className="fs-1 m-0 p-0 ms-4">{cuantity}</h3>
      <img src={data.Img} alt={data.Name} className="imgcart"></img>
      <button className="btn">increment</button>
      <button className="btn" onClick={decrement}>
        decrement
      </button>
      <button className="btn">delete</button>
    </div>
  );
};

export default Cartitem;
