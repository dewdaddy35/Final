import "./footer.css";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
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
                  <Link className="nav-link" aria-current="page" to="#">
                    Beef
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Chicken
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Pork
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Seafood
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Recipes
                  </Link>
                </li>
              </ul>
            </div>
          
    
        <div className="img">
          <i className="fa-brands fa-square-twitter"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-pinterest"></i>
        </div>
        </div>
        </nav>
    </div>
  );
}

export default Footer;
