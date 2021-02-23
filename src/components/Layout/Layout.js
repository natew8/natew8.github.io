import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { motion } from "framer-motion";
import "../../styles/index.scss";
import layoutStyles from "./layout.module.scss";
import SocialLinks from "../SocialLinks/SocialLinks";

function Layout(props) {
  return (
    <>
      <Header />
      <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 1 }}
        className={layoutStyles.container}
      >
        <SocialLinks />
        <div id="content" className={layoutStyles.content}>
          {props.children}
        </div>
      </motion.div>
    </>
  );
}

export default Layout;
