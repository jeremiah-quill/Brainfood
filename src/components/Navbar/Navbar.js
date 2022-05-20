import React from "react";
import { FaLightbulb } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed z-10 top-0 flex items-center justify-between w-full p-4">
      <div className="flex items-center">
        <FaLightbulb color="#D4AF37" size="1.5rem" />
        <h1 className="text-green-600 font-thin text-3xl">AI Chef</h1>
      </div>
      <button
        onClick={() => console.log("clicked about")}
        className="border-2 border-black font-bold px-2 rounded-full">
        ?
      </button>
    </div>
  );
};

export default Navbar;
