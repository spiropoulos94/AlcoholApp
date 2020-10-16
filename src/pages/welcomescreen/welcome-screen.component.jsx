import React from 'react';
import './welcome-screen.styles.scss';
import Button from "../../components/button/button.component";



const WelcomeScreen = (props) => {
    return (
        <div className='welcome-screen'>
            <h1 className="welcome-text"> Find a nice cocktail! </h1>
            <Button entryButton onClick={()=>props.history.push('/select')}>Let's Go ! </Button>
        </div>
    );
};

export default WelcomeScreen;