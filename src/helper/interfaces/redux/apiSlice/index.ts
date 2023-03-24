export interface IRecipe {
    id: number;
    title: string;
    image: string;
    type: string;
    servings: number;
    readyInMinutes: number;
    summary: string;
    analyzedInstructions: { name: string; steps: { number: number; step: string }[] }[];
    extendedIngredients: { name: string; amount: number; unit: string }[];
  }
  
export interface IApiState {
    status: "idle" | "loading" | "succeeded" | "failed";
    recipes: IRecipe[];
    error: string | null;
}