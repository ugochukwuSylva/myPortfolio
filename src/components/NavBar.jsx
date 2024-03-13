import { useState } from "react";

import "./NavBar.scss";

import ButtonDownload from "./ButtonDownload";
import NavBarList from "./NavBarList";
import DarkModeButton from "./DarkModeButton";
import useWindowResizer from "../hook/useWindowResizer";
import { BiMenuAltRight } from "react-icons/bi";

function NavBar() {
  const [isActive, setIsActive] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
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

      <ul
        // style={{ transform: showMenu ? "translateX(0)" : "translateX(100%)" }}
        className={`navigation__list ${showMenu && "displayMenu"}`}
      >
        {list.map((listItem, i) => (
          <NavBarList
            key={i}
            index={i === isActive}
            onClick={() => setIsActive(i)}
            listItem={listItem}
          />
        ))}
        <span className="closeMenu" onClick={() => setShowMenu(false)}>
          &times;
        </span>
      </ul>

      <DarkModeButton />
      {showButton && (
        <span onClick={() => setShowMenu(true)}>
          <BiMenuAltRight className="menuIcon" />
        </span>
      )}

      {!showButton && <ButtonDownload>My Resume</ButtonDownload>}
    </nav>
  );
}

export default NavBar;
