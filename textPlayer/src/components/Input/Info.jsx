import React from "react";

function Info() {
	return (
		<div className="info w-[80vw] bg-cyan-950 flex items-center justify-between py-3 px-5 rounded-b-lg border-2 border-x-2 text-white">
			<span className="chars">Characters: 45 </span>
			<span className="charsNoSpaces">
				Characters without spaces: 34{" "}
			</span>
			<span className="uniqueChars">Unique Characters: 32 </span>
			<span className="words">Words: 10 </span>
			<span className="uWords">Unique Words: 6 </span>
			<span className="sent">Sentences: 34</span>
		</div>
	);
}

export default Info;
