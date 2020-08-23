import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <h1>Find a nice cocktail!</h1>
        <Navbar />
      </div>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          backgroundColor: "red",
          justifyContent: "center",
        }}
      >
        <Switch>
          <Route path="/random">Random COcktail</Route>
          <Route path="/name">ENter Name</Route>
          <Route path="/ingredients">Enter Ingredients</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
