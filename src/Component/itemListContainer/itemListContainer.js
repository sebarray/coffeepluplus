import React from "react";
import { useEffect, useState } from "react";
import CardShop from "../CardShop/CardShop";
import Loadco from "../Loadco/Loadco";
import "./itemcontainer.css";
const ItemListContainer = (props) => {
  const [prod, setProd] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    fetch("https://coffeego.herokuapp.com/coffee")
      .then((response) => response.json())
      .then((result) => {
        setProd(result);
        setLoad(false);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <h2 className="text-center text-black mt-5 mb-5">{props.greeting}</h2>
      <div className="container">
        <div className="row d-flex justify-content-between">
          {load ? (
            <div className="d-flex justify-content-center">
              <Loadco />
            </div>
          ) : (
            prod.map((product) => {
              return <CardShop key={product.Id} data={product} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};
export default ItemListContainer;
