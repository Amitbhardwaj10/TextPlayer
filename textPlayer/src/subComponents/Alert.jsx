import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	setAlertIconType,
	setClassActive,
	setShowAlert,
} from "../store/slices/slice";
import { toggleAlertClasses } from "../utils/handleAlert";

function Alert() {
	const alertIconType = useSelector((state) => state.alertIconType);
	const alertType = useSelector((state) => state.alertType);
	const alertMessage = useSelector((state) => state.alertMessage);
	const showAlert = useSelector((state) => state.showAlert);
	const isActive = useSelector((state) => state.classActive);
	const dispatch = useDispatch();

	useEffect(() => {
		if (showAlert) {
			toggleAlertClasses(alertType, dispatch);
			setTimeout(() => {
				dispatch(setShowAlert(false));
			}, 2000);
		} else {
			document.querySelector(".alert").classList.remove("active");
			setTimeout(() => {
				document.querySelector(".progress").classList.remove("active");
			}, 100);
			dispatch(setClassActive(false));
		}
	}, [
		alertType,
		setAlertIconType,
		setShowAlert,
		showAlert,
		toggleAlertClasses,
	]);

	return (
		<div
			className={`alert overflow-hidden ${
				isActive ? "translate-x-[0%]" : "translate-x-[1000%]"
			} transition-all duration-300 max-w-fit alert fixed top-6 right-5 py-3 pr-2 bg-cyan-950 text-white rounded-md shadow-md shadow-[#07193d]`}
		>
			<div className="alert-content mx-5 flex justify-even gap-5 items-center w-full">
				<i
					className={`fa-solid fa-xl ${isActive && alertIconType} 
					${alertType == "error" && "text-red-600"} 
					${alertType == "success" && "text-green-500"} 
					${alertType == "warning" && "text-yellow-600"}`}
				></i>
				<div className="message flex flex-col">
					<span className="text text-1 font-semibold">{alertType}</span>
					<span className="text text-2 text-neutral-300">{alertMessage}</span>
				</div>
			</div>
			<div
				className={`progress before:bg-slate-300 before:w-[100%] before:absolute before:bottom-0 before:right-[50%] before:translate-x-[50%] before:h-[3px] ${
					isActive && "before:animate-progress"
				} rounded-tl-md`}
			></div>
		</div>
	);
}

export default Alert;
