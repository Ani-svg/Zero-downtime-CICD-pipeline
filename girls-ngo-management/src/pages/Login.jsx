import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login.css";

import logo from "../assets/logo.png";
import background from "../assets/login-bg.png";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (email === "admin@gmail.com" && password === "admin123") {
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div
      className="login-page"
      style={{
       backgroundImage: `linear-gradient(rgba(255,255,255,0.25), rgba(255,240,240,0.25)), url(${background})`,
      }}
    >
      <div className="login-card">

        <img
          src={logo}
          alt="Women For Girls"
          className="login-logo"
        />

        <h1 className="login-title">
          Welcome to Women For Girls
        </h1>

        <p className="login-subtitle">
          Sign in to access the care platform
        </p>

        <div className="input-group">
          <label>Username</label>

          <input
            type="email"
            placeholder="you@mentorhub.app"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>

          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="login-btn"
          onClick={login}
        >
          Sign in
        </button>

      </div>
    </div>
  );
}

export default Login;