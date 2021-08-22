import React, { useEffect, useState } from "react";
import axios from "axios";
import Itemdetail from "../Component/itemDetail/Itemdetail";
const Detailcontainer = ({ match }) => {
  const [product, setProduct] = useState([]);
  let itemid = match.params.id;
  useEffect(() => {
    axios(`https://coffeego.herokuapp.com/coffeeId/${itemid}`).then((res) =>
      setProduct(res.data)
    );
  });
  return (
    <div>
      {product.map((data) => {
        return <Itemdetail key={data.Id} data={data} />;
      })}
      ;
    </div>
  );
};

export default Detailcontainer;
