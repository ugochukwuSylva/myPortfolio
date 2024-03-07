import icon1 from "../assets/react-icon.png";
import icon2 from "../assets/redux-icon.png";
import icon3 from "../assets/tailwind-icon.png";
import icon4 from "../assets/styledComp-icon.png";
import icon5 from "../assets/supabase-icon.png";
import icon6 from "../assets/leaflet-icon.png";

export const PROJECTS = [
  {
    frontImage: "project-image-1.png",
    backImage: [icon1, icon2, icon3],
    technologies: ["React", "Redux", "Tailwind css"],
    title: "Fast-React-Pizza",
    overview:
      "An e-commerce website where tasty pizzas are ordered and delivered within 30mins.",

    backgroundImage: `linear-gradient(to right bottom, var(--color-primary), var(--color-secondary))`,
  },
  {
    frontImage: "project-image-2.png",
    backImage: [icon1],
    technologies: ["React"],
    title: "Worldwise",
    overview:
      "A map that tracks your footsteps into every city you can think of. Keeping mementoes of wonderful tour experiences.",
    backgroundImage: `linear-gradient(to right bottom, var(--color-primary), var(--color-secondary))`,
  },
  {
    frontImage: "project-image-3.jpeg",
    backImage: [icon1, icon4, icon5],
    technologies: ["React", "styled component", "supabase"],
    title: "The wild oasis",
    overview:
      "A hospitality application where you can book your favorite hotel cabin with user authentication feature.",

    backgroundImage: `linear-gradient(to right bottom, var(--color-primary), var(--color-secondary))`,
  },
];
