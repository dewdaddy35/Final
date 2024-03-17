import { useEffect,useState } from "react"; 
import "./recipe.css";
import dataService from '../services/dataService';

function Recipe() {

  const [allPosts, setAllPost] = useState([]);


  function loadPost() {
    const data = dataService.getPosts();
    setAllPost(data);

  }

  //when the page loads
  useEffect(function() {
    loadPost();
  },  []);
  
  return (
    <div className="recipe page">
    <h1>Recipes</h1>
    <div className="post-list">
      {allPosts.map(post =>
        <div className="card" style={{ width: "18rem" }} key={post.id}>
          <img src={post.image} className="card-img-top" alt={post.title} />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">Method: {post.method}</p>
            <p className="card-text">Level: {post.level}</p>
            <button className="btn btn-primary">Go to Recipe</button>
          </div>
        </div>
      )}
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
