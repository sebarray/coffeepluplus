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
import Login from "../../Component/Login/Login";
import { db } from "../../firebase";

const FormPago = () => {
  const { itemCart, clear, login } = useContext(cartContext);
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
    let obj;
    let f = document.getElementById("formpago");
    let nombre = f.nombre.value;
    let celular = f.celular.value;
    let email = f.email.value;
    if ((nombre !== "" && email !== "" && celular !== "") || login !== {}) {
      let buy = new buyer(nombre, celular, email, items);
      login !== {}
        ? (obj = {
            email: login.email,
            nombre: login.name,
            items: items,
            price: pricetotal,
            time: Timestamp.fromDate(new Date()),
          })
        : (obj = {
            nombre: buy.nombre,
            email: buy.email,
            celular: buy.celular,
            items: items,
            price: pricetotal,
            time: Timestamp.fromDate(new Date()),
          });

      try {
        const docRef = await addDoc(collection(db, "compras"), obj);

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
      </form>
      <Login />
      <button
        type="submit"
        placeholder="submit"
        onClick={ticket}
        className="btn btn-primary m-3"
        value="finalizar"
      >
        finalizar compra
      </button>

      {ticketid !== "" && (
        <h3 className="fs-2">tu ticket de compra es {ticketid}</h3>
      )}
    </div>
  );
};

export default FormPago;
