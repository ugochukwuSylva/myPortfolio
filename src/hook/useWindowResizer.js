import { useState } from "react";

function useWindowResizer(size) {
  const [showButton, setSHowButton] = useState(false);

  function handleResize() {
    if (window.innerWidth <= Number(size)) setSHowButton(true);
    else setSHowButton(false);
  }
  window.addEventListener("resize", handleResize, true);

  return { showButton };
}

export default useWindowResizer;
