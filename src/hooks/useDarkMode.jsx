import React, {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export function useDarkMode() {
    const [storedValue, setStoredValue] = useLocalStorage()
}