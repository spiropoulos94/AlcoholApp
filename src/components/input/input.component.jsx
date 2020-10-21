import React,{useState} from 'react';
import "./input.styles.scss";

const Input = (props) => {

    const [inputValue, setInputValue] = useState("")



    return (
        <div  className="input-component">
            <label htmlFor="cocktailSearch"/>
            <input  onChange={props.handleChange} type="text" id="cocktailSearch" name="cocktailSearch" defaultValue={inputValue} />
            <button  {...props} className="input-button" >Search</button>
        </div>
    );
};

export default Input;