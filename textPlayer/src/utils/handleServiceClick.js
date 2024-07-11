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
} from "./stringManipulation";
import {
  setOutput,
  setShowCharacter,
  setShowOutputType,
} from "../store/slices/slice";
import { handleAlert } from "./handleAlert";

export const handleServiceClick = (service, inputValue, character, outputType, dispatch) => {
  window.scroll({
      top: 90,
      behavior: "smooth",
  });

  if (!inputValue) {
      handleAlert("warning", "Textbox is empty", dispatch);
      return;
  }else {
    handleAlert("success", service.title, dispatch);
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
        if (character === "") {
            handleAlert("warning", "Please select a character to remove.", dispatch)
        }
        else {
            handleAlert("success", `${character} removed successfully.`, dispatch)
        }
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
