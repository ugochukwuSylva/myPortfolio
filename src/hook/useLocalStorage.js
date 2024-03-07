import { useState, useEffect } from "react";

function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key, value]
  );
  return [value, setValue];
}

export default useLocalStorage;
