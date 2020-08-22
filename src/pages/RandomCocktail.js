import React, { useState } from "react";
import { useQuery } from "react-query";
import CocktailTab from "../components/CocktailCard";
import { Button } from "@material-ui/core";

const getRandomCocktail = async () => {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );
  const data = await response.json();
  return data["drinks"][0];
};

function RandomCocktail() {
  const [queryId, setQueryId] = useState("randomCocktail");
  const { status, data } = useQuery(queryId, getRandomCocktail, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  // console.log("cocktailData", data, status);

  return (
    <div>
      <h2>Get a Random Cocktail</h2>
      {/* Tsekare thn etoimh karta gia syntages https://material-ui.com/components/cards/#card */}
      {status === "success" && <CocktailTab data={data} />}
      <div style={{ marginTop: "10px" }}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            setQueryId(`${Math.random()}`);
          }}
        >
          Show me another one
        </Button>
      </div>
    </div>
  );
}

export default RandomCocktail;
