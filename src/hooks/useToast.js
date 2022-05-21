import React, { useState } from "react";
import Toast from "../components/Toast";

export default function useLoader() {
  const [isToastOn, setIsToastOn] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  function showToast(message) {
    setToastMessage(message);
    setIsToastOn(true);
  }

  function hideToast() {
    setIsToastOn(false);
  }

  return [
    isToastOn ? <Toast message={toastMessage} /> : null,
    (message) => showToast(message),
    () => hideToast(),
  ];
}
