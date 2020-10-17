import React, {useState} from 'react';
import CocktailCard from "../../components/cocktail-card/cocktail-card.component";
import {Link} from "react-router-dom";
import Button from "../../components/button/button.component";
import Navigation from "../../components/navigation/navigation.component";
import "./search-by-name-page.styles.scss";

const SearchByNamePage = () => {

    let url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

    let [cocktailData, setCocktailData] = useState(null)
    let [isLoading, setIsLoading] = useState(true)

    const fetchCocktailData = () => {
        setIsLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCocktailData(data.drinks[0])
                setIsLoading(false)
            })
    }

    function InputComponent(){
        return (
            <form className="input-component">
                <label htmlFor="cocktailSearch"/>
                <input type="text" id="cocktailSearch" name="cocktailSearch" defaultValue="" />
                <Button type="submit">Search</Button>
            </form>
        )
    }

    return (
        <div className="random-cocktail-page">
            <Navigation/>
            <h2 className="page-title" >Search By Name</h2>
            <InputComponent/>

        </div>
    );
};

export default SearchByNamePage;
