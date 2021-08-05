import "./navStyle.css";

const NavBar = () => {
  return (
    <ul className="d-flex p-0 justify-content-center container">
      <li className=" p-3 text-center">
        <a href="#!" className="decoration-none text-white fs-3">
          Home
        </a>
      </li>
      <li className=" p-3 text-center">
        <a href="#!" className="decoration-none text-white  fs-3">
          Productos
        </a>
      </li>
      <li className=" p-3 text-center">
        <a href="#!" className="decoration-none text-white fs-3">
          Nosotro
        </a>
      </li>
      <li className=" p-3 text-center ">
        <a href="#!" className="decoration-none text-white fs-3">
          Local
        </a>
      </li>
    </ul>
  );
};

export default NavBar;
