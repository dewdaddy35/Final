import { Link } from "react-router-dom";
import "./navbar.css";

/* replace <a for <Link and </a for </Link
replage href= for to= */

function Navbar() {
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

        <Link className="nav-link-active" aria-current="page" to="/login">
          Login / Register
        </Link>
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
