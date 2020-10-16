import React,{useState} from 'react';
import "./random-cocktail-page.styles.scss";
import Button from "../../components/button/button.component";
import CocktailCard from "../../components/cocktail-card/cocktail-card.component";
import {Link} from "react-router-dom";

const RandomCocktailPage = () => {

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
            })}

    return (
        <div className="random-cocktail-page">
            <h2 className="page-title" onClick={fetchCocktailData}>Get Random Cocktail</h2>
            {cocktailData ?  <CocktailCard data={cocktailData} /> : <img  src="https://media.giphy.com/media/l3fQaE2lbSAPUnB04/source.gif" /> }
        <Link className="link" to="/">Go back</Link>
        </div>
    );
};

export default RandomCocktailPage;
