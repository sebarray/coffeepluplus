import "./navStyle.css";
import CartWidget from "../CartWidget/CartWidget";
import NavUl from "../NavUl/NavUl";

const NavBar = () => {
  return (
    <nav className="mt-4">
      <ul className="d-flex p-0 justify-content-center container">
        <NavUl />
        <CartWidget />
      </ul>
    </nav>
  );
};

export default NavBar;
