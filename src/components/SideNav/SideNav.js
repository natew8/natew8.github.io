import React from "react";
import sideStyles from "./side.module.scss";
function SideNav(props) {
  return (
    <header className={sideStyles.header}>
      <nav>
        <ul>
          <li>Top</li>
          <li>.about</li>
          <li>.skills</li>
          <li>.projects</li>
          <li>.contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default SideNav;
