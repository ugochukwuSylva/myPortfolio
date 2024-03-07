function NavBarList({ listItem, onClick, index }) {
  return (
    <li className={index ? "active" : ""} onClick={onClick}>
      <a href={`#${listItem}`}>{listItem}</a>
    </li>
  );
}

export default NavBarList;
