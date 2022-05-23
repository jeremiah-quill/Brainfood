import React from "react";

const Button = ({ onClick, text, uniqueClassNames = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`m-auto p-2 rounded hover:brightness-125  ${uniqueClassNames}`}>
      {text}
    </button>
  );
};

export default React.memo(Button);
