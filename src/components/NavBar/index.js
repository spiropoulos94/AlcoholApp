import React from "react";
import style from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";

function NavBar(props) {
  return (
    <div className={style.nikos}>
      <NavLink className={style.link} to="/random">
        <Button variant="contained" color="primary">
          Random Cocktail
        </Button>
      </NavLink>
      <NavLink className={style.link} to="/name">
        <Button variant="contained" color="primary">
          Search by Name
        </Button>
      </NavLink>
      <NavLink className={style.link} to="/ingredients">
        <Button variant="contained" color="primary">
          Search by ingredients
        </Button>
      </NavLink>
    </div>
  );
}

export default NavBar;
