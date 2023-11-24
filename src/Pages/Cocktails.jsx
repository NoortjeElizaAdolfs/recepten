import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ErrorBox from "../Components/ErrorBox";
import Recipe from "../Components/Recipe";
import axios from "axios";
import Navbar from "../Components/Navbar";


function Cocktails() {
        const APP_ID = "7971cb3b";
        const APP_KEY = "97180fb3488e83f0c8cb6fcfdc32a846";

        const [alcoholFree, setAlcoholFree] = useState(false);
        const [lowSugar, setLowSugar] = useState(false);
        const [recipes, setRecipes] = useState([]);
        const [alert, setAlert] = useState("");
        const [url, setUrl] = useState([`https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${APP_KEY}`]);

        const getData = async () => {
                setUrl([`https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${APP_KEY}`]);
                if(!alcoholFree) {url.push("&health=alcohol-cocktail")}
                if(alcoholFree) {url.push("&health=alcohol-free")}
                if(lowSugar) {url.push("&health=low-sugar")}
                try {
                const result = await axios.get(url.join(""));
                        if (result.ok) {
                                // Handle specific error cases (e.g., 401 Unauthorized)
                                throw new Error(`${result.status} ${result.statusText}`);                   
                        } else if (!result.data.more) {
                                return setAlert("Sorry.. We could't find any recipes. Broaden your search query ");
                        }
                        setRecipes(result.data.hits);
                        setAlert("");
                } catch(error) {
                        return setAlert("Sorry something went wrong");
                }
        };

        const toggleAlcoholFree = () => setAlcoholFree((value) => !value)
        const toggleLowSugar = () => setLowSugar((value) => !value)

        const onSubmit = e => {
                e.preventDefault();
                getData();
        };

        return (
            <>
                    <Navbar/>
                    <main className="container search">
                            <section className="fb-item">
                                    <h1>Food Searching App</h1>
                                    <h2>Hier kunt u aanvinken wat u graag wil eten en gerechten met uw dieetwensen kan uitkiezen.</h2>
                            </section>
                            <section className="fb-item search-bar">
                                    <form onSubmit={onSubmit} className="search-form inspiratie-form">
                                            <div className="checkbox-flexbox">
                                                    <div></div>
                                                    <label className="switch">
                                                            <input
                                                                type="checkbox"
                                                                onChange={toggleAlcoholFree}
                                                            />
                                                            <span className="slider"></span>
                                                            <p>Alcohol free</p>
                                                    </label>
                                                    <label className="switch">

                                                            <input
                                                                type="checkbox"
                                                                onChange={toggleLowSugar}
                                                            />
                                                            <span className="slider"></span>
                                                            <p>Low sugar</p>
                                                    </label>
                                                    <div></div>
                                            </div>
                                            <button type="submit" value="Search">Search</button>
                                            {alert !== "" && <ErrorBox message={alert} />}
                                    </form>
                            </section>
                            <section className="fb-item">
                                    <section className="recipes">
                                            {recipes.length !== 0 &&
                                                recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
                                    </section>
                            </section>
                    </main>
            </>
        );
}
export default Cocktails;
