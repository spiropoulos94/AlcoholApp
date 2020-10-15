import React from "react";
import "./App.scss";
import {BrowserRouter as Router} from "react-router-dom";
import {ReactQueryDevtools} from "react-query-devtools";
import {Button} from "@material-ui/core";
import WelcomeScreen from "./components/welcomescreen/welcome-screen.component";
//import { useQuery } from "react-query";

//https://icons8.com/illustrations/cocktail
//https://dev.to/theme_selection/best-design-resources-websites-every-developer-should-bookmark-1p5d
//https://freellustrations.com/


function App() {
    return (
        <Router>
            <div className="App">
                <WelcomeScreen/>
                <ReactQueryDevtools initialIsOpen/>
            </div>
        </Router>
    );
}

export default App;
