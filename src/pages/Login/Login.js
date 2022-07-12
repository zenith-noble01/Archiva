import { Facebook, Google, LinkedIn } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [see, setSee] = useState(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const { email, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="app__login">
      <div className="login__header">
        <h1>Login</h1>
        <p>
          Don't have an account?{" "}
          <Link to="/register">Create an account here</Link>
        </p>
      </div>
      <div className="login__container">
        <div className="container__header">
          <div className="header__btn">
            <Google /> <span>Google</span>
          </div>
          <div className="header__btn">
            <Facebook /> <span>Facebook</span>
          </div>
          <div className="header__btn">
            <LinkedIn /> <span>LinkedIn</span>
          </div>
        </div>
        <div className="OrLine">
          <p></p>
          <span>OR</span>
        </div>

        <form className="login__form" onSubmit={handleSubmit}>
          <div className="input__container">
            <label>
              <span>Email</span>
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              name="email"
              onChange={handleOnChange}
            />
          </div>
          <div className="input__container">
            <label>
              <span> Enter pasword</span>

              <p onClick={() => setSee(!see)}>
                {see ? <VisibilityIcon /> : <VisibilityOffIcon />}
                <span>{see ? "Show password" : "Hide password"}</span>
              </p>
            </label>
            <input
              type={see ? "password" : "text"}
              placeholder="Type in your password"
              onChange={handleOnChange}
              value={password}
              name="password"
            />
          </div>
          <p className="forgot">
            <Link to="/reset-password">Forgot your password?</Link>
          </p>
          <div className="check">
            <input type="checkbox" name="" id="check" />
            <label htmlFor="check">Remember me</label>
          </div>

          <button
            type="submit"
            disabled={email.length <= 0 || password.length <= 0}
          >
            Login
          </button>

          <p className="by">
            By continuing, you agree to Archiva's Terms of Service and Privacy
            Policy.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
