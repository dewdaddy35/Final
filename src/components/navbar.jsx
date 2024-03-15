import "./navbar.css";

import { Link } from "react-router-dom";

/* replace <a for <Link and </a for </Link
replage href= for to= */

function Navbar() {
  return (
    
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Burning Recipes
        </Link>
        <Link className="nav-link-active" aria-current="page" to="/beef">
          Beef
        </Link>
        <Link className="nav-link-active" aria-current="page" to="/chicken">
          Chicken
        </Link>
        <Link className="nav-link-active" aria-current="page" to="/pork">
          Pork
        </Link>
        <Link className="nav-link-active" aria-current="page" to="/seafood">
          Seafood
        </Link>
        <Link className="nav-link-active" aria-current="page" to="/recipe">
          Recipes
        </Link>
        
    
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success " type="submit">
                Search
              </button>
            </form>
            </div>
            </nav>
        
  );
}

export default Navbar;
