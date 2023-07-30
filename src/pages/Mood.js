import React, { useState } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "../components/Recipe";
import Alert from "../components/Alert";


function Mood() {
const [query, setQuery] = useState("");
const [recipes, setRecipes] = useState([]);
const [alert, setAlert] = useState("");

const APP_ID = "7971cb3b";
const APP_KEY = "97180fb3488e83f0c8cb6fcfdc32a846";

const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

const getData = async () => {
if (query !== "") {
const result = await Axios.get(url);
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
<div className="recepten">
<h1>Food voor de betreffende Mood</h1>
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
<input type="submit" value="Search" />
</form>
<div className="recipes">
{recipes !== [] &&
recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
</div>
</div>
);
}

export default Mood;
