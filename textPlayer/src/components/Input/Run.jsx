import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCharacter, setOutputType } from "../../store/slices/slice";

const Run = () => {
	const showServiceContent = useSelector((state) => state.showServiceContent);
	const showCharacter = useSelector((state) => state.showCharacter);
	const character = useSelector((state) => state.character);
	const showOutputType = useSelector((state) => state.showOutputType);
	const runBtnText = useSelector((state) => state.runBtnText);
	const dispatch = useDispatch();
	return (
		<>
			{showServiceContent && (
				<div className="run w-[80vw] bg-cyan-950 flex items-center justify-end mt-4 gap-4 rounded-md py-3 px-5 text-sm">
					{showOutputType && (
						<label htmlFor="outputType">
							<span className="mr-4 text-white text-base">Output Type:</span>
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

					{runBtnText && (
						<button
							className="inline-flex items-center text-white py-1 px-2 rounded-sm border-2 shadow-md shadow-black hover:shadow-blue-950 hover:scale-105 active:scale-75 transition-all duration-200 cursor-pointer"
							// onClick={() => }
						>
							<span>{runBtnText}</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
							>
								<path fill="currentColor" d="M8 19V5l11 7l-11 7Z" />
							</svg>
						</button>
					)}
				</div>
			)}
		</>
	);
};
export default Run;
