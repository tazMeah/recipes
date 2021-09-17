import { recipeInterface } from "../models/RecipeResponse";
import { Link } from "react-router-dom";



export default function Recipe({label,image,source,url, calories, totalTime, recipeNumber}: recipeInterface) {
    return (
    <div>
        <Link to={"/" + recipeNumber}>
            <img src={image}/>
        </Link>
        <h3>{label}</h3>
        <p>Source: {source}</p>
        <a href={url}>Link</a>
        <p>Calories: {calories.toFixed(0)}</p>
        <p>Total time: {totalTime}</p>
    </div>
    )
}