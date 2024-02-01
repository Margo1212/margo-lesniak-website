"use client";

import { useEffect, useState } from "react";

export const useResizeHook = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const getSize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    getSize();
    window.addEventListener("resize", getSize);
    return () => window.removeEventListener("resize", getSize);
  }, []);
  return windowSize;
};
