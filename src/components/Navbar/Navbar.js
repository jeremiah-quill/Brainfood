import React, { useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import { BsShareFill, BsQuestionCircle } from "react-icons/bs";

const Navbar = () => {
  const [isSocialsOpen, setIsSocialsOpen] = useState(false);

  function handleToggleSocials() {
    setIsSocialsOpen((curr) => !curr);
  }

  return (
    <div className="fixed z-20 top-0 flex items-center justify-between w-full p-4 max-w-5xl">
      <div className="flex items-center gap-3">
        <FaLightbulb color="#D4AF37" size="1.5rem" />
        <h1 className="text-green-600 font-thin text-3xl">AI Chef</h1>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => console.log("clicked about")}
          className="hover:scale-110 transition-all">
          <BsQuestionCircle size="1.75rem" />
        </button>
        <button onClick={handleToggleSocials} className="hover:scale-110 transition-all">
          <BsShareFill size="1.5rem" />
        </button>
        {isSocialsOpen ? (
          <div className="absolute top-14 bg-gray-200 rounded right-5">
            <ul className="flex rounded">
              <li className="cursor-pointer">
                <a
                  className="block p-2 hover:bg-green-500 rounded transition-all"
                  target="_blank"
                  href="https://github.com/jeremiah-quill"
                  rel="noreferrer">
                  Github
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  className="block p-2 hover:bg-green-500 rounded transition-all"
                  target="_blank"
                  href="https://www.jeremiahquill.com"
                  rel="noreferrer">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
