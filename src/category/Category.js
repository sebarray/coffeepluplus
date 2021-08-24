import React, { useState, useEffect } from "react";
import CardShop from "../Component/CardShop/CardShop";

const Category = ({ match }) => {
  const [prod, setProduct] = useState([]);
  const id = match.params.id;
  useEffect(() => {
    fetch(`https://coffeego.herokuapp.com/category/${id}`)
      .then((response) => response.json())
      .then((result) => setProduct(result))
      .catch((error) => console.log("error", error));
  }, [id]);
  return (
    <div>
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

export default Category;
