import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import dataService from "../services/dataService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  //get the token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = await dataService.login(email, password);
    console.log(response);

    if (!response) {
      toast.error("Invalid Email or Password!");
    } else {
      toast.success("Success!");
      let token = response.token;
      localStorage.setItem("token", token);

      setTimeout(() => navigate("/home"), 2000); //clock//wait
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h1>Login</h1>
        <h5>Please enter your email and password</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label"></label>
            <input
              onChange={handleEmail}
              value={email}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label"
            ></label>
            <input
              onChange={handlePassword}
              value={password}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="log-in">
            LOGIN
          </button>
          <div className="registration-link">
            <Link to="/registration" className="reg-link">
              Don't have an account? Create one
            </Link>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
