import React, { useEffect, useState } from "react";
import Itemdetail from "../Component/itemDetail/Itemdetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
const Detailcontainer = ({ match }) => {
  const [product, setProduct] = useState([]);
  let itemid = match.params.id;

  const getdetail = async () => {
    const dataf = [];
    const docRef = doc(db, "products", itemid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      dataf.push({ ...docSnap.data(), Id: itemid });
      setProduct(dataf);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getdetail();
  }, []);

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
