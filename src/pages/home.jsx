import "./home.css";


function Home() {

  

  return (
    <div className="home">
      <h1> Show Us How You Burn!!! </h1>
      <section className="section">
        <div>
          <img className="img-main" src="./images/bbqgrill.png" alt="" />
         
        </div>
        <div>
          <p className="home">
            This website was design to allow cooking enthusiast to search,
            upload and save recipes. You can post picture of recipes you created
            and comment on those recipes. Share your own recipe, cooking styles
            and show the world how excel in the kitchen, on the grill, with a
            smoker or even on the open flame.
          </p>
          <div className="flex">
          <p>Shrimp and Grits</p>
          <img className="img-p" src="./images/shrimpandgrits.webp" alt="" />
          <p>Salmon</p>
          <img className="img-p2" src="./images/salmon.png" alt="" />
          </div>
        </div>
      </section>
     
    </div>
  );
}

export default Home;
