import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to your app</h1>
        <Navbar />
      </div>
      <Switch>
        <Route path="/random">Random COcktail</Route>
        <Route path="/name">ENter Name</Route>
        <Route path="/ingredients">Enter Ingredients</Route>
      </Switch>
    </Router>
  );
}

export default App;
