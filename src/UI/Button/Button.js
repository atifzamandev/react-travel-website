import React from "react";
import classes from "./../Button/Button.module.scss";

const Button = ({ outline, children, onClick, to }) => {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
      className={`${classes.button} ${outline ? classes.outline : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
