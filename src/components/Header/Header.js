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
        <ul>
          <li>
            <a className={headerStyle.link} href="/#about">
              .about
              <div className={headerStyle.underLine}></div>
            </a>
          </li>
          <li>
            <a className={headerStyle.link} href="#skills">
              .skills
              <div className={headerStyle.underLine}></div>
            </a>
          </li>
          <h1 className={headerStyle.logo}>
            <AniLink
              cover
              direction="down"
              bg="#1b1924"
              style={{ textDecoration: "none", color: "#d84936" }}
              to="/"
            >
              NW
            </AniLink>
          </h1>
          <li>
            <a className={headerStyle.link} href="#projects">
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
        {/* <div>
          <Menu menu={menu} closeMenu={setMenu} />
          <h1
            onClick={() => setMenu(!menu)}
            className={
              !menu ? headerStyle.burgerMenu : headerStyle.burgerMenuActive
            }
          >
            <div className={headerStyle.burgerBarOne}></div>
            <div className={headerStyle.burgerBarTwo}></div>
            <div className={headerStyle.burgerBarThree}></div>
          </h1>
        </div> */}
      </nav>
    </header>
  );
}

export default Header;
