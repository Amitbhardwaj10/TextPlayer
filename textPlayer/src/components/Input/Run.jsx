import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	setCharacter,
	setOutputType,
} from "../../store/slices/slice";

const Run = () => {
	const showServiceContent = useSelector((state) => state.showServiceContent);
	const showCharacter = useSelector((state) => state.showCharacter);
	const character = useSelector((state) => state.character);
	const showOutputType = useSelector((state) => state.showOutputType);
	const dispatch = useDispatch();
	return (
		<>
			{showServiceContent && (
				<div className="run w-[80vw] bg-cyan-950 flex items-center justify-end mt-4 gap-4 rounded-md py-4 px-5 text-sm">
					{showOutputType && (
						<label htmlFor="outputType">
							<span className="mr-2">Output Type:</span>
							<select
								id="outputType"
								onChange={(e) => {
									dispatch(setOutputType(e.target.value));
								}}
							>
								<option value="string">String</option>
								<option value="array">Array</option>
							</select>
						</label>
					)}

					{showCharacter && (
						<input
						className="w-20 py-1 px-2 outline-none"
							id="characterType"
							type="text"
							placeholder="Character"
							maxLength={1}
							value={character}
							autoComplete="off"
							onChange={(e) => dispatch(setCharacter(e.target.value))}
						/>
					)}

					<button
						className=""
						onClick={(e) => {
							switchFunction(e.currentTarget.classList[0], `run successfully.`);
						}}
					>
						<span>{}</span>
						<i className="bx bx-play"></i>
					</button>
				</div>
			)}
		</>
	);
};
export default Run;
