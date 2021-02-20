import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React, { useState } from "react";
import headerStyle from "./header.module.scss";
import Menu from "./Menu";

function Header(props) {
  const [menu, setMenu] = useState(false);

  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.nav}>
        <ul id={headerStyle.listLeft}>
          <li onClick={() => scrollTo("#about")}>
            <h1 className={headerStyle.link}>
              .about
              <div className={headerStyle.underLine}></div>
            </h1>
          </li>
          <li onClick={() => scrollTo("#skills")}>
            <h1 className={headerStyle.link}>
              .skills
              <div className={headerStyle.underLine}></div>
            </h1>
          </li>
        </ul>
        <h1 onClick={() => scrollTo("#top")} className={headerStyle.logo}>
          <AniLink
            cover
            direction="down"
            bg="#1b1924"
            style={{ textDecoration: "none", color: "#1b1924" }}
            to="/"
          >
            NW
          </AniLink>
        </h1>
        <ul id={headerStyle.listRight}>
          <li>
            <a className={headerStyle.link} href="/#projects">
              .projects
              <div className={headerStyle.underLine}></div>
            </a>
          </li>
          <li>
            <AniLink
              className={headerStyle.link}
              cover
              direction="right"
              to="/contact"
              style={{ textDecoration: "none" }}
            >
              .contact
              <div className={headerStyle.underLine}></div>
            </AniLink>
          </li>
        </ul>

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
