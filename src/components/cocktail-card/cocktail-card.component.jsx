import React from 'react';
import "./cocktail-card.styles.scss";

const CocktailCard = ({data}) => {
    let {strDrink, strAlcoholic, strDrinkThumb, strCategory } = data
    return (
        <div className="cocktail-card">
            <div className='card-image'>
                <figure>
                    <img src={strDrinkThumb}
                         alt="Trulli"/>
                    <figcaption>{strDrink}</figcaption>
                </figure>
            </div>
            <div className='card-info'>
                <p className='card-info-title'>{strDrink}</p>
                <p className='card-info-category'>{strCategory} {strAlcoholic}</p>
                <div className="ingredients">
                    Ingredients
                </div>
            </div>

        </div>
    );
};

export default CocktailCard;
