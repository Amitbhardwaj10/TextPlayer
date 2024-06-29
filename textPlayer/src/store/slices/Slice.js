import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
	input: "",
	output: "",
	character: "",
	showServiceContent: false,
	showCharacter: false,
	outputType: "string",
	showOutputType: false,
	runBtnText: "",
};

const handlePaste = createAsyncThunk(
	'input/handlePaste',
	async (_, { dispatch }) => {
			try {
					const pasteText = await navigator.clipboard.readText();
					dispatch(setInput(pasteText));
			} catch (err) {
					console.error(err);
			}
	}
);

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

		setCharacter: (state, action) => {
			state.character = action.payload;
		},

		setShowCharacter: (state, action) => {
			state.showCharacter = action.payload;
		},

		setOutputType: (state, action) => {
			state.outputType = action.payload;
		},

		setShowOutputType: (state, action) => {
			state.showOutputType = action.payload;
		},

		setShowserviceContent: (state, action) => {
			state.showServiceContent = action.payload;
		},

		handleCopy: (state) => {
			window.navigator.clipboard.writeText(state.input);
		},

		setRunBtnText: (state, action) => {
			state.runBtnText = action.payload;
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
	setShowserviceContent,
	setOutputType,
	setCharacter,
	setShowCharacter,
	setShowOutputType,
	setRunBtnText,
} = slice.actions;

export {handlePaste};
export default slice.reducer;
