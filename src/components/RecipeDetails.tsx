import { useParams } from "react-router";
import RecipeResponse from "../models/RecipeResponse";
interface RoutePrams {
    id: string;
}

export default function RecipeDetails({recipes}: any){
    const {id} = useParams<RoutePrams>();
    let thisRecipe = recipes?.hits[id]?.recipe;
    console.log("thisRecipe: ", thisRecipe);
    return (
        <div>
            <h1>{thisRecipe?.label}</h1>
            <img src={thisRecipe?.image}/>
        </div>
    )
}