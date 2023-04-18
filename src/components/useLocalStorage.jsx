import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const clearValue = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return [value, setValue, clearValue];
};

export default useLocalStorage;
