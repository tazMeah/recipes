import fetchRecipe from "../services/FetchRecipe";
import { useState, useEffect, createContext } from "react";
import RecipeResponse, { recipeInterface } from "../models/RecipeResponse";
import SearchForm from "./SearchForm";
import Recipe from "./Recipe";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";


export default function Recipes() {
    const [recipes, setRecipes] = useState<RecipeResponse>();
    
    
	

	// useEffect(()=>{
	//     fetchRecipe().then(data => setRecipes(data) )
	// }, [])

	function onSubmit(query: string) {
		fetchRecipe(query).then((data) => {
			setRecipes(data);
            
			
		});
	}

	function loadMore() {
       
    }

	return (
		<div>
			<Router>
            <NavLink to="/favorites" exact>
                Favorites
            </NavLink>
				<Switch>
					<Route path="/favorites" exact>
                    
						
					</Route>
					<Route path="/:id" exact>
						<RecipeDetails recipes={recipes} />
					</Route>
					<Route path="/">
						<SearchForm onSubmit={onSubmit} />
						{recipes &&
							recipes?.hits.map((hit, index) => {
								console.log("recipes: ", recipes);
								return (
									<Recipe
										recipeNumber={index}
										key={index}
										label={hit.recipe.label}
										image={hit.recipe.image}
										source={hit.recipe.source}
										url={hit.recipe.url}
										calories={hit.recipe.calories}
										totalTime={hit.recipe.totalTime}
									/>
								);
							})}
					</Route>
				</Switch>
			</Router>
            
		</div>
	);
}
