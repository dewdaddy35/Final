//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Recipe from "./pages/recipe";
import Footer from "./components/footer";
import Beef from "./pages/beef";
import Chicken from "./pages/chicken";
import Seafood from "./pages/seafood";
import Pork from "./pages/pork";
import Rubs from "./pages/rubs";
import Blog from "./pages/blog";
import Slowcooker from "./pages/slowcooker";
import Smoker from "./pages/smoker";
import Airfryer from "./pages/airfryer";
import Bbqgrill from "./pages/bbqgrill";
import Registration from "./pages/registration";
import Login from "./pages/login";
import About from "./pages/about";
import RecipeDetail from "./pages/recipeDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/beef" element={<Beef />} />
          <Route path="chicken" element={<Chicken />} />
          <Route path="seafood" element={<Seafood />} />
          <Route path="pork" element={<Pork />} />
          <Route path="rubs" element={<Rubs />} />
          <Route path="blog" element={<Blog />} />
          <Route path="slowcooker" element={<Slowcooker />} />
          <Route path="smoker" element={<Smoker />} />
          <Route path="airfryer" element={<Airfryer />} />
          <Route path="bbqgrill" element={<Bbqgrill />} />
          <Route path="about" element={<About />} />
          <Route path="/recipeDetail/:id" element={<RecipeDetail />} />"
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
