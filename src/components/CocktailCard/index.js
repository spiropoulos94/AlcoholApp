import React from "react";
import "./style.css";
import { Container } from "@material-ui/core";

// ADD A CARD FROM MATERIAL UI TO PROPERLY DISPLAY THE COCKTAIL STATS

function CocktailTab({ data }) {
  return (
    <div>
      <h3>{data["strDrink"]}</h3>
      <div className="container">
        <section className="image">
          <img
            style={{ width: "25vw" }}
            src={data["strDrinkThumb"]}
            alt="cocktail photo"
          ></img>
        </section>
        <section className="info">
          <ul
            style={{
              margin: "auto",
              fontSize: "20px",
            }}
          >
            <li>
              Alcoholic:
              {data.strAlcoholic === "Alcoholic" ? (
                <span> Yes </span>
              ) : (
                <span> No </span>
              )}
            </li>
            <li>Glass: {data["strGlass"]}</li>
          </ul>
          <h4>Ingredients</h4>
          <ul>{}</ul>
          <h3>How to make it:</h3>
          <p className="description">{data["strInstructions"]}</p>
        </section>
      </div>
    </div>
  );
}

export default CocktailTab;
