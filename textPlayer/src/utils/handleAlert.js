import {
	setAlertIconType,
	setAlert,
	setClassActive,
} from "../store/slices/slice";

const handleAlert = (type, message, dispatch) => {
	dispatch(setAlert({ message, type, showAlert: true }));
};

const toggleAlertClasses = (type = "success", dispatch) => {
	document.querySelector(".progress").classList.add("active");
	let alertComp = document.querySelector(".alert");
	alertComp.classList.add("active");
	dispatch(setClassActive(true));
	alertComp.classList.remove("warning");
	alertComp.classList.remove("error");
	alertComp.classList.remove("success");

	switch (type) {
		case "success":
			alertComp.classList.add("success");
			dispatch(setAlertIconType("fa-circle-check"));
			break;
		case "warning":
			alertComp.classList.add("warning");
			dispatch(setAlertIconType("fa-circle-info"));
			break;
		case "error":
			alertComp.classList.add("error");
			dispatch(setAlertIconType("fa-circle-exclamation"));
			break;
		default:
			break;
	}
};

export { handleAlert, toggleAlertClasses };
