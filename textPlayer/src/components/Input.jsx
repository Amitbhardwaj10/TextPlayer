// Input.jsx
import React from "react";
import Controls from "./Input/Controls";
import InputField from "./Input/InputField";
import Info from "./Input/Info";
import Run from "./Input/Run";

function Input() {
	return (
		<>
			<div className="w-full my-10 flex flex-col justify-center items-center">
				<Controls />
				<InputField />
				<Info />
				<Run />
			</div>
		</>
	);
}

export default Input;
