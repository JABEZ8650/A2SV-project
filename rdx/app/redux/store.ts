'use client';
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/coutner/counterSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./service/dummyData";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;