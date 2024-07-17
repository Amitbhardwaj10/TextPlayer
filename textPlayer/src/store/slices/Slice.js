import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleAlert } from "../../utils/handleAlert";

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
	showAlert: false,
	alertType: "Success",
	alertMessage: "",
	alertIconType: "",
	classActive: false,
};

const handlePaste = createAsyncThunk(
	"text/handlePaste",
	async (_, { dispatch }) => {
		try {
			const pasteText = await navigator.clipboard.readText();
			dispatch(setInput(pasteText));
			handleAlert("success", "Pasted to Textbox", dispatch);
		} catch (err) {
			console.error(err);
			handleAlert("error", "Failed to Paste", dispatch);
		}
	}
);

const slice = createSlice({
	name: "text",
	initialState,
	reducers: {
		setInput: (state, action) => { state.input = action.payload; },
		setOutput: (state, action) => { state.output = action.payload; },
		setCharacter: (state, action) => { state.character = action.payload; },
		setShowCharacter: (state, action) => { state.showCharacter = action.payload; },
		setOutputType: (state, action) => { state.outputType = action.payload; },
		setShowOutputType: (state, action) => { state.showOutputType = action.payload; },
		setShowServiceContent: (state, action) => { state.showServiceContent = action.payload; },
		setSelectedService: (state, action) => { state.selectedService = action.payload; },
		setCharacterCount: (state, action) => { state.characterCount = action.payload; },
		setCharacterCountNoSpaces: (state, action) => { state.characterCountNoSpaces = action.payload; },
		setUniqueCharacterCount: (state, action) => { state.uniqueCharacterCount = action.payload; },
		setWordCount: (state, action) => { state.wordCount = action.payload; },
		setUniqueWordCount: (state, action) => { state.uniqueWordCount = action.payload; },
		setSentenceCount: (state, action) => { state.sentenceCount = action.payload; },
		setAlert: (state, action) => {
			const { type, message, showAlert } = action.payload;

			state.showAlert = showAlert !== undefined ? showAlert : state.showAlert;

			if (type !== undefined) {
					state.alertType = type;
			}
			if (message !== undefined) {
					state.alertMessage = message;
			}
		},
		setAlertIconType: (state, action) => {
			state.alertIconType = action.payload;
		},
		setClassActive: (state, action) => { state.classActive = action.payload; },
		clearText: (state) => {
			state.input = "";
			state.output = "";
		},
		handleCopy: (state) => {
			if (state.input !== "") {
				navigator.clipboard.writeText(state.output);
				state.alertType = "success";
				state.alertMessage = "Copied to Clipboard";
				state.showAlert = true;
			} else {
				state.alertType = "warning";
				state.alertMessage = "Textbox is empty";
				state.showAlert = true;
			}
		},
		handleCut: (state) => {
			if (state.input !== "") {
				navigator.clipboard.writeText(state.output);
				state.input = "";
				state.output = "";
				state.alertType = "success";
				state.alertMessage = "Textbox Cleared and Copied";
				state.showAlert = true;
			} else {
				state.alertType = "warning";
				state.alertMessage = "Textbox is empty";
				state.showAlert = true;
			}
		},
	},
});

export const {
	setInput,
	setOutput,
	setCharacter,
	setShowCharacter,
	setOutputType,
	setShowOutputType,
	setShowServiceContent,
	setSelectedService,
	setCharacterCount,
	setCharacterCountNoSpaces,
	setUniqueCharacterCount,
	setWordCount,
	setUniqueWordCount,
	setSentenceCount,
	setAlert,
	setAlertIconType,
	setClassActive,
	handleCopy,
	handleCut,
	clearText,
} = slice.actions;

export { handlePaste };
export default slice.reducer;
