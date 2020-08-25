import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import style from "./components/NavBar/styles.module.css";
import { Button, Container } from "@material-ui/core";
import { ReactQueryDevtools } from "react-query-devtools";
//import { useQuery } from "react-query";

function App() {
  return (
    <Router>
      <div>
        <div class="App-header">
          <h1 class="welcome-text"> Find a nice cocktail! </h1>{" "}
        </div>{" "}
        <div className={style.mainScreen}>
          <h2> Choose your search method </h2> <Navbar />
          <Switch>
            <Route path="/random">
              <h2> Random Cocktail </h2>{" "}
              <Button size="large" variant="contained" color="primary">
                Random Cocktail!
              </Button>{" "}
            </Route>{" "}
            <Route path="/name">
              <h2> Enter Name </h2>
            </Route>{" "}
            <Route path="/ingredients">
              <h2> Enter Ingredients </h2>{" "}
            </Route>{" "}
          </Switch>{" "}
        </div>{" "}
        <ReactQueryDevtools initialIsOpen />
      </div>{" "}
    </Router>
  );
}

export default App;
