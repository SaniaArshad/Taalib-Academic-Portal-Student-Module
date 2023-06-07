import React from "react";
import logo from "../images/logout.png";
import "./nav.css";

function NavBar() {

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ height: "100%" }}
      >
        <a href="./Home"><h1 className="garamond-text logo">Taalib</h1></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a
              className="nav-item nav-link active garamond-text"
              href="/"
              onClick={() => {
                handleLogout();
              }}
            >
              <div className="garamond-text">
                <h4>Logout</h4>
                <img src={logo} alt="Logout" className="logout-image" />
              </div>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
