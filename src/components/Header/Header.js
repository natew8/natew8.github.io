import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React, { useEffect, useState } from "react";
import headerStyle from "./header.module.scss";
import Menu from "./Menu";

function Header(props) {
  const [menu, setMenu] = useState(false);

  return (
    <header id="header" className={headerStyle.header}>
      <nav className={headerStyle.nav}>
        <div id={headerStyle.listLeft}>
          <li onClick={() => scrollTo("#projects")}>
            <h1 className={headerStyle.link}>
              .projects
              <div className={headerStyle.underLine}></div>
            </h1>
          </li>
          <li onClick={() => scrollTo("#skills")}>
            <h1 className={headerStyle.link}>
              .skills
              <div className={headerStyle.underLine}></div>
            </h1>
          </li>
        </div>
        <h1 onClick={() => scrollTo("#top")} className={headerStyle.logo}>
          NW
        </h1>
        <div id={headerStyle.listRight}>
          <li onClick={() => scrollTo("#about")}>
            <h1 className={headerStyle.link}>
              .about
              <div className={headerStyle.underLine}></div>
            </h1>
          </li>
          <li onClick={() => scrollTo("#contact")}>
            <h1 className={headerStyle.link}>
              .contact
              <div className={headerStyle.underLine}></div>
            </h1>
          </li>
        </div>

        <div className={headerStyle.menuContainer}>
          <Menu menu={menu} closeMenu={setMenu} />
          <div
            onClick={() => setMenu(!menu)}
            className={
              !menu ? headerStyle.burgerMenu : headerStyle.burgerMenuActive
            }
          >
            <div className={headerStyle.burgerBarOne}></div>
            <div className={headerStyle.burgerBarTwo}></div>
            <div className={headerStyle.burgerBarThree}></div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
