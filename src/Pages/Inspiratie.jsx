import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ErrorBox from "../Components/ErrorBox";
import Recipe from "../Components/Recipe";
import axios from "axios";
import Navbar from "../Components/Navbar";


function Inspiratie() {
const APP_ID = "7971cb3b";
const APP_KEY = "97180fb3488e83f0c8cb6fcfdc32a846";

const [mealType, setMealType] = useState("");
const [cuisineType, setCuisineType] = useState("");
const [diet, setDiet] = useState("");
const [dairyFree, setDaisryFree] = useState(false);
const [glutenFree, setGlutenFree] = useState(false);
const [vegan, setVegan] = useState(false);
const [vegetarian, setVegetarian] = useState(false);
const [recipes, setRecipes] = useState([]);
const [alert, setAlert] = useState("");
const [url, setUrl] = useState([`https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${APP_KEY}`]);

const getData = async () => {
    setUrl([`https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${APP_KEY}`]);
    if(mealType) {url.push(`&mealType=`+mealType)}
    if(cuisineType) {url.push(`&cuisineType=`+cuisineType)}
    if(diet) {url.push(`&diet=`+diet)}
    if(dairyFree) {url.push("&health=dairy-free")}
    if(glutenFree) {url.push("&health=gluten-free")}
    if(vegan) {url.push("&health=vegan")}
    if(vegetarian) {url.push("&health=vegetarian")}
    try {
        const result = await axios.get(url.join(""));                  
        if (!result.data.more) {
                return setAlert("Sorry.. We could't find any recipes. Broaden your search query ");
        }
        setRecipes(result.data.hits);
        setAlert("");
    } catch(error) {
        return setAlert("Sorry something went wrong");
    }
};

const onChangeMealType = e => setMealType(e.target.value);
const onChangeCuisineType = e => setCuisineType(e.target.value);
const onChangeDiet = e => setDiet(e.target.value);
const toggleDaisryFree = () => setDaisryFree((value) => !value)
const toggleGlutenFree = () => setGlutenFree((value) => !value)

const toggleVegan = () => setVegan((value) => !value)
const toggleVegetarian = () => setVegetarian((value) => !value)

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
                        <div>
                            <label className="inspiratie-label" htmlFor={mealType}>Meal type</label>
                            <select
                                id="mealType"
                                name="mealType"
                                value={mealType}
                                onChange={onChangeMealType}
                            >
                                <option></option>
                                <option value="breakfast">Breakfast</option>
                                <option value="brunch">Brunch</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                                <option value="snack">Snack</option>
                                <option value="teatime">Teatime</option>
                            </select>
                            <label className="inspiratie-label" htmlFor={cuisineType}>Cuisine type</label>
                            <select
                                id="cuisineType"
                                name="cuisineType"
                                value={cuisineType}
                                onChange={onChangeCuisineType}
                            >
                                <option></option>
                                <option value="American">American</option>
                                <option value="Asian">Asian</option>
                                <option value="British">British</option>
                                <option value="caribbean">Caribbean</option>
                                <option value="central europe">Central Europe</option>
                                <option value="chinese">Chinese</option>
                                <option value="eastern europe">Eastern Europe</option>
                                <option value="french">French</option>
                                <option value="greek">Greek</option>
                                <option value="indian">Indian</option>
                                <option value="italian">Italian</option>
                                <option value="japanese">Japanese</option>
                                <option value="korean">Korean</option>
                                <option value="kosher">Kosher</option>
                                <option value="mediterranean">Mediterranean</option>
                                <option value="mexican">Mexican</option>
                                <option value="middle eastern">Middle Eastern</option>
                                <option value="nordic">Nordic</option>
                                <option value="south american">South American</option>
                                <option value="south east asian">South East Asian</option>
                                <option value="world">World</option>
                            </select>
                            <label className="inspiratie-label" htmlFor={diet}>Diet</label>
                            <select
                                id="diet"
                                name="diet"
                                value={diet}
                                onChange={onChangeDiet}
                            >
                                <option></option>
                                <option value="balanced">Balanced</option>
                                <option value="high-fiber">High-Fiber</option>
                                <option value="high-protein">High-Protein</option>
                                <option value="low-carb">Low-Carb</option>
                                <option value="low-fat">Low-Fat</option>
                                <option value="low-sodium">Low-Sodium</option>
                            </select>
                        </div>
                        <div className="checkbox-flexbox">
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    onChange={toggleDaisryFree}
                                />
                                <span className="slider"></span>
                                <p>Dairy free</p>
                            </label>
                            <label className="switch">

                                <input
                                    type="checkbox"
                                    onChange={toggleGlutenFree}
                                />
                                <span className="slider"></span>
                                <p>Gluten free</p>
                            </label>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    onChange={toggleVegan}
                                />
                                <span className="slider"></span>
                                <p>Vegan</p>
                            </label>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    onChange={toggleVegetarian}
                                />
                                <span className="slider"></span>
                                <p>Vegetarian</p>
                            </label>
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
export default Inspiratie;
