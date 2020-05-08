import React, {useState} from 'react';

export function useLocalStorage(key, initialValue) {

    if (window.localStorage && window.localStorage.getItem(key)) {
        initialValue = JSON.parse(window.localStorage.getItem(key));
      }
    const [storedValue, setStoredValue] = useState(initialValue);

    const setStoredValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue]
}