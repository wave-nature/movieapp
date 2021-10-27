import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>moviephile</div>
      <nav className={classes.nav}>
        <NavLink activeClassName={classes.active__link} to="/movies">
          All Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
