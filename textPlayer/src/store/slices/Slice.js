import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
	name: "users",
	initialState: "",
	reducers: {
		handleCopy: (state, action) => {
			state = window.navigator.clipboard.writeText(action.payload);
		},
		// handleCut: (state, action) => {
		// 	handleCopy();
		// 	state = "";
		// },
		// handleClear: (state, action) => {
    //   state = "";
    // },

	},
});

export const { handleCut, handleClear, handleCopy } = slice.actions;
export default slice.reducer;
