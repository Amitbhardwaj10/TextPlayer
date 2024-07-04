import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
	input: "",
	output: "",
	character: "",
	showServiceContent: false,
	showCharacter: false,
	outputType: "string",
	showOutputType: false,
	selectedService: null,
	characterCount: 0,
	characterCountNoSpaces: 0,
	uniqueCharacterCount: 0,
	wordCount: 0,
	uniqueWordCount: 0,
	sentenceCount: 0,
};

const handlePaste = createAsyncThunk(
	"input/handlePaste",
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

		setShowServiceContent: (state, action) => {
			state.showServiceContent = action.payload;
		},

		handleCopy: (state) => {
			window.navigator.clipboard.writeText(state.input);
		},

		setSelectedService: (state, action) => {
			state.selectedService = action.payload;
		},

		handleCut: (state) => {
			window.navigator.clipboard.writeText(state.input);
			state.input = "";
			state.output = "";
		},
		setCharacterCount: (state, action) => {
			state.characterCount = action.payload;
		},
		setCharacterCountNoSpaces: (state, action) => {
			state.characterCountNoSpaces = action.payload;
		},
		setUniqueCharacterCount: (state, action) => {
			state.uniqueCharacterCount = action.payload;
		},
		setWordCount: (state, action) => {
			state.wordCount = action.payload;
		},
		setUniqueWordCount: (state, action) => {
			state.uniqueWordCount = action.payload;
		},
		setSentenceCount: (state, action) => {
			state.sentenceCount = action.payload;
		},
	},
});

export const {
	handleCopy,
	setInput,
	setOutput,
	handleCut,
	setShowServiceContent,
	setOutputType,
	setCharacter,
	setShowCharacter,
	setShowOutputType,
	setSelectedService,
	setCharacterCount,
	setCharacterCountNoSpaces,
	setUniqueCharacterCount,
	setWordCount,
	setUniqueWordCount,
	setSentenceCount,
} = slice.actions;

export { handlePaste };
export default slice.reducer;
