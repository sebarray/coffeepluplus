import React from "react";

const NavUl = () => {
  return (
    <div className="container-fluid">
      <a className="navbar-brand text-white me-2 fs-2 " href="#!">
        Cofee ++
      </a>
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
            <a
              className="nav-link active fs-3 text-white"
              aria-current="page"
              href="#!"
            >
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a class="nav-link fs-3 text-white" href="#!">
              PRODUCTOS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-3 text-white p-2" href="#!">
              LOCAL
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link fs-3 text-white p-2"
              href="#!"
              tabindex="-1"
              aria-disabled="true"
            >
              NOSOTROS
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavUl;
