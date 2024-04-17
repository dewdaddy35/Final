//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Recipe from "./pages/recipe";
import Footer from "./components/footer";
import Blog from "./pages/blog";
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
          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="/recipeDetail/:id" element={<RecipeDetail />} />"
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;