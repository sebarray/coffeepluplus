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
