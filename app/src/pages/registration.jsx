import { useState } from "react";
import "./registration.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import dataService from "../services/dataService";

function Registration() {
  // States for registration
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState(false);
  const navigate = useNavigate();

  // Handling the name change
  const handleName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    let userObj = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      username: email,
      password: password,
    };

    if (!firstName || !lastName || !email || !password) {
      toast.error("All fields need to be filled out");
    } else {
      let response = await dataService.registerUser(userObj);
      console.log("Register", response);

      toast.success("Your account has been created! Please Login to continue.");
      setTimeout(() => navigate("/login"), 3000);
    }
  };

  return (
    <div className="register-form-container">
      <div className="form-container">
        <h1>Register</h1>
        <h5>Please fill in the information below:</h5>
        <form>
          <div className="mb-3">
            <label className="label"></label>
            <input
              onChange={handleName}
              className="form-control"
              value={firstName}
              type="text"
              placeholder="First name"
            />
          </div>
          <div className="mb-3">
            <label className="label"></label>
            <input
              onChange={handleLastName}
              className="form-control"
              value={lastName}
              type="text"
              placeholder="Last name"
            />
          </div>
          <div className="mb-3">
            <label className="label"></label>
            <input
              onChange={handleEmail}
              className="form-control"
              value={email}
              type="email"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <div id="emailHelp" className="form-text"></div>
            <label className="label"></label>
            <input
              onChange={handlePassword}
              className="form-control"
              value={password}
              type="password"
              placeholder="Password"
            />
          </div>
          <button onClick={handleSubmit} className="account" type="submit">
            CREATE MY ACCOUNT
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Registration;
