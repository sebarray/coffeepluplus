import React, { useEffect, useState } from "react";
import Itemdetail from "../Component/itemDetail/Itemdetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
const Detailcontainer = ({ match }) => {
  const [product, setProduct] = useState([]);
  let itemid = match.params.id;

  useEffect(() => {
    const getdetail = async () => {
      const dataf = [];
      const docRef = doc(db, "products", itemid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        dataf.push({ ...docSnap.data(), Id: itemid });
        setProduct(dataf);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    getdetail();
  }, [itemid]);

  return (
    <div className="m-5 p-5">
      {product.map((data) => {
        return <Itemdetail key={data.Id} data={data} />;
      })}
      ;
    </div>
  );
};

export default Detailcontainer;
