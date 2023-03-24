import { FC } from 'react'
import { generateRandomColor } from '../../helper/utils'
import { StyledRecipeCard } from '../../style/components/recipes_dashboard'
import { IRecipeCardProps } from '../../helper/interfaces/recipes_dasboard'

const RecipeCard: FC<IRecipeCardProps> = ({ recipe }) => {
    return (
        <StyledRecipeCard to={`./${recipe.id}`} key={recipe.id} color={generateRandomColor()}>
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
            <p>Ready in {recipe.readyInMinutes} minutes</p>
        </StyledRecipeCard>
    )
}

export default RecipeCard