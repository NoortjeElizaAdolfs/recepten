import React, { useState } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "../components/Recipe";
import Alert from "../components/Alert";


function Inspiratie() {
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState(null);
  const [cuisineType, setCuisineType] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "4fee97b6";
  const APP_KEY = "0c5700274833fb4cf102c03717281700";

 // const createQuery = async () => {
  // function createQuery() {
  //   if (mealType) {
  //    setQuery(query + `&mealType=${mealType}`); 
  //   } 
  //   if (cuisineType) {
  //     console.log("test"); 
  //     setQuery(query + `&cuisineType=${cuisineType}`);
  //   }
  //   return query
  // }

  //const url = `https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}&cuisineType=${cuisineType}`;
  const url = `https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const params = [];

  const getData = async () => {
    //if(mealType) {params.push("mealType");}
   // if(cuisineType) {params.push("cuisineType");}
    //useUrlFilter()
    const result = await Axios.get(url);
    if (!result.data.more) {
      return setAlert("Sorry.. We could't find any recipes. Broaden your search query ");
    }
    console.log(result);
    setRecipes(result.data.hits);
    setAlert(""); 
  };

  const onChangeMealType = e => setMealType(e.target.value);
  const onChangeCuisineType = e => setCuisineType(e.target.value);
  

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="Inspiratie">
      <h1>Food Searching App</h1>
      <form onSubmit={onSubmit} className="search-form">
        {alert !== "" && <Alert alert={alert} />}
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
