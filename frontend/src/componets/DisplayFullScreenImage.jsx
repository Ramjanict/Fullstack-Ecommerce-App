import React from "react";
import { CgClose } from "react-icons/cg";
const DisplayFullScreenImage = ({ onClose, imgeUrl }) => {
  return (
    <div className="fixed top-15  bottom-0 right-0 left-0 flex justify-center items-center z-50">
      <div className="bg-white rounded p-4 shadow-lg ">
        <div
          onClick={onClose}
          className="text-2xl cursor-pointer hover:text-red-600 w-fit ml-auto"
        >
          <CgClose />
        </div>
        <div className="max-w-[70vh] max-h-[75vh] ">
          <img
            className="w-full h-full mix-blend-multiply"
            src={imgeUrl}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DisplayFullScreenImage;
