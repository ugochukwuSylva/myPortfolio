import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hook/useLocalStorage";

const PortfolioContext = createContext();

function ContextProvider({ children }) {
  const [isDark, setIsDark] = useLocalStorage(
    window.matchMedia("(prefers-color-scheme): dark").matches,
    "isDark"
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
    }
  }, [isDark]);

  function toggleDarkMode() {
    setIsDark((isDark) => !isDark);
  }

  return (
    <PortfolioContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </PortfolioContext.Provider>
  );
}

function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined)
    throw new Error("PortfolioContext was used outside the ContextProvider");

  return context;
}

export { ContextProvider, usePortfolio };
