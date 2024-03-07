import { useState } from "react";

import "./NavBar.scss";

import ButtonDownload from "./ButtonDownload";
import NavBarList from "./NavBarList";
import DarkModeButton from "./DarkModeButton";

function NavBar() {
  const [isActive, setIsActive] = useState(null);

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
        <DarkModeButton />
      </ul>
      <ButtonDownload>My Resume</ButtonDownload>
    </nav>
  );
}

export default NavBar;
