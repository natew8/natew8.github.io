import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";
import menuStyles from "./menu.module.scss";
import MenuSocial from "../SocialLinks/MenuSocial";
import scrollTo from "gatsby-plugin-smoothscroll";

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
      <div>
        <h1 onClick={() => scrollTo("#top")} className={menuStyles.link}>
          home
        </h1>
        <h1 onClick={() => scrollTo("#about")} className={menuStyles.link}>
          .about
        </h1>
        <h1 onClick={() => scrollTo("#skills")} className={menuStyles.link}>
          .skills
        </h1>
        <h1 onClick={() => scrollTo("#projects")} className={menuStyles.link}>
          .projects
        </h1>
        <h1 onClick={() => scrollTo("#contact")} className={menuStyles.link}>
          .contact
        </h1>
      </div>
      <MenuSocial />
    </div>
  );
}

export default Menu;
