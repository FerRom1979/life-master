import { useAppSelector } from "@/store";
import { resetMessage } from "@/store/reducers/messages";
import React, { useEffect } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch } from "react-redux";

function Toast() {
  const messages = useAppSelector((state) => state.messages);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(resetMessage());
  };

  useEffect(() => {
    setTimeout(() => handleClose(), 5000);
  }, [messages]);

  return (
    <div className="absolute mt-4 flex w-full justify-center">
      <div className="relative w-96 rounded-md border border-red-500 bg-red-200 px-4 py-2 text-center">
        <p className="text-red-700">{messages.message}</p>
        <button className="absolute right-2 top-1 cursor-pointer text-white" onClick={handleClose}>
          <IoMdCloseCircle fontSize={20} fill="red" />
        </button>
      </div>
    </div>
  );
}

export default Toast;
