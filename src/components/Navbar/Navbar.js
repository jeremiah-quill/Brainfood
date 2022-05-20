import React from "react";
import { FaLightbulb } from "react-icons/fa";
import { BsShareFill, BsQuestionCircle } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="fixed z-10 top-0 flex items-center justify-between w-full p-4 max-w-5xl">
      <div className="flex items-center gap-3">
        <FaLightbulb color="#D4AF37" size="1.5rem" />
        <h1 className="text-green-600 font-thin text-3xl">AI Chef</h1>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => console.log("clicked about")}
          className="hover:scale-105"
          style={{ transition: "all .2s ease" }}>
          <BsQuestionCircle size="1.75rem" />
        </button>
        <button
          onClick={() => console.log("clicked social")}
          className="hover:scale-105"
          style={{ transition: "all .2s ease" }}>
          <BsShareFill size="1.5rem" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
