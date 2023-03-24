import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { fetchRecipes, selectRecipeById } from "../redux/features/api_data/apiSlice";
import { useParams } from "react-router-dom";
import { 
    IngredientList, 
    IngredientListItem, 
    IngredientsContainer, 
    IngredientsTitle, 
    InstructionList, 
    InstructionListItem, 
    InstructionsContainer, 
    InstructionsTitle, 
    RecipeInfoContainer, 
    RecipePageContainer, 
    RecipeTitle, 
    SummaryContainer, 
    SummaryText, 
    SummaryTitle 
} from "../style/components/recipe_extended";
import Spinner from "../components/general_components/Spinner";

const RecipePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();
    const recipe = useSelector((state: RootState) => selectRecipeById(state, Number(id)));

    useEffect(() => {
        // If recipe not found in store, dispatch fetchRecipes action
        if (!recipe) {
            dispatch(fetchRecipes());
        }
    }, [dispatch, recipe]);

    if (!recipe) {
        return <Spinner />;
    }

    return (
        <RecipePageContainer>
            <RecipeTitle>{recipe.title}</RecipeTitle>
            <h4>Estimated cooking time: {recipe.readyInMinutes} minutes</h4>
            <RecipeInfoContainer>
                <img src={recipe.image} alt={`${recipe.title} image`} />

                <IngredientsContainer>
                    <IngredientsTitle>Ingredients</IngredientsTitle>
                    <IngredientList>
                        {recipe.extendedIngredients.map((ingredient) => (
                            <IngredientListItem key={ingredient.name}>
                                <b>{ingredient.name}:</b> {ingredient.amount} {ingredient.unit}
                            </IngredientListItem>
                        ))}
                    </IngredientList>
                </IngredientsContainer>

                <SummaryContainer>
                    <SummaryTitle>Summary</SummaryTitle>
                    <SummaryText dangerouslySetInnerHTML={{ __html: recipe.summary }} />

                    <InstructionsContainer>
                        <InstructionsTitle>Instructions</InstructionsTitle>
                        <InstructionList>
                            {recipe.analyzedInstructions[0].steps.map((step) => (
                                <InstructionListItem key={step.number}>{step.step}</InstructionListItem>
                            ))}
                        </InstructionList>
                    </InstructionsContainer>

                </SummaryContainer>
            </RecipeInfoContainer>
        </RecipePageContainer>
    );
};

export default RecipePage;