import React, { useEffect } from "react";

const Modal = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="fixed inset-0 bg-gray-500 opacity-50 flex justify-center items-center p-5">
        <div className="bg-white h-full w-full">

        </div>
    </div>
  );
};

export default Modal;
