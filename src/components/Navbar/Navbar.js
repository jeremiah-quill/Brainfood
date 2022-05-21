import React, { useState, useRef } from "react";
import { BsShareFill, BsQuestionCircle } from "react-icons/bs";
import SocialsBar from "./SocialsBar";
import InfoModal from "../InfoModal";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSocialsOpen, setIsSocialsOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(true);

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
    <div className="absolute z-20 top-0 flex items-center justify-between w-full p-4 inset-x-0 max-w-5xl m-auto">
      <Link to="/" className="flex items-center gap-3">
        <img src="./ai_chef_logo_square_white.png" style={{ width: "2rem" }} className="" />
        <h1 className="text-green-600 font-bold text-3xl">Brainfood</h1>
      </Link>
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
