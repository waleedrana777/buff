// create redux slice
import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
	name: "root",
	initialState: {
		isLoading: false,
		error: null,
		user: null,

	},
	reducers: {
		setIsLoading: (state, action) => {
			state.isLoading = action.payload;
		},
	},
});

export default rootSlice.reducer;
