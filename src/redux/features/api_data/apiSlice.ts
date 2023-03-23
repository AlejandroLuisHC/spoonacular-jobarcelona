import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IApiState, IRecipe } from "../../../helper/interfaces/redux/apiSlice";

const initialState: IApiState = {
    status: "idle",
    recipes: [],
    error: null,
};

// Define an async thunk to fetch recipes from the Spoonacular API
export const fetchRecipes = createAsyncThunk(
    "api/fetchRecipes",
    async (type: string) => {
        // Check if the recipes are already cached in sessionStorage
        const cachedData = sessionStorage.getItem(type);
        if (cachedData) {
            return JSON.parse(cachedData) as IRecipe[];
        }

        // Fetch recipes from the Spoonacular API
        const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?query=${type}&apiKey=${import.meta.env.VITE_SPOONACULAR_TOKEN}`
        );
        if (!response.ok) {
            throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();

        // Cache the recipes in sessionStorage
        sessionStorage.setItem(type, JSON.stringify(data.results));

        // Map Spoonacular API response to Recipe type
        return data.results.map((result: any) => ({
            id: result.id,
            title: result.title,
            image: result.image,
            type: type,
        })) as IRecipe[];
    }
) as any;

const apiSlice = createSlice({
    name: "api",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.recipes = action.payload;
            })
            .addCase(fetchRecipes.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message ?? "Something went wrong";
            });
    },
});

export const selectAllRecipes = (state: RootState) => state.api.recipes;
export const selectRecipeById = (state: RootState, recipeId: number) =>
    state.api.recipes.find((recipe: { id: number; }) => recipe.id === recipeId);
export const selectApiStatus = (state: RootState) => state.api.status;
export const selectApiError = (state: RootState) => state.api.error;

export default apiSlice.reducer;