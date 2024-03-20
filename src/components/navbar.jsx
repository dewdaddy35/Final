import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
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
        

        <DropdownButton
          variant=""
          size="sm"
          id="dropdown-basic-button"
          title="Kitchen Tips"
          className="dropdown"
        >
          <Dropdown.Item href="/smoker">Smoker</Dropdown.Item>
          <Dropdown.Item href="/airfryer">Airfryer</Dropdown.Item>
          <Dropdown.Item href="/bbqgrill">BBQ Grill</Dropdown.Item>
          <Dropdown.Item href="/slowcooker">Slow Cooker</Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          variant=""
          size="sm"
          id="dropdown-basic-button"
          title="Ingredient"
          className="dropdown"
        >
          <Dropdown.Item href="/beef">Beef</Dropdown.Item>
          <Dropdown.Item href="/pork">Pork</Dropdown.Item>
          <Dropdown.Item href="/chicken">Chicken</Dropdown.Item>
          <Dropdown.Item href="/seafood">Seafood</Dropdown.Item>
        </DropdownButton>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-danger" type="submit">
            Search
          </button>
        </form>
        <Link className="nav-link-active" aria-current="page" to="/about">
          About Us
        </Link>
        <Link className="nav-link-active" aria-current="page" to="/registration">
          Register Account
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
