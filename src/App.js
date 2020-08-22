import React from "react";

import "./App.css";
import RandomCocktail from "./pages/RandomCocktail";
import SearchByName from "./pages/SearchByName";
import NavBar from "./components/NavBar/index";
import { ReactQueryDevtools } from "react-query-devtools";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ReactQueryDevtools />
      <div className="App">
        <NavBar />

        <Switch>
          <Route path="/random">
            <RandomCocktail />
          </Route>
          <Route path="/name">
            <SearchByName />
          </Route>
          <Route path="/ingredients">
            <div>
              <h2>Search by Ingredients</h2>
            </div>
          </Route>
          <Route path="/">
            <div>
              <h1>Fancy a drink?</h1>

              <div>
                <img
                  className="homepage_img"
                  src="https://images.pexels.com/photos/1028637/pexels-photo-1028637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                ></img>
              </div>
              <h3>
                Use the menu on the right to choose a method of searching!
              </h3>
              <p>Cheers!</p>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
