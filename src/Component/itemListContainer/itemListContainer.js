import React from "react";
import { useEffect, useState } from "react";
import CardShop from "../CardShop/CardShop";
const ItemListContainer = (props) => {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    fetch("https://coffeego.herokuapp.com/coffee")
      .then((response) => response.json())
      .then((result) => setProd(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <h2 className="text-center text-white fs-2">{props.greeting}</h2>
      <div className="container">
        <div className="row d-flex justify-content-between">
          {prod.map((product) => {
            return <CardShop key={product.Id} data={product} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default ItemListContainer;
