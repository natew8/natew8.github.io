import React from "react";
import footerStyle from "./footer.module.scss";

function Footer(props) {
  return (
    <div className={footerStyle.footer}>
      <p className={footerStyle.p}>Created By Nate Waite ® 2021</p>
    </div>
  );
}

export default Footer;
