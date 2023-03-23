import { FC } from 'react'
import { generateRandomColor } from '../../helper/utils'
import { IRecipeCardProps } from '../../helper/interfaces/recipes_dashboard'
import { StyledRecipeCard } from '../../style/components/recipes_dashboard'

const RecipeCard: FC<IRecipeCardProps> = ({ recipe }) => {
    return (
        <StyledRecipeCard key={recipe.id} color={generateRandomColor()}>
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
        </StyledRecipeCard>
    )
}

export default RecipeCard