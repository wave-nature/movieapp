import React from "react";
import Search from "./Search";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <section className={classes.section__header}>
      <Search />
    </section>
  );
};

export default Header;
