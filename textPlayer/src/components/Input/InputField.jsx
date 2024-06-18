import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

function InputField() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  // const dispatch = useDispatch();
 

  return (
    <div className="textarea w-[80vw] flex items-center">
      <textarea
      className='border-2 bg-gray-900 text-white p-2 outline-white w-1/2 resize-none text-xl'
        name="text"
        id="input-text"
        autoComplete="off"
        autoFocus
        cols="54" 
        rows="7"
        placeholder="Enter your text here........"
        spellCheck="false"
        value={inputValue}
        onChange={(e) => e.target.value}
      />
        <textarea
        className='border-2 bg-gray-900 text-white p-2 outline-white w-1/2 resize-none text-xl'
          name="text"
          id="output-text"
          autoComplete="off"
          value={outputValue}
          cols="54"
          rows="7"
          placeholder="Output comes here..."
          readOnly
        />
    </div>
  )
}

export default InputField