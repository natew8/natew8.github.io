import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";
import menuStyles from "./menu.module.scss";
import MenuSocial from "../SocialLinks/MenuSocial";

function Menu(props) {
  const { closeMenu, menu } = props;
  return (
    <div
      id={menuStyles.container}
      className={menu ? menuStyles.show : menuStyles.hide}
    >
      <h1 onClick={() => closeMenu(!menu)} className={menuStyles.exit}>
        &times;
      </h1>
      <ul>
        <h1 className={menuStyles.link}>
          <AniLink
            className={menuStyles.link}
            cover
            direction="right"
            bg="#1b1924"
            to="/portfolio"
            style={{ textDecoration: "none" }}
          >
            .portfolio
            <div className={menuStyles.line}></div>
          </AniLink>
        </h1>
        <h1 className={menuStyles.link}>
          <AniLink
            className={menuStyles.link}
            cover
            direction="right"
            bg="#1b1924"
            to="/#skills"
            style={{ textDecoration: "none" }}
          >
            .skills
            <div className={menuStyles.line}></div>
          </AniLink>
        </h1>
        <h1 onClick={() => alert("Coming Soon!")} className={menuStyles.link}>
          {/* <AniLink
            className={menuStyles.link}
            cover
            direction="right"
            bg="#1b1924"
            to="/music"
            style={{ textDecoration: "none" }}
          > */}
          .music
          <div className={menuStyles.line}></div>
          {/* </AniLink> */}
        </h1>
        <h1 className={menuStyles.link}>
          <AniLink
            className={menuStyles.link}
            cover
            direction="right"
            bg="#1b1924"
            style={{ textDecoration: "none" }}
            to="/about"
          >
            .about
            <div className={menuStyles.line}></div>
          </AniLink>
        </h1>
        <h1 className={menuStyles.link}>
          <AniLink
            className={menuStyles.link}
            cover
            direction="right"
            to="/contact"
            style={{ textDecoration: "none" }}
          >
            .contact
            <div className={menuStyles.line}></div>
          </AniLink>
        </h1>
        <h1 className={menuStyles.link}>
          <AniLink
            className={menuStyles.link}
            cover
            direction="down"
            to="/"
            bg="#1b1924"
            style={{ textDecoration: "none" }}
          >
            home
            <div className={menuStyles.line}></div>
          </AniLink>
        </h1>
      </ul>
      <MenuSocial />
    </div>
  );
}

export default Menu;
