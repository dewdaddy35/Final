import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  function sendToRecipe() {
    navigate("/recipe");
    console.log("Sending to Recipe page");
  }

  return (
    <div className="container-home">
      <div className="home-page">
        <h1> Show Us How You Burn!!! </h1>
        <section className="section">
          <div className="home-bbq">
            <img className="img-main" src="./images/smokerHome.png" alt="" />
            <p className="home-text">
              This website was designed to allow cooking enthusiasts to search,
              upload, and save recipes. You can post pictures of recipes you've
              created and comment on those recipes. Share your own recipes,
              cooking styles, and show the world how you excel in the kitchen,
              on the grill, with a smoker, or even on the open flame.
            </p>
          </div>
          <div className="recipe-image row">
            <div className="col-md-6">
              <img src="./images/pulledPorkTwo.png" alt="" />
            </div>
            <div className="col-md-6">
              <img src="./images/sliders.png" alt="" />
            </div>
          </div>
          <div className="recipe-text">
            <p>Click here for recipes</p>
            <button onClick={() => sendToRecipe()}>Explore Recipes</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
