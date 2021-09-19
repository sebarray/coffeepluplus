import React from "react";
import { useEffect, useState } from "react";
import CardShop from "../CardShop/CardShop";
import Loadco from "../Loadco/Loadco";
import "./itemcontainer.css";
import { db } from "../../firebase";
import { collection, query, getDocs } from "firebase/firestore";
const ItemListContainer = (props) => {
  const [prod, setProd] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const getproducts = async () => {
      const dataf = [];
      const q = query(collection(db, "products"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        dataf.push({ ...doc.data(), Id: doc.id });
      });
      setProd(dataf);
      setLoad(false);
    };
    getproducts();
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
