import React, { useEffect } from "react";

// Import `useLocalStorage`
import { useLocalStorage } from "./useLocalStorage";

// Build a function called `useDarkMode`.
export function useDarkMode(key, initialValue) {
  /**
   * Call `useLocalStorage` and pass in the key you want to use to store
   * whether or not dark mode is enabled. Remember, this hook returns an
   * array with a value and a setter in an array, exactly like the state
   * hook, so make sure to capture those values in a `const` - `const
   * [someValue, setSomeValue] = useLocalStorage('your key here')`
   */
  const [storedValue, setStoredValue] = useLocalStorage(key, initialValue);

  // Import and set up your effect hook.
  useEffect(() => {
    let body = document.querySelector("body");
    let classes = body.classList;
    // Inside it, check to see if the value from `useLocalStorage` is true or false.
    if (storedValue) {
      //If it's true, add the class `dark-mode` to the `body` element.
      return setStoredValue(classes.toggle('dark-mode'));
    }
  }, [storedValue]);
  console.log('storedValue: ', storedValue)
  return [storedValue, setStoredValue];
}
