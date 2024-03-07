import "./DarkModeButton.scss";

import { BsBrightnessHigh } from "react-icons/bs";
import { IoMoon } from "react-icons/io5";

import { usePortfolio } from "../context/PortfolioContext";

function DarkModeButton() {
  const { isDark, toggleDarkMode } = usePortfolio();
  return (
    <button onClick={toggleDarkMode}>
      {isDark ? <IoMoon /> : <BsBrightnessHigh />}
    </button>
  );
}

export default DarkModeButton;
