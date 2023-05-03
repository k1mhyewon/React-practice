import { useState } from "react";
import { MenuData } from "./interface/InterMenu";
import "../headerNavStyle.css";

export const NavMenu = () => {
  const [active, setActive] = useState("");

  const handleMouseEnter = (name: string) => {
    setActive(name);
  };

  const handleMouseLeave = () => {
    setActive("");
  };

  return (
    <>
      <nav className="nav">
        <ul className="navContainer">
          {MenuData.map((menu, i) => (
            <li
              key={i}
              className={`${menu.name} ${active === menu.name ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter(menu.name)}
              onMouseLeave={() => handleMouseLeave()}
            >
              <p>{menu.name}</p>
            </li>
          ))}
        </ul>
        <div className="detailMenu">
          {MenuData.map((menu) => (
            <ul
              key={menu.name}
              className={`${menu.name} ${active === menu.name ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter(menu.name)}
              onMouseLeave={() => handleMouseLeave()}
            >
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
