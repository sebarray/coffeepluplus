import React from "react";
import { NavLink } from "react-router-dom";
const NavUl = () => {
  return (
    <div className="container-fluid">
      <NavLink className="navbar-brand text-white me-2 fs-2 " to="/">
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
            <NavLink
              className="nav-link active fs-3 text-white"
              aria-current="page"
              to="/"
            >
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link fs-3 text-white" to="/product">
              PRODUCTOS
            </NavLink>
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
