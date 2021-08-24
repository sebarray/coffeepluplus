import React from "react";
import { NavLink } from "react-router-dom";
const NavUl = () => {
  return (
    <div className="container-fluid">
      <NavLink className="navbar-brand text-white me-2 fs-2  " to="/">
        Cofee ++
      </NavLink>
      <button
        className="navbar-toggler bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link active fs-3 text-white" to="/">
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link fs-3 text-white" to="/product">
              PRODUCTOS
            </NavLink>
          </li>
          <li>
            <div className="dropdown ">
              <button
                className="btn dropdown-toggle p-0 pt-2 text-white fs-3"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CATEGORIA
              </button>

              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <NavLink className="dropdown-item fs-4" to="/category/ar">
                    ARABICA
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item fs-4" to="/category/ca">
                    CANEPHORA
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link fs-3 text-white p-2" to="/local">
              LOCAL
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link fs-3 text-white p-2"
              to="/nosotros"
              tabIndex="-1"
              aria-disabled="true"
            >
              NOSOTROS
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavUl;
