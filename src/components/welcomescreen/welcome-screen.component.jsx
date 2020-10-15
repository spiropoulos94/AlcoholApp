import React from 'react';
import './welcome-screen.styles.scss';
import {Button} from "@material-ui/core";


const WelcomeScreen = () => {
    return (
        <div className='welcome-screen'>
            <h1 className="welcome-text"> Find a nice cocktail! </h1>
            <Button onClick={()=> alert("clicked")} variant="contained" color="secondary" size="large">Show me</Button>
        </div>
    );
};

export default WelcomeScreen;