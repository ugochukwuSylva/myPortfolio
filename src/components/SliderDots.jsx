import "./SliderDots.scss";

import SliderDotList from "./SliderDotList";
import { PROJECTS } from "../data/projects";

function SliderDots({ dotSlide, translateX }) {
  return (
    <ul className="dots-container ">
      {PROJECTS.map((_, i) => (
        <SliderDotList
          key={i}
          isActiveDot={i === -translateX}
          handleActiveDot={() => dotSlide(i)}
        />
      ))}
    </ul>
  );
}

export default SliderDots;
