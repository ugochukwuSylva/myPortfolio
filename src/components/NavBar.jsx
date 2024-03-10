import { useState } from "react";

import "./NavBar.scss";

import ButtonDownload from "./ButtonDownload";
import NavBarList from "./NavBarList";
import DarkModeButton from "./DarkModeButton";
import useWindowResizer from "../hook/useWindowResizer";
import { BiMenuAltRight } from "react-icons/bi";

function NavBar() {
  const [isActive, setIsActive] = useState(null);
  const { showButton } = useWindowResizer(960);

  const list = ["Home", "About", "Projects", "Contact"];

  // function handleScroll() {
  //   if (window.scrollY >= 500) setIsSticky(true);
  //   else setIsSticky(false);
  // }

  // window.addEventListener("scroll", handleScroll);

  return (
    <nav className={`navigation`}>
      <span className="navigation__logo">UG</span>

      <ul className="navigation__list">
        {list.map((listItem, i) => (
          <NavBarList
            key={i}
            index={i === isActive}
            onClick={() => setIsActive(i)}
            listItem={listItem}
          />
        ))}
      </ul>
      <DarkModeButton />
      {showButton && (
        <span>
          <BiMenuAltRight className="menuIcon" />
        </span>
      )}

      {!showButton && <ButtonDownload>My Resume</ButtonDownload>}
    </nav>
  );
}

export default NavBar;
