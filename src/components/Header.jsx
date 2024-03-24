import { motion } from "framer-motion";
import "./Header.scss";
import { useEffect, useRef } from "react";

import Hero from "./Hero";
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
    <motion.header
      ref={headerRef}
      className="header"
      id="Home"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <NavBar />
      <Hero />
    </motion.header>
  );
}

export default Header;
