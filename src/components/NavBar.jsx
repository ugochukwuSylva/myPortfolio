import { useEffect, useState } from "react";

import "./NavBar.scss";

import ButtonDownload from "./ButtonDownload";
import NavBarList from "./NavBarList";
import DarkModeButton from "./DarkModeButton";
import useWindowResizer from "../hook/useWindowResizer";
import { BiMenuAltRight } from "react-icons/bi";

function NavBar() {
  const [isActive, setIsActive] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const { showButton } = useWindowResizer(960);

  const list = ["Home", "About", "Projects", "Contact"];

  // This code prevents scrolling when the mobile navigation is open
  useEffect(() => {
    if (
      document.documentElement.childNodes[2]?.childNodes[1]?.childNodes[0]?.childNodes[0]?.childNodes[1].className.includes(
        "open"
      )
    ) {
      document.documentElement.childNodes[2]?.classList.add("no_overflow");
    } else {
      document.documentElement.childNodes[2]?.classList.remove("no_overflow");
    }
  }, [showMenu]);

  function handleClick(index) {
    setIsActive(index);
    setShowMenu(false);
  }

  return (
    <nav className={`navigation`}>
      <span className="navigation__logo">UG</span>

      <ul
        style={{
          transform: showMenu && "translateX(0)",
        }}
        className={`navigation__list ${showMenu && "open"}`}
      >
        {list.map((listItem, i) => (
          <NavBarList
            key={i}
            index={i === isActive}
            onClick={() => handleClick(i)}
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
