import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInput } from "../../store/slices/slice";

function InputField() {
	const inputValue = useSelector((state) => state.input);
	const outputValue = useSelector((state) => state.output);
	const showServiceContent = useSelector((state) => state.showServiceContent);
	const dispatch = useDispatch();

	let myStyle = showServiceContent ? { width: "40vw" } : { width: "80vw" };

	return (
		<div className="textarea w-[80vw] flex items-center">
			<textarea
				className="border-2 bg-gray-900 text-white p-5 outline-white w-1/2 resize-none text-xl"
				name="text"
				style={myStyle}
				id="input-text"
				autoComplete="off"
				autoFocus
				cols={showServiceContent ? "54" : "108"}
				rows="7"
				placeholder="Enter your text here........"
				spellCheck="false"
				value={inputValue}
				onChange={(e) => {
					dispatch(setInput(e.target.value));
				}}
			/>
			{showServiceContent && (
				<textarea
					className="border-2 bg-gray-900 text-white p-5 outline-white w-1/2 resize-none text-xl"
					name="text"
					id="output-text"
					autoComplete="off"
					value={outputValue}
					cols="54"
					rows="7"
					placeholder="Output comes here..."
					readOnly
				/>
			)}
		</div>
	);
}

export default InputField;
