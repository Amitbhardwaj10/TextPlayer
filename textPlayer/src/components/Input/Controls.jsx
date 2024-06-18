import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import { handleCopy, handleClear, handleCut } from "../../store/slices/Slice";
function Controls() {

	const ref = useRef(null);
	const dispatch = useDispatch();

	const handleClear = () => {
		dispatch(handleClear());
	}

	return (
		<div className="control w-[80vw] bg-cyan-950 flex items-center justify-between py-4 px-5 rounded-t-lg border-t-2 border-x-2 border-b-0 text-white text-sm">
			<div className="left space-x-3 flex items-center">
				<span className="bg-teal-950 rounded-sm px-2 py-[5px] border-2 inline-flex items-center shadow-lg shadow-black hover:scale-110 active:scale-75 transition-all duration-200">
					<label className="inline-flex items-center space-x-1">
						<input type="checkbox" name="name" />
						<span>Case Sensitive</span>
					</label>
				</span>
				<button
					type="button"
					className="bg-teal-950 rounded-sm px-2 py-[5px] border-2 inline-flex items-center shadow-lg shadow-black hover:scale-110 active:scale-75 transition-all duration-200"
				>
					<span>Paste</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="15"
						height="15"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M13 21q-.425 0-.713-.288T12 20v-6q0-.825.588-1.413T14 12h6q.825 0 1.413.588T22 14v6q0 .425-.288.713T21 21q-.425 0-.713-.288T20 20v-6h-2v4q0 .425-.288.713T17 19q-.425 0-.713-.288T16 18v-4h-2v6q0 .425-.288.713T13 21Zm-8 0q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h4.175q.275-.875 1.075-1.438T12 1q1 0 1.788.563T14.85 3H19q.825 0 1.413.588T21 5v4q0 .425-.288.713T20 10q-.425 0-.713-.288T19 9V5h-2v2q0 .425-.288.713T16 8H8q-.425 0-.713-.288T7 7V5H5v14h4q.425 0 .713.288T10 20q0 .425-.288.713T9 21H5Zm7-16q.425 0 .713-.288T13 4q0-.425-.288-.713T12 3q-.425 0-.713.288T11 4q0 .425.288.713T12 5Z"
						/>
					</svg>
				</button>
				<button
					className="clear bg-red-900 rounded-sm px-2 py-[5px] border-2 inline-flex items-center shadow-lg shadow-black hover:scale-110 active:scale-75 transition-all duration-200"
					type="button" onClick={handleClear}
				>
					<span>Clear</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="15"
						height="15"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
						/>
					</svg>
				</button>
			</div>
			<div className="right space-x-3">
				<button
					className="cut bg-teal-950 rounded-sm px-2 py-[5px] border-2 inline-flex items-center shadow-lg shadow-black hover:scale-110 active:scale-75 transition-all duration-200 space-x-1"
					type="button" onClick={handleCut}
				>
					<span>Cut</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="15"
						height="15"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M19.6 21.6L12 14l-2.35 2.35q.2.375.275.8T10 18q0 1.65-1.175 2.825T6 22q-1.65 0-2.825-1.175T2 18q0-1.65 1.175-2.825T6 14q.425 0 .85.075t.8.275L10 12L7.65 9.65q-.375.2-.8.275T6 10q-1.65 0-2.825-1.175T2 6q0-1.65 1.175-2.825T6 2q1.65 0 2.825 1.175T10 6q0 .425-.075.85t-.275.8L21.6 19.6q.425.425.425 1t-.425 1q-.425.425-1 .425t-1-.425ZM15 11l-2-2l6.6-6.6q.425-.425 1-.425t1 .425q.425.425.425 1t-.425 1L15 11ZM6 8q.825 0 1.413-.588T8 6q0-.825-.588-1.413T6 4q-.825 0-1.413.588T4 6q0 .825.588 1.413T6 8Zm6 4.5q.225 0 .363-.138T12.5 12q0-.225-.138-.363T12 11.5q-.225 0-.363.138T11.5 12q0 .225.138.363T12 12.5ZM6 20q.825 0 1.413-.588T8 18q0-.825-.588-1.413T6 16q-.825 0-1.413.588T4 18q0 .825.588 1.413T6 20Z"
						/>
					</svg>
				</button>
				<button
					className="copy bg-teal-950 rounded-sm px-2 py-[5px] border-2 inline-flex items-center shadow-lg shadow-black hover:scale-110 active:scale-75 transition-all duration-200 space-x-1"
					type="button"
					onClick={handleCopy}
				>
					<span>Copy</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="15"
						height="15"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M9 18q-.825 0-1.413-.588T7 16V4q0-.825.588-1.413T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.588 1.413T18 18H9Zm0-2h9V4H9v12Zm-4 6q-.825 0-1.413-.588T3 20V7q0-.425.288-.713T4 6q.425 0 .713.288T5 7v13h10q.425 0 .713.288T16 21q0 .425-.288.713T15 22H5Zm4-6V4v12Z"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}

export default Controls;
