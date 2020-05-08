import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode(key, initialValue) {
  const [storedValue, setStoredValue] = useLocalStorage(key, initialValue);

  useEffect(() => {
    if (initialValue) {
      return <body className="dark-mode"></body>;
    } else {
        return <body className=""></body>;
    }
  }, [storedValue]);
  return [setStoredValue, key, initialValue];
}