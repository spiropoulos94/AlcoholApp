import React, {useEffect, useState} from 'react';
import Navigation from "../../components/navigation/navigation.component";
import "./search-by-name-page.styles.scss";
import Input from "../../components/input/input.component";

const SearchByNamePage = () => {

        let [cocktailData, setCocktailData] = useState(null)
        let [isLoading, setIsLoading] = useState(true)
        let [cocktailName, setCocktailName] = useState("")

        const fetchCocktailData = (e) => {
            setIsLoading(true)
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setCocktailData(data.drinks[0])
                    setIsLoading(false)
                    console.log(data)
                })
        }

        let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`


        function handleChange(e) {
            setCocktailName(e.target.value)
        }

        useEffect(() => {
            console.log("cocktailName", cocktailName)
            console.log(url)
        }, [cocktailName]);


        return (
            <div className="random-cocktail-page">
                <Navigation/>
                <h2 className="page-title">Search By Name</h2>
                <Input handleChange={handleChange} fetchCocktailData={fetchCocktailData} name={"nikos"}/>

            </div>
        );
    }
;

export default SearchByNamePage;
