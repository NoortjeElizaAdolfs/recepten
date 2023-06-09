import React, { useState } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "../components/Recipe";
import Alert from "../components/Alert";

function Inspiratie() {
const APP_ID = "4fee97b6";
const APP_KEY = "0c5700274833fb4cf102c03717281700";

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
const result = await Axios.get(url.join(""));
if (!result.data.more) {
return setAlert("Sorry.. We could't find any recipes. Broaden your search query ");
}
setRecipes(result.data.hits);
setAlert("");
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
<div className="inspiratie">
<h1>Food Searching App</h1>
<form onSubmit={onSubmit} className="search-form inspiratie-form">
{alert !== "" && <Alert alert={alert} />}
<div className="form-group">
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
<div className="form-group">
<label className="inspiratie-label-checkbox">Dairy free</label>
<input
type="checkbox"
onChange={toggleDaisryFree}
/>
<label className="inspiratie-label-checkbox" htmlFor="health">Gluten free</label>
<input
type="checkbox"
onChange={toggleGlutenFree}
/>
<label className="inspiratie-label-checkbox" htmlFor="health">Vegan</label>
<input
type="checkbox"
onChange={toggleVegan}
/>
<label className="inspiratie-label-checkbox" htmlFor="health">Vegetarian</label>
<input
type="checkbox"
onChange={toggleVegetarian}
/>
</div>
<input type="submit" value="Search" />
</form>
<div className="recipes">
{recipes !== [] &&
recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
</div>
</div>
);
}
export default Inspiratie;