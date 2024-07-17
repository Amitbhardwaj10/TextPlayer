// Button.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleServiceClick } from "../../utils/handleServiceClick";
import { setSelectedService, setShowServiceContent } from "../slices/slice";

function Button({ service }) {
  let inputValue = useSelector((state) => state.input);
  const character = useSelector((state) => state.character);
  const outputType = useSelector((state) => state.outputType);
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        handleServiceClick(service, inputValue, character, outputType, dispatch);
        dispatch(setShowServiceContent(true));
        dispatch(setSelectedService(service))
      }}
      className="w-[21.5rem] bg-cyan-950 py-2 px-2 rounded-sm border-2 shadow-lg shadow-black hover:shadow-blue-950 hover:scale-105 active:scale-75 transition-all duration-200 cursor-pointer"
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
          {service.desc.length > 100 ? service.desc.substring(0, 90) + '...' : service.desc}
        </p>
      </div>
    </div>
  );
}

export default Button;
