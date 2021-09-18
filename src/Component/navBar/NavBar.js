import "./navStyle.css";

import NavUl from "../NavUl/NavUl";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark fixed-top">
      <NavUl />
      <div className="d-inline-block me-5"></div>
    </nav>
  );
};

export default NavBar;
