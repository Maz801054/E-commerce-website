import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark ps-5 pe-5 pt-3 pb-3"
        style={{ backgroundColor: "#45526e" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h1>SawanFasion</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="./"
                  className="nav-link activ"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="./products"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="./"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-light" type="submit">
                <i className="fa-solid fa-right-to-bracket"></i> Login
              </button>
              <button className="btn btn-outline-light ms-3 me-3" type="submit">
                <i className="fa-solid fa-user-plus"></i> Register
              </button>
              <button className="btn btn-outline-light" type="submit">
                <i className="fa-solid fa-cart-shopping"></i> Cart
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
