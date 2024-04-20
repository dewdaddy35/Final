import "./footer.css";
import{  toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Footer() {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(true);
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("You have successfully logged out!");
    navigate("/login");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const isLoggedIn = localStorage.getItem("token");
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
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
            id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
             
              <Link className="nav-link-active" aria-current="page" to="/recipe">
          Recipes
        </Link>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
              {isLoggedIn ? (
          <Link className="nav-link-active" onClick={handleLogout}>
            Logout
          </Link>
        ) : (
          <Link className="nav-link-active" to="/login">
            Login / Register
          </Link>
        )}
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
