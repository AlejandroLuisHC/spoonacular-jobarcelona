import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        // apiData: apiDataReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;