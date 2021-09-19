import swal from "sweetalert";

export const stocklimit = () => {
  swal({
    title: "upps",
    text: "es todo el stock que tenemos",
    icon: "error",
    timer: "2000",
  });
};
export const stockcero = () => {
  swal({
    title: "upps",
    text: "no tenemos stock de este producto",
    icon: "error",
    timer: "2000",
  });
};
export const stockincrement = () => {
  swal({
    title: "upps",
    text: "icremente la cantidad del producto",
    icon: "error",
    timer: "2000",
  });
};
export const addok = () => {
  swal({
    title: "genial!",
    text: "el producto se añadio al carrito",
    icon: "success",
    timer: "2000",
  });
};
export const stockrev = () => {
  swal({
    title: "upps",
    text: "nuestro stock es limitado revise su carrito",
    icon: "error",
    timer: "2000",
  });
};

export const compraok = () => {
  swal({
    title: "genial!",
    text: "su pedido ya fue realizado ",
    icon: "success",
  });
};

export const mailerr = () => {
  swal({
    title: "upps",
    text: "verifique que su ambos email sean iguales",
    icon: "error",
  });
};
export const cartnull = () => {
  swal({
    title: "upps",
    text: "sucarrito esta vacio",
    icon: "error",
  });
};

export const logerr = () => {
  swal({
    title: "upps",
    text: "elija una aopcion de logueo",
    icon: "error",
  });
};
