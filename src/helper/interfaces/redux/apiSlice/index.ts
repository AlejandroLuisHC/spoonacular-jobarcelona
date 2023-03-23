export interface IRecipe {
    id: number;
    title: string;
    image: string;
    type: string;
    // Add more properties as needed based on the Spoonacular API response
  }
  
  export interface IApiState {
    status: "idle" | "loading" | "succeeded" | "failed";
    recipes: IRecipe[];
    error: string | null;
  }