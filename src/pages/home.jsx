import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="header">
        <h1> Show Us How You Burn!!! </h1>
      </div>
      <div className="back">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="card w-40 p-3" style={{ width: "18rem" }}>
                <img
                  src="/imgs/Beef-Steak.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Beef Recipes</h5>
                  <p className="card-text">
                    Whether it's and Tri-Tip, Porterhouse or T-bone. You can
                    find the recipes to make your mouth water.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Steak Recipes
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card w-40 p-3" style={{ width: "18rem" }}>
                <img
                  src="./imgs/chicken1.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Chicken Recipes</h5>
                  <p className="card-text">
                    Grilled, Roasted or Broiled. You can find it all here.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Chicken Recipes
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card w-40 p-3" style={{ width: "18rem" }}>
                <img src="./imgs/fish.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Fish and Seadfood Recipes</h5>
                  <p className="card-text">
                    For the Seafood and Fish Lovers. Make yourself a chef in
                    your own Kitchen.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Grill Fish Techniques
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card w-40 p-3" style={{ width: "18rem" }}>
                <img
                  src="./imgs/pork1.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Pork Recipes</h5>
                  <p className="card-text">
                    Grill or Smoke your pork to perfection with these recipes.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Rib Recipes and Rubs
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card w-40 p-3" style={{ width: "18rem" }}>
                <img
                  src="./imgs/Lobster.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    How to Cook Lobster Tails at Home
                  </h5>
                  <p className="card-text">
                    Cook tails that melt in your mouth
                  </p>
                  <a href="#" class="btn btn-primary">
                    Lobsters at Home
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card w-40 p-3" style={{ width: "18rem" }}>
                <img
                  src="./imgs/Airfryer.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Air Fryer Recipes</h5>
                  <p className="card-text">
                    New age of cooking with an Airfryer
                  </p>
                  <a href="#" class="btn btn-primary">
                    Air Fryer Recipes
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card w-40 p-3" style={{ width: "18rem" }}>
                <img
                  src="./imgs/shrimp.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Easy Ways to Cook Shrimp</h5>
                  <p className="card-text">
                    Peeling and Cook Shrimp Easy for all to try!!
                  </p>
                  <a href="#" class="btn btn-primary">
                    Shrimp Recipes
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card w-40 p-3" style={{ width: "18rem" }}>
                <img
                  src="./imgs/quick and easy.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Quick And Easy Chicken Recipes</h5>
                  <p className="card-text">Easy to make when on the go.</p>
                  <a href="#" class="btn btn-primary">
                    Quick and Easy Chicken Recipes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
