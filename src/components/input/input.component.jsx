import React,{useState} from 'react';
import "./input.styles.scss";

const Input = () => {

    const [inputValue, setInputValue] = useState("")

    function handleClick(e){
        e.preventDefault();
        console.log(inputValue)
    }

    return (
        <div  className="input-component">
            <label htmlFor="cocktailSearch"/>
            <input onChange={(e)=>setInputValue(e.target.value)} type="text" id="cocktailSearch" name="cocktailSearch" defaultValue={inputValue} />
            <button onClick={(event)=>handleClick} className="input-button" >Search</button>
        </div>
    );
};

export default Input;