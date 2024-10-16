import React, { useState } from "react";
import axios from "axios";

import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  async function register() {
    // Validate email format
    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    // Check if password and confirm password are provided
    if (!password || !cpassword) {
      setError("Password and Confirm Password are required");
      return;
    }

    // Check if passwords match
    if (password !== cpassword) {
      setError("Passwords do not match");
      return;
    }

    const user = {
      name,
      email,
      password,
    };

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const result = (await axios.post("/api/users/register", user)).data;
      console.log(result);
      setSuccess("Registration successful");
      setName("");
      setEmail("");
      setPassword("");
      setCpassword("");
    } catch (error) {
      console.log(error);
      setError("Registration failed. Please try again.");
    }

    setLoading(false);
  }

  return (
    <div>
      {loading && <Loader />}
      {error.length > 0 && <Error msg={error} />}
      
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
          {success.length > 0 && <Success msg={success} />}
          <div className="bs">
            <h2>Register</h2>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              type="password"
              className="form-control"
              placeholder="confirm password"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />
            <br />
            {loading ? (
              <div>Registering... Please Wait...</div>
            ) : (
              <button className="btn btn-primary mt-3" onClick={register}>
                Register
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;
