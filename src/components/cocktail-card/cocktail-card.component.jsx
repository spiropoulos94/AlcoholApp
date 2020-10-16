import React from 'react';
import "./cocktail-card.styles.scss";

const CocktailCard = ({data}) => {
    let {strDrink, strAlcoholic, strDrinkThumb, strCategory, strInstructions} = data


    let ingredients = [];
    let measures = [];

    for (let ingredient in data) {
        if (ingredient.includes("strIngredient")) {
            if (data[ingredient]) {
                ingredients.push(data[ingredient])
            }
        }
    }

    for (let measure in data) {
        if (measure.includes("strMeasure")) {
            if (data[measure]) {
                measures.push(data[measure])
            }
        }
    }

    //console.log(ingredients)
    //console.log(measures)

    var ingredientsAndMeasures = ingredients.map((e, i) => ` ${e} (${measures[i]})`);

    console.log(ingredientsAndMeasures)



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
                <p className='card-info-category'>{strCategory} / {strAlcoholic}</p>
                <div className="ingredients">
                    <div className="ingredients-title">Ingredients</div>

                    {ingredientsAndMeasures && ingredientsAndMeasures.map(ingredient =>
                        <div key={ingredient} className='input-group'>
                            <input id={ingredient} type="checkbox"/>
                            <label htmlFor={ingredient}>{ingredient}</label>
                        </div>
                    )}
                </div>
                <div className="mixing-title">
                    Mixing
                    <p className="mixing-content">
                        {strInstructions}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default CocktailCard;
