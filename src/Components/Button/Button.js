import React from "react";
import "./Button.scss";

const Button = ({ name }) => {
  return <button className="app__button">{name}</button>;
};

export default Button;
