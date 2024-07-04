import React from "react";
import { useSelector } from "react-redux";

const Info = () => {
    const characterCount = useSelector((state) => state.characterCount);
    const characterCountNoSpaces = useSelector((state) => state.characterCountNoSpaces);
    const uniqueCharacterCount = useSelector((state) => state.uniqueCharacterCount);
    const wordCount = useSelector((state) => state.wordCount);
    const uniqueWordCount = useSelector((state) => state.uniqueWordCount);
    const sentenceCount = useSelector((state) => state.sentenceCount);

    return (
        <div className="info w-[80vw] bg-cyan-950 flex items-center justify-between py-3 px-5 rounded-b-lg border-2 border-x-2 text-white">
            <span className="chars">Characters: {characterCount} </span>
            <span className="charsNoSpaces">Characters without spaces: {characterCountNoSpaces} </span>
            <span className="uniqueChars">Unique Characters: {uniqueCharacterCount} </span>
            <span className="words">Words: {wordCount} </span>
            <span className="uWords">Unique Words: {uniqueWordCount} </span>
            <span className="sent">Sentences: {sentenceCount}</span>
        </div>
    );
};

export default Info;
