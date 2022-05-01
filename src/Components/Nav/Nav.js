import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import classes from "../Nav/Nav.module.scss";

const Nav = ({ isMenu, menuToggle }) => {
  const navigation = useNavigate();

  return (
    <nav className={isMenu ? classes.menu__nav : classes.nav}>
      <ul>
        <li onClick={menuToggle}>
          <Link to="/locations">Locations</Link>
        </li>
        <li onClick={menuToggle}>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li onClick={menuToggle}>
          <Link to="/learnmore">Learn More</Link>
        </li>
      </ul>
      <Button
        outline
        className={classes.booknow}
        onClick={() => {
            navigation("/booknow");
            menuToggle();
          
        }}
      >
        Book Now a
      </Button>
    </nav>
  );
};

export default Nav;
