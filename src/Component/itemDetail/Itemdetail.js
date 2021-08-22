import React from "react";

const Itemdetail = ({ data }) => {
  return (
    <div>
      <img src={data.Img} className="card-img-top himg" alt="producto"></img>
      <h2>{data.Name}</h2>
      <h3>{data.Description}</h3>
      <span>{data.Stock}</span>
    </div>
  );
};

export default Itemdetail;
