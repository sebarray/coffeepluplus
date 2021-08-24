import React, { useEffect, useState } from "react";
import Itemdetail from "../Component/itemDetail/Itemdetail";
const Detailcontainer = ({ match }) => {
  const [product, setProduct] = useState([]);
  let itemid = match.params.id;

  useEffect(() => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    if (product.length < 1) {
      fetch(`https://coffeego.herokuapp.com/coffeeId/${itemid}`, requestOptions)
        .then((response) => response.json())
        .then((result) => setProduct(result))
        .catch((error) => console.log("error", error));
    }
  }, [product.length, itemid]);

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
