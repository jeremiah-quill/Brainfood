import React from 'react';

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className="border border-black m-auto p-1 rounded">
      {text}
    </button>
  );
};

export default Button;
