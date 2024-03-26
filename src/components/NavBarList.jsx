import { Link } from "react-scroll";

function NavBarList({ listItem, onClick, index }) {
  return (
    // <li className={index ? "active" : ""} onClick={onClick}>
    //   <a href={`#${listItem}`}>{listItem} </a>
    // </li>
    <li>
      <Link
        to={listItem}
        // activeClass="active"
        spy={true}
        onClick={onClick}
      >
        {listItem}
      </Link>
    </li>
  );
}

export default NavBarList;
