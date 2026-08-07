import { useState, useEffect } from 'react';

/**
 * Custom hook for throttling input values.
 * @param {any} value - The input state value.
 * @param {number} delay - Delay time in milliseconds.
 * @returns {any} Debounced value.
 */
export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;