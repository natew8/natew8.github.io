import React from "react";
import { motion } from "framer-motion";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Titles from "../Titles/Titles";
import heroStyles from "./hero.module.scss";
import Flower from "../Flower/Flower";

const variants = {
  hidden: {
    opacity: 0,
    x: "10rem",
  },
  visible: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 0.5,
    },
  },
};

function Hero(props) {
  return (
    <div id="top" className={heroStyles.heroView}>
      <Flower />
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className={heroStyles.mainBox}
      >
        <div className={heroStyles.nameContainer}>
          <h1 className={heroStyles.myNameFirst}>Nate </h1>
          <h1 className={heroStyles.myNameLast}>Waite</h1>
        </div>
        <div className={heroStyles.sumContainer}>
          <h1>
            Full Stack Web Developer /<br></br> Music Producer
          </h1>
          <hr></hr>
          <h2>
            Passionately working to provide creative and reliable web solutions
            that will engage and inspire.
          </h2>
        </div>
      </motion.div>
      <div className={heroStyles.tL}></div>
      <div className={heroStyles.tR}></div>
      <div className={heroStyles.bL}></div>
      <div className={heroStyles.bR}></div>
      <div className={heroStyles.tLB}></div>
      <div className={heroStyles.tRB}></div>
      <div className={heroStyles.bLB}></div>
      <div className={heroStyles.bRB}></div>
    </div>
  );
}

export default Hero;
