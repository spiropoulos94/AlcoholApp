import React from "react";
import "./App.scss";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import WelcomeScreen from "./pages/welcomescreen/welcome-screen.component";
import SelectionScreen from "./pages/selection-screen/selection-screen.component";
import RandomCocktailPage from "./pages/random-cocktail-page/random-cocktail-page.component";
import SearchByNamePage from "./pages/search-by-name-page/search-by-name-page.component";
import SearchByIngredients from "./pages/search-by-ingredients/search-by-ingredients.component";

//https://icons8.com/illustrations/cocktail
//https://dev.to/theme_selection/best-design-resources-websites-every-developer-should-bookmark-1p5d
//https://freellustrations.com/


function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={WelcomeScreen}/>
                    <Route exact path="/select" component = {SelectionScreen}/>
                    <Route exact path="/select/random" component = {RandomCocktailPage}/>
                    <Route exact path="/select/name" component = {SearchByNamePage}/>
                    <Route exact path="/select/ingredients" component = {SearchByIngredients}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
