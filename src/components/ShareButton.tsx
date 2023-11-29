import React, { ReactEventHandler } from "react";

interface props {
  imageShareHandler: ReactEventHandler;
}

export default function ShareButton({ imageShareHandler }: props) {
  return (
    <div className="">
      <button
        onClick={imageShareHandler}
        className="bg-blue-700 outline-none p-2 px-10 border-none text-white rounded-md shadow"
      >
        Share
      </button>
    </div>
  );
}
