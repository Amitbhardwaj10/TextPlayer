import React from "react";
import Controls from "./Input/Controls";
import InputField from "./Input/InputField";
import Info from "./Input/Info";
import ServiceCard from "./ServiceCard";

function Input() {
	return (
		<>
			<div className="w-full my-10 flex flex-col justify-center items-center">
				<Controls />
				<InputField />
				<Info />
			</div>
		</>
	);
}

export default Input;
