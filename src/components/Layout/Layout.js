import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { motion } from "framer-motion";
import "../../styles/index.scss";
import layoutStyles from "./layout.module.scss";
import SocialLinks from "../SocialLinks/SocialLinks";

function Layout(props) {
  const [height, setHeight] = useState(0);
  const [intro, setIntro] = useState(true);
  setTimeout(() => {
    setIntro(false);
  }, 3000);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={layoutStyles.container}
      >
        <Header />
        <SocialLinks />
        <div className={layoutStyles.content}>{props.children}</div>
        <Footer />
      </motion.div>
    </>
  );
}

export default Layout;
