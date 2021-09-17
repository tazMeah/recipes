import axios from "axios";
import RecipeResponse from "../models/RecipeResponse";
export default function fetchRecipe(query: string): Promise<RecipeResponse>{
    return axios
			.get("https://api.edamam.com/api/recipes/v2", {
				params: {
					type: "public",
					q: query,
					app_id: process.env.REACT_APP_RECIPE_SEARCH_APPLICATION_ID,
					app_key: process.env.REACT_APP_RECIPE_SEARCH_API_KEY,
				},
			})
			.then((response) => {
				return response.data;
			});
}