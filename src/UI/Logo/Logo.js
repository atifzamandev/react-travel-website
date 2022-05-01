import React from "react";
import LeafSvg from "../../assets/LeafSVG";
import classes from "./Logo.module.scss";

const Logo = () => {
  return (
    <a href="/" className={classes.logo}>
      <LeafSvg fillColor={"white"} />
      <span>Tropic</span>
    </a>
  );
};

export default Logo;
