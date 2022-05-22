import { useEffect } from "react";

// give a ref to this hook and be able to run "onClickOutside" whenever there is a click event outside of that element
// included a second ignoreRef which I've added to the "connect" button
// works only when the ref element is rendered
export function useClickOutside(ref, ignoreRef, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        ignoreRef.current &&
        !ref.current.contains(event.target) &&
        !ignoreRef.current.contains(event.target)
      ) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, ignoreRef]);
}
