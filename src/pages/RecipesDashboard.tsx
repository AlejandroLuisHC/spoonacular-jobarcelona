import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes, selectAllRecipes, selectApiStatus } from "../redux/features/api_data/apiSlice";
import { RootState } from "../redux/store";
import { useParams } from "react-router-dom";
import { StyledRecipesDashboard } from "../style/components/recipes_dashboard";
import RecipeCard from "../components/recipes_dashboard/RecipesCard";
import Spinner from "../components/general_components/Spinner";

const RecipesDashboard = () => {
    const dispatch = useDispatch();
    const { type } = useParams<{ type: string }>();
    const recipes = useSelector((state: RootState) => selectAllRecipes(state));
    const apiStatus = useSelector((state: RootState) => selectApiStatus(state));
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        dispatch(fetchRecipes(type))
            .then(() => setLoading(false));
    }, [dispatch, type]);

    return (
        <StyledRecipesDashboard>
            {
            loading ? <Spinner /> 
                : apiStatus === "failed" ?
                <p>Failed to fetch recipes. Please try again later.</p>
                    : recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))
            }
        </StyledRecipesDashboard>
    );
};

export default RecipesDashboard;
