import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes, selectAllRecipes } from "../redux/features/api_data/apiSlice";
import { RootState } from "../redux/store";
import { useParams } from "react-router-dom";
import { StyledRecipesDashboard } from "../style/components/recipes_dashboard";
import RecipeCard from "../components/recipes_dashboard/RecipesCard";

const RecipesDashboard = () => {
    const dispatch = useDispatch();
    const { type } = useParams<{ type: string }>();
    const recipes = useSelector((state: RootState) => selectAllRecipes(state));

    useEffect(() => {
        dispatch(fetchRecipes(type));
    }, [dispatch, type]);

    return (
        <StyledRecipesDashboard>
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </StyledRecipesDashboard>
    );
};

export default RecipesDashboard;