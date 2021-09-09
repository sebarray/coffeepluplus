import React, { useState, useEffect } from "react";
import CardShop from "../Component/CardShop/CardShop";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../firebase";
const Category = ({ match }) => {
  const [prod, setProduct] = useState([]);
  const id = match.params.id;

  const getcat = async () => {
    const dataf = [];
    const q = query(collection(db, "products"), where("Cat", "==", id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      dataf.push({ ...doc.data(), Id: doc.id });
    });
    setProduct(dataf);
  };

  useEffect(() => {
    getcat();
  }, [id]);
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          {prod.map((product) => {
            return <CardShop key={product.Id} data={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
