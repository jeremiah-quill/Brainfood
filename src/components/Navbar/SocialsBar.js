import React, { useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

const SocialsBar = ({ closeSocials, ignoreRef }) => {
  const ref = useRef();

  useClickOutside(ref, ignoreRef, () => {
    closeSocials();
  });

  return (
    <div ref={ref} className="absolute top-14 bg-gray-200 rounded right-5">
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
  );
};

export default SocialsBar;
