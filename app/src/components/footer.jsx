import "./footer.css";

import { Link } from "react-router-dom";
import { useState } from "react";

function Footer() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="footer">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Burning Recipes
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <Link className="nav-link" to="#"></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link-active"
                  aria-current="page"
                  to="/registration"
                >
                  Register Account
                </Link>
              </li>
            </ul>
          </div>

          <div className="img">
            <Link className="fa-brands fa-square-twitter"></Link>
            <Link className="fa-brands fa-facebook"></Link>
            <Link className="fa-brands fa-pinterest"></Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
