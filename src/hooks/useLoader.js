import React, { useState } from "react";
import Loader from "../components/Loader";

export default function useLoader() {
  const [isLoaderOn, setIsLoaderOn] = useState(false);

  return [isLoaderOn ? <Loader /> : null, () => setIsLoaderOn(true), () => setIsLoaderOn(false)];
}
