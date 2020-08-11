import React from "react";
import { TextField } from "@material-ui/core";

function searchByName() {
  return (
    <div>
      <h2>Search By Name</h2>
      <TextField
        margin="dense"
        placeholder="Cocktail name is..."
        type="text"
      ></TextField>
    </div>
  );
}

export default searchByName;
