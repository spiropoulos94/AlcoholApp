import React,{useState} from 'react';
import "./input.styles.scss";

const Input = (props) => {

    return (
        <div  onChange={props.handleChange}  className="input-component">
            <label htmlFor="cocktailSearch"/>
            <input  type="text" id="cocktailSearch" name="cocktailSearch" defaultValue="" />
            <button onClick={props.fetchCocktailData}  className="input-button" >Search</button>
        </div>
    );
};

export default Input;