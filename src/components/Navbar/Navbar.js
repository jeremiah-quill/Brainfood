import React, { useState, useRef } from "react";
import { FaLightbulb } from "react-icons/fa";
import { BsShareFill, BsQuestionCircle } from "react-icons/bs";
import SocialsBar from "./SocialsBar";
import InfoModal from "../InfoModal";

const Navbar = () => {
  const [isSocialsOpen, setIsSocialsOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  function handleToggleInfo() {
    setIsInfoOpen((curr) => !curr);
  }

  function handleToggleSocials() {
    setIsSocialsOpen((curr) => !curr);
  }

  function handleCloseSocials() {
    setIsSocialsOpen(false);
  }

  const ref = useRef();

  return (
    <div className="fixed z-20 top-0 flex items-center justify-between w-full p-4 max-w-5xl">
      <div className="flex items-center gap-3">
        <FaLightbulb color="#D4AF37" size="1.5rem" />
        <h1 className="text-green-600 font-thin text-3xl">AI Chef</h1>
      </div>
      <div className="flex gap-3">
        <button onClick={handleToggleInfo} className="hover:scale-110 transition-all">
          <BsQuestionCircle size="1.75rem" />
        </button>
        <button onClick={handleToggleSocials} ref={ref} className="hover:scale-110 transition-all">
          <BsShareFill size="1.5rem" />
        </button>
        {isSocialsOpen ? <SocialsBar ignoreRef={ref} closeSocials={handleCloseSocials} /> : null}
        {isInfoOpen ? <InfoModal closeModal={handleToggleInfo} /> : null}
      </div>
    </div>
  );
};

export default Navbar;
