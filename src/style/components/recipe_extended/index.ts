import styled from "styled-components";
import { color, device } from "../../style_constants";

// Container for the entire page
export const RecipePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  max-width: 1200px;
  margin: 0 auto;
`;

// Title of the recipe
export const RecipeTitle = styled.h1`
  font-size: 36px;
  margin: 0 0 20px;
  text-align: center;
`;

// Container for the ingredients and summary
export const RecipeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  gap: 10px;

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 20px 0;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;

// Container for the ingredients
export const IngredientsContainer = styled.div`
  width: 100%;
`;

// Title for the ingredients
export const IngredientsTitle = styled.h2`
  font-size: 28px;
  margin: 0 0 20px;
  text-align: center;
`;

// List of ingredients
export const IngredientList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

// List item for each ingredient
export const IngredientListItem = styled.li`
  font-size: 20px;
  margin: 0 0 10px;
`;

// Container for the summary
export const SummaryContainer = styled.div`
  width: 100%;
`;

// Title for the summary
export const SummaryTitle = styled.h2`
  font-size: 28px;
  margin: 0 0 20px;
  text-align: center;
`;

// Summary text
export const SummaryText = styled.p`
  font-size: 20px;
  margin: 0;
  text-align: justify;
`;

// Container for the instructions
export const InstructionsContainer = styled.div`
  width: 100%;
`;

// Title for the instructions
export const InstructionsTitle = styled.h2`
  font-size: 28px;
  margin: 20px 0;
  text-align: center;
`;

// List of instructions
export const InstructionList = styled.ol`
  list-style: none;
  margin: 0 20px;
  padding: 0;
`;

// List item for each instruction
export const InstructionListItem = styled.li`
  font-size: 20px;
  margin: 0 0 20px;
  text-align: justify;
  counter-increment: item;
  position: relative;

  &::before {
    content: counter(item) ".";
    font-size: 24px;
    font-weight: bold;
    margin-right: 10px;
    position: absolute;
    left: -30px;
  }
  
  @media ${device.mobile} {
    font-size: 16px;
  }
  
  &:hover {
    color: ${color.accent};
    cursor: pointer;
  }
`;