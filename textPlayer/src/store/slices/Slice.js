import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleAlert } from "../../utils/handleAlert";
import { useDispatch } from "react-redux";
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
	"input/handlePaste",
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
			const dispatch = useDispatch();

			if (state.input !== "") {
				try {
					window.navigator.clipboard.writeText(state.output);
					handleAlert("success", "Copied to Clipboard");
				} catch (error) {
					console.error(error);
					handleAlert("error", "Failed to Copy", dispatch);
				}
			} else {
				handleAlert("warning", "Textbox is empty", dispatch);
			}
			setShowAlert(true);
		},

		setSelectedService: (state, action) => {
			state.selectedService = action.payload;
		},

		handleCut: (state) => {
			const dispatch = useDispatch();

			if (state.input !== "") {
				window.navigator.clipboard.writeText(state.output);
				state.input = "";
				state.output = "";
				handleAlert("success", "Textbox Cleared and Copied", dispatch);
			} else {
				handleAlert("warning", "Textbox is empty", dispatch);
			}
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

		setShowAlert: (state, action) => {
			state.showAlert = action.payload;
		},

		setAlertType: (state, action) => {
			state.alertType = action.payload;
		},

		setAlertMessage: (state, action) => {
			state.alertMessage = action.payload;
		},

		setAlertIconType: (state, action) => {
			state.alertIconType = action.payload;
		},

		setClassActive: (state, action) => {
			state.classActive = action.payload;
		}
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
	setShowAlert,
	setAlertType,
	setAlertMessage,
	setAlertIconType,
	setClassActive,
} = slice.actions;

export { handlePaste };
export default slice.reducer;
