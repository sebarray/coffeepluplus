import React, { useContext, useState, useEffect } from "react";
import buyer from "./buyer";
import { cartContext } from "../../contexCart/Context";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
const FormPago = () => {
  const { itemCart, clear } = useContext(cartContext);
  const [items, Setitems] = useState([]);
  const [pricetotal, setPrice] = useState([]);
  const [ticketid, Settickedid] = useState("");
  useEffect(() => {
    itemCart.forEach((item) => {
      items.push({
        Id: item.Id,
        Name: item.Name,
        Cuantity: item.Cuantity,
        Price: item.Price,
        Img: item.Img,
      });

      setPrice(
        itemCart.reduce((acc, item) => {
          return (acc += item.Price * item.Cuantity);
        }, 0)
      );

      Setitems(items);
    });
  }, [items, Setitems, itemCart]);

  const ticket = async (e) => {
    e.preventDefault();
    let f = document.getElementById("formpago");
    let nombre = f.nombre.value;
    let celular = f.celular.value;
    let email = f.email.value;
    if (nombre !== "" && email !== "" && celular !== "") {
      let buy = new buyer(nombre, celular, email, items);

      try {
        const docRef = await addDoc(collection(db, "compras"), {
          nombre: buy.nombre,
          email: buy.email,
          celular: buy.celular,
          items: items,
          price: pricetotal,
          time: Timestamp.fromDate(new Date()),
        });

        itemCart.forEach(async (item) => {
          const washingtonRef = doc(db, "products", item.Id);
          let nowStock = item.Stock - item.Cuantity;
          await updateDoc(washingtonRef, {
            Stock: nowStock,
          });
        });

        console.log("Document written with ID: ", docRef.id);
        Settickedid(docRef.id);

        clear();
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      console.log("invalido");
    }
  };

  return (
    <div className="container w-50  jutify-content-center mt-5 pt-5">
      <form id="formpago" className="d-flex flex-column  mt-5 pt-5 ">
        <input
          type="text"
          placeholder="nombre"
          name="nombre"
          className="m-3"
        ></input>
        <input
          type="email"
          placeholder="email"
          name="email"
          className="m-3"
        ></input>
        <input
          type="number"
          placeholder="celular"
          name="celular"
          className="m-3"
        ></input>
        <input
          type="submit"
          placeholder="submit"
          onClick={ticket}
          className="btn btn-primary"
          value="finalizar"
        ></input>
      </form>
      <h1>{ticketid}</h1>
    </div>
  );
};

export default FormPago;
