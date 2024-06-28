const lowerCase = (text) => {
	return text.toLowerCase();
};

const upperCase = (text) => {
	return text.toUpperCase();
};

const capitalizeFirstChar = (text) => {
	return text[0].toUpperCase() + text.substring(1);
};

const capitalizeSentences = (text) => {
	return text
		.split(" ")
		.reduce((prev, curr) => prev + " " + capitalizeFirstChar(curr), "");
};

const reverseCase = (text) => {
	return text
		.split('')
		.map((char) => {
			const charCode = char.charCodeAt(0);
			if (charCode >= 65 && charCode <= 90) { // Uppercase A-Z
				return String.fromCharCode(charCode + 32); // Convert to lowercase
			} else if (charCode >= 97 && charCode <= 122) { // Lowercase a-z
				return String.fromCharCode(charCode - 32); // Convert to uppercase
			} else {
				return char; // Return the character as is if it's not a letter
			}
		})
		.join('');
};

const reverseText = (text) => {
	return text.split("").reverse().join("");
};

const removeWhiteSpace = (text) => {
	return text.split(" ").join("");
};

const removeSpecificCharacters = (text, char) => {
	return text.split(char).join("");
};

const extractUniqueWords = (text, type) => {
	const arr = Array.from(new Set(text.split(" ")));
	return type == "array"
		? `[${arr}]` : arr.join(" ");
};

const extractUniqueLetters = (text, type) => {
	const arr = Array.from(new Set(text.split("")));
	return type == "array"
		? `[${arr}]`
		: arr.join(" ");
};

const extractUniqueNumbers = (text, type) => {
	const arr = Array.from(new Set(text.split(" "))).filter(
		(value) => !isNaN(value)
	);
	return type == "array" ? `[${arr}]` : arr.join(" ");
};

export {
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
};
