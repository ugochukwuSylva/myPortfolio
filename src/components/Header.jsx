import { useEffect, useRef } from "react";
import "./Header.scss";
// import Hero from "./Hero";
import HeroV1 from "./HeroV1";
import NavBar from "./NavBar";

function Header() {
  // STICKY NAVIGATION BAR
  const headerRef = useRef();

  function stickyFn(entries) {
    const [entry] = entries;

    if (!entry.isIntersecting)
      entry.target.childNodes[0].setAttribute("class", "navigation sticky");
    else entry.target.childNodes[0].setAttribute("class", "navigation");
  }

  useEffect(() => {
    const navHeight =
      headerRef.current.childNodes[0].getBoundingClientRect().height;

    new IntersectionObserver(stickyFn, {
      root: null,
      threshold: 0.1,
      rootMargin: `-${navHeight}px`,
    }).observe(headerRef.current);
  }, []);

  return (
    <header ref={headerRef} className="header" id="Home">
      <NavBar />
      <HeroV1 />
    </header>
  );
}

export default Header;
