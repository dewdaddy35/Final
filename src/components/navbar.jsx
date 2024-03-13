import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Capstone
        </Link>
        <Link className="nav-link-active" aria-current="page" to="/">
          Home
        </Link>
        <Link className="nav-link-active" aria-current="page" to="/recipe">
          Recipes
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
