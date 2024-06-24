import { createSlice } from "@reduxjs/toolkit";
const initialState = { input: "", output: "" };

export const slice = createSlice({
	name: "text",
	initialState,
	reducers: {
		setInput: (state, action) => {
			state.input = action.payload;
		},

		setOutput: (state, action) => {
			state.output = action.payload;
		},

		handleCopy: (state) => {
			window.navigator.clipboard.writeText(state.input);
		},

		handleCut: (state) => {
			window.navigator.clipboard.writeText(state.input);
			state.input = "";
			state.output = "";
		},
	},
});

export const {
	handleCopy,
	setInput,
	setOutput,
	handleCut,
} = slice.actions;

export default slice.reducer;
