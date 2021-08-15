import React from "react";

import ItemCount from "../ItemCount/ItemCount";
import "./cardshopStyle.css";
const CardShop = ({ data }) => {
  return (
    <div className="card wcard  m-3 mt-4 ">
      <img src={data.Img} className="card-img-top himg" alt="producto"></img>
      <div className="card-body hcard">
        <h5 className="card-title text-center fs-2 ">{data.Name}</h5>
      </div>
      <ItemCount stock={data.Stock} initial={1} />
    </div>
  );
};
export default CardShop;
