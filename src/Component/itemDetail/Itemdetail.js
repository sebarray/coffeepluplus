import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const Itemdetail = ({ data }) => {
  return (
    <div className="row">
      <img src={data.Img} className="w-50 h-50" alt="producto"></img>

      <div className=" flex-column w-25 pt-5 mt-5">
        <h2 className="fs-1">{data.Name}</h2>
        <h3 className="fs-3">{data.Description}</h3>
        <h3 className="fs-3">Stock: {data.Stock}</h3>
        <ItemCount stock={data.Stock} initial={1} />
      </div>
    </div>
  );
};

export default Itemdetail;
