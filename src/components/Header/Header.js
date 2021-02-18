import { Link } from "gatsby";
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
          <li>
            <AniLink
              className={headerStyle.link}
              cover
              direction="right"
              to="/about"
              style={{ textDecoration: "none" }}
            >
              .about
              <div className={headerStyle.underLine}></div>
            </AniLink>
          </li>
          <li>
            <a className={headerStyle.link} name="skills" href="#skills">
              .skills
              <div className={headerStyle.underLine}></div>
            </a>
          </li>
        </ul>
        <h1 className={headerStyle.logo}>
          <AniLink
            cover
            direction="down"
            bg="#1b1924"
            style={{ textDecoration: "none", color: "#1c5c77" }}
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
