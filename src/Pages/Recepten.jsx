import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Recipe from "../Components/Recipe";
import Alert from "../Components/Alert";
import axios from "axios";
import Navbar from "../Components/Navbar";


function Recepten() {

    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");

    const APP_ID = "7971cb3b";
    const APP_KEY = "97180fb3488e83f0c8cb6fcfdc32a846";

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async () => {
        if (query !== "") {
            const result = await axios.get(url);
            if (!result.data.more) {
                return setAlert("No food with such name");
            }
            console.log(result);
            setRecipes(result.data.hits);
            setQuery("");
            setAlert("");
        } else {
            setAlert("Please fill the form");
        }
    };

    const onChange = e => setQuery(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        getData();
    };

    return (
        <>
            <Navbar/>
            <div className="container search">
                <div className="fb-item">
                    <h1>Recipes</h1>
                    <h1>Food Searching App</h1>
                    <h2>Hier kunt u aanvinken wat u graag wil eten en gerechten met uw dieetwensen kan uitkiezen.</h2>
                </div>
                <div className="fb-item search-bar">
                    <form onSubmit={onSubmit} className="search-form recepten-form">
                        {alert !== "" && <Alert alert={alert} />}
                        <input
                            type="text"
                            name="query"
                            onChange={onChange}
                            value={query}
                            autoComplete="off"
                            placeholder="Search Food"
                        />
                        <button type="submit" value="Search">Search</button>
                    </form>
                </div>
                <div className="fb-item">
                    <div className="recipes">
                        {recipes !== [] &&
                            recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Recepten;
