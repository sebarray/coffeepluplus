import React, { useState, useEffect } from "react";
import CardShop from "../../Component/CardShop/CardShop";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase";
const Dest = () => {
  const [prod, setProduct] = useState([]);

  useEffect(() => {
    const getcat = async () => {
      const dataf = [];
      const q = query(collection(db, "products"), where("dest", "==", true));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        dataf.push({ ...doc.data(), Id: doc.id });
      });
      setProduct(dataf);
    };
    getcat();
  }, [setProduct]);
  return (
    <div className="m-5 p-5">
      <h3 className="text-center">Productos destacados</h3>
      <div className="container ">
        <div className="row d-flex justify-content-center">
          {prod.map((product) => {
            return <CardShop key={product.Id} data={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Dest;
