import { menus } from "./interface/InterMenu";
import "../headerNavStyle.css";

export const NavMenu = () => {
  return (
    <>
      <nav className="nav">
        <ul className="navContainer">
          {menus.map((menu, i) => (
            <li key={i}>
              <p>{menu.name}</p>
            </li>
          ))}
        </ul>
        <div className="detailMenu">
          {menus.map((menu) => (
            <ul>
              {menu.submenus.map((submenu, i) => (
                <li key={submenu}>
                  <p>{submenu}</p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </nav>
    </>
  );
};
