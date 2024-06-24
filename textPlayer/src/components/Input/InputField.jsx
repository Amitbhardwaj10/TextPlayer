import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInput, setOutput } from "../../store/slices/slice";

function InputField() {
	const inputValue = useSelector((state) => state.input);
	const outputValue = useSelector((state) => state.output);
	const dispatch = useDispatch();
	return (
		<div className="textarea w-[80vw] flex items-center">
			<textarea
				className="border-2 bg-gray-900 text-white p-2 outline-white w-1/2 resize-none text-xl"
				name="text"
				id="input-text"
				autoComplete="off"
				autoFocus
				cols="54"
				rows="7"
				placeholder="Enter your text here........"
				spellCheck="false"
				value={inputValue}
				onChange={(e) => {
					dispatch(setInput(e.target.value));
				}}
			/>
			<textarea
				className="border-2 bg-gray-900 text-white p-2 outline-white w-1/2 resize-none text-xl"
				name="text"
				id="output-text"
				autoComplete="off"
				value={outputValue}
				cols="54"
				rows="7"
				placeholder="Output comes here..."
				readOnly
			/>
		</div>
	);
}

export default InputField;
