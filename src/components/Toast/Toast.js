import React from "react";

const Toast = ({ message }) => {
  return (
    <div className="fixed bottom-10 left-0 right-0 flex justify-center">
      <div className="bg-red-400 text-white p-2 rounded font-bold">{message}</div>
    </div>
  );
};

export default Toast;
