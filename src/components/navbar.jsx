import "./navbar.css";
import Button from 'react-bootstrap/Button';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";

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
      <Link className="nav-link-active" aria-current="page" to="/about">
        About Us
      </Link>
      <Link className="nav-link-active" aria-current="page" to="/recipe">
        Recipes
      </Link>
      <Dropdown as={ButtonGroup}>
      <Button  href="" variant="danger">Kitchen Tips</Button>

      <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="/smoker">Smoker</Dropdown.Item>
        <Dropdown.Item href="/airfryer">Airfryer</Dropdown.Item>
        <Dropdown.Item href="/bbqgrill">BBQ Grill</Dropdown.Item>
        <Dropdown.Item href="/slowcooker">Slow Cooker</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      <Dropdown as={ButtonGroup}>
      <Button  href="" variant="danger">Ingredients</Button>

      <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="/beef">Beef</Dropdown.Item>
        <Dropdown.Item href="/pork">Pork</Dropdown.Item>
        <Dropdown.Item href="/seafood">Seafood</Dropdown.Item>
        <Dropdown.Item href="/chicken">Chicken</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary " type="submit">
              Search
            </button>
          </form>
          </div>
          
 </div>
        
  );
}

export default Navbar;
