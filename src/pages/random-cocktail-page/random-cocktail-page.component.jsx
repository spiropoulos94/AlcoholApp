import React, {useState} from 'react';
import "./random-cocktail-page.styles.scss";
import CocktailCard from "../../components/cocktail-card/cocktail-card.component";
import {Link} from "react-router-dom";
import Button from "../../components/button/button.component";
import Navigation from "../../components/navigation/navigation.component";

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
            })
    }

    return (
        <div className="random-cocktail-page">
            <Navigation/>
            <h2 className="page-title" >Get Random Cocktail</h2>
            {cocktailData ? <CocktailCard data={cocktailData}/> :
                <img className="random-page-gif-image" src="https://media.giphy.com/media/l3fQaE2lbSAPUnB04/source.gif"/>}


            <Button onClick={fetchCocktailData} >
                <img style={{background: 'inherit '}}
                                                      src="https://www.flaticon.com/svg/static/icons/svg/2776/2776157.svg"
                                                      width="20px"/>
                <img style={{background: 'inherit '}}
                                                                         src="https://www.flaticon.com/svg/static/icons/svg/2776/2776157.svg"
                                                                         width="20px"/>
                <img style={{background: 'inherit '}}
                                                                                            src="https://www.flaticon.com/svg/static/icons/svg/2776/2776157.svg"
                                                                                            width="20px"/></Button></div>
    );
};

export default RandomCocktailPage;
