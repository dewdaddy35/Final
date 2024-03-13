//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Recipe from "./pages/recipe";
import Footer from "./components/footer";

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
          <Route path="/recipe" element={<Recipe />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
