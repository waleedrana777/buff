//import and make redux toolkit store
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootSlice";
import logger from "redux-logger";

export const store = configureStore({
	reducer: {
		rootReducer,
	}, // reducer is a function that returns an object
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
