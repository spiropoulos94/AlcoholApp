import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div id="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <header>Cocktail Generator App</header>
      </Link>
      <nav>
        <Link to="/random" style={{ textDecoration: "none" }}>
          <li>
            Show a <span>Random Cocktail</span>
          </li>
        </Link>
        <Link to="/name" style={{ textDecoration: "none" }}>
          <li>
            Search by <span>Name</span>
          </li>
        </Link>
        <Link to="/ingredients" style={{ textDecoration: "none" }}>
          <li>
            Search by <span>Ingredients</span>
          </li>
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
