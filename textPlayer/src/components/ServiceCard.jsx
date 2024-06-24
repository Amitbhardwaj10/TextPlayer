import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	lowerCase,
	upperCase,
	capitalizeFirstChar,
	capitalizeSentences,
	extractUniqueLetters,
	extractUniqueNumbers,
	extractUniqueWords,
	removeSpecificCharacters,
	removeWhiteSpace,
	reverseCase,
	reverseText,
} from "../utils/stringManipulation";
import { setOutput } from "../store/slices/slice";
import stringServices from "../services.json";

function ServiceCard() {
	const inputValue = useSelector((state) => state.input);
	const dispatch = useDispatch();

	const handleServiceClick = (service) => {
		let result;
		switch (service.title.toLowerCase().split(" ").join("")) {
			case "lowercase":
				result = lowerCase(inputValue);
				break;
			case "uppercase":
				result = upperCase(inputValue);
				break;
			case "capitalizefirstletter":
				result = capitalizeFirstChar(inputValue);
				break;
			case "capitalizesentences":
				result = capitalizeSentences(inputValue);
				break;
			case "extractuniqueletters":
				result = extractUniqueLetters(inputValue);
				break;
			case "extractuniquenumbers":
				result = extractUniqueNumbers(inputValue);
				break;
			case "extractuniquewords":
				result = extractUniqueWords(inputValue);
				break;
			case "removespecificcharacters":
				result = removeSpecificCharacters(inputValue, char);
				break;
			case "removewhitespace":
				result = removeWhiteSpace(inputValue);
				break;
			case "reversecase":
				result = reverseCase(inputValue);
				break;
			case "reversetext":
				result = reverseText(inputValue);
				break;
			default:
				result = inputValue;
		}
		dispatch(setOutput(result));
	};

	return (
		<>
			<section className="w-[80vw] mx-auto flex flex-wrap my-10 gap-8">
				{stringServices.services.map((service, index) => (
					<div
						key={index}
						onClick={() => handleServiceClick(service)}
						className="w-[21rem] bg-cyan-950 py-2 px-2 rounded-sm border-2 shadow-lg shadow-black hover:shadow-blue-950 hover:scale-105 active:scale-75 transition-all duration-200 cursor-pointer"
					>
						<div className="text-white flex items-center justify-between text-2xl mb-2">
							<p>{service.title}</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887q.375-.375.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75q0 .375-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1q-.375-.375-.375-.888t.375-.887L14.475 12Z"
								/>
							</svg>
						</div>
						<hr />
						<div>
							<p className="text-white text-sm my-2">
								{service.desc.length > 100
									? service.desc.substring(0, 100) + "..."
									: service.desc}
							</p>
						</div>
					</div>
				))}
			</section>
		</>
	);
}

export default ServiceCard;
