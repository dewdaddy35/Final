import { Link, useNavigate } from "react-router-dom";
import{  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./navbar.css";

/* replace <a for <Link and </a for </Link
replage href= for to= */

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("You have successfully logged out!");
    navigate("/login");
  };

  const isLoggedIn = localStorage.getItem("token");
  return (
    <div className="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Burning Recipes
        </Link>

        <Link className="nav-link-active" aria-current="page" to="/">
          Home
        </Link>

        <Link className="nav-link-active" aria-current="page" to="/recipe">
          Recipes
        </Link>

        <Link className="nav-link-active" aria-current="page" to="/about">
          About Us
        </Link>

        {isLoggedIn ? (
          <Link className="nav-link-active" onClick={handleLogout}>
            Logout
          </Link>
        ) : (
          <Link className="nav-link-active" to="/login">
            Login / Register
          </Link>
        )}
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
export default Navbar;
