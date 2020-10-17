import React from 'react';
import "./input.styles.scss";

const Input = () => {
    return (
        <form className="input-component">
            <label htmlFor="cocktailSearch"/>
            <input type="text" id="cocktailSearch" name="cocktailSearch" defaultValue="" />
            <button className="input-button" type="submit">Search</button>
        </form>
    );
};

export default Input;