import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const Itemdetail = ({ data }) => {
  return (
    <div className="container">
      <img src={data.Img} className="" alt="producto"></img>

      <div className=" flex-column">
        <h2>{data.Name}</h2>
        <h3>{data.Description}</h3>
        <span>{data.Stock}</span>
        <ItemCount stock={data.Stock} initial={1} />
      </div>
    </div>
  );
};

export default Itemdetail;
