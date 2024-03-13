import "./recipe.css";

function Recipe() {
  return (
    <div className="recipe">
      <h1>Recipes</h1>
      <div className="recipe-img">
        <img src="/images/cutBeef.png" alt="" />
      </div>
      <form className="form-inline search my-2 my-lg-0">
  <input
    className="form-control search mr-sm-2"
    type="search"
    placeholder="Search for a recipe"
    aria-label="Search"
  />
  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
    Search
  </button>
</form>

    </div>
    
  );
}

export default Recipe;
