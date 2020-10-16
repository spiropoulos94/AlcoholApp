import React from 'react';
import "./selection-screen.styles.scss";
import Grid from "../../components/grid/grid.component";

const SelectionScreen = () => {
    return (
        <div className="selection-screen">
            <h2 className="selection-screen-heading">How would you prefer to find your next cocktail?</h2>
            <Grid/>
        </div>
    );
};

export default SelectionScreen;
