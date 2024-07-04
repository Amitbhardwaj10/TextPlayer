// utils/handleServiceClick.js
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
import {
  setOutput,
  setShowCharacter,
  setShowOutputType,
} from "../store/slices/slice";

export const handleServiceClick = (service, inputValue, character, outputType, dispatch) => {
  window.scroll({
      top: 100,
      behavior: "smooth",
  });

  if (!inputValue) {
      const outputValue = "Input field is empty!";
      dispatch(setOutput(outputValue));
      return;
  }

  dispatch(setShowOutputType(false));
  dispatch(setShowCharacter(false));

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
          dispatch(setShowOutputType(true));
          result = extractUniqueLetters(inputValue, outputType);
          break;
      case "extractuniquenumbers":
          dispatch(setShowOutputType(true));
          result = extractUniqueNumbers(inputValue, outputType);
          break;
      case "extractuniquewords":
          dispatch(setShowOutputType(true));
          result = extractUniqueWords(inputValue, outputType);
          break;
      case "removespecificcharacters":
          dispatch(setShowCharacter(true));
          result = removeSpecificCharacters(inputValue, character);
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
  }
  dispatch(setOutput(result));
};
