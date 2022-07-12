import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import { logo } from "../../Images";
import { Button } from "../";

const Navbar = () => {
  return (
    <div className="app__navbar">
      <div className="nav__left">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className="nav__right">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Testimonials">Testimonials</NavLink>
          </li>
          <Button name="LogIn" />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
