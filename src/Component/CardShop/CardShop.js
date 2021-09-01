import React from "react";
import "./cardshopStyle.css";
import { Link } from "react-router-dom";
const CardShop = ({ data }) => {
  return (
    <div className="card wcard  m-3 mt-4 ">
      <Link to={`/detail/${data.Id}`}>
        <img src={data.Img} className="card-img-top himg" alt="producto"></img>
      </Link>
      <div className="card-body hcard">
        <h3 className="text-center m-0">${data.Price}</h3>
        <h5 className="card-title text-center fs-3 ">{data.Name}</h5>
      </div>
    </div>
  );
};
export default CardShop;
