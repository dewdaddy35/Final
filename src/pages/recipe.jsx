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
    <div className="recipe">
      <h1>Recipes</h1>
      <div className="recipe-img">
        <img src="/images/fish.jpg" alt="" />
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
<div className="post-list">
        { allPosts.map(post => 
            <div className="post"  key={post.id}> 
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div> 
        )}

      </div>
    </div>
    
  );
}

export default Recipe;
