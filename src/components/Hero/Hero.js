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
      delay: 2,
      duration: 0.5,
    },
  },
};

function Hero(props) {
  return (
    <div className={heroStyles.heroView}>
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
            <h3>
              Passionately working to provide creative and reliable solutions to
              complex roadblocks that will engage and inspire.
              <br></br>I also make sick beats.
            </h3>
          </h1>
        </div>
      </motion.div>
      {/* <span className={heroStyles.tabletBox}>
        <span className={heroStyles.nameContainer}>
          <h1 className={heroStyles.myNameFirst}>Nate </h1>
          <h1 className={heroStyles.myNameLast}>Waite</h1>
        </span>
        <div className={heroStyles.sumContainer}>
          <h1>
            Full Stack Web Developer /<br></br> Music Producer
            <h3>
              Passionately working to provide creative and reliable solutions to
              complex roadblocks that will engage and inspire.
              <br></br>I also make sick beats.
            </h3>
          </h1>
        </div>
        <div className={heroStyles.buttonBox}>
          <AniLink
            cover
            direction="right"
            to="/portfolio"
            bg="#1b1924"
            style={{ textDecoration: "none" }}
          >
            <button className={heroStyles.portButton}>.portfolio</button>
          </AniLink>
          <AniLink
            cover
            direction="right"
            to="/about"
            bg="#1b1924"
            style={{ textDecoration: "none" }}
          >
            <button className={heroStyles.aboutButton}>.about</button>
          </AniLink>
          <AniLink
            cover
            direction="right"
            to="/contact"
            bg="#1b1924"
            style={{ textDecoration: "none" }}
          >
            <button className={heroStyles.contButton}>.contact</button>
          </AniLink>
        </div>
      </span>
      <span className={heroStyles.topBox}>
        <h1 className={heroStyles.myNameFirst}>Nate </h1>
        <h1 className={heroStyles.myNameLast}>Waite</h1>
      </span>
      <span className={heroStyles.middleBox}></span>
      <span className={heroStyles.bottomBox}>
        <div className={heroStyles.sumContainer}>
          <h1>
            Full Stack Web Developer /<br></br> Music Producer
            <h3>
              Passionately working to provide creative and reliable solutions
              <br></br> to complex roadblocks that will engage and inspire.
              <br></br>I also make sick beats.
            </h3>
          </h1>
        </div>
        <div className={heroStyles.buttonBox}>
          <AniLink
            cover
            direction="right"
            to="/portfolio"
            bg="#1b1924"
            style={{ textDecoration: "none" }}
          >
            <button className={heroStyles.portButton}>.portfolio</button>
          </AniLink>
          <AniLink
            cover
            direction="right"
            to="/about"
            bg="#1b1924"
            style={{ textDecoration: "none" }}
          >
            <button className={heroStyles.aboutButton}>.about</button>
          </AniLink>
          <AniLink
            cover
            direction="right"
            to="/contact"
            bg="#1b1924"
            style={{ textDecoration: "none" }}
          >
            <button className={heroStyles.contButton}>.contact</button>
          </AniLink>
        </div>
      </span> */}
      <div className={heroStyles.tL}></div>
      <div className={heroStyles.tR}></div>
      <div className={heroStyles.bL}></div>
      <div className={heroStyles.bR}></div>
      <div className={heroStyles.tLB}></div>
      <div className={heroStyles.tRB}></div>
      <div className={heroStyles.bLB}></div>
      <div className={heroStyles.bRB}></div>
    </div>
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ duration: 0.5 }}
    //   className={homeStyles.homeContainer}
    // >
    //   <span className={homeStyles.welcome}>
    //     <div id={homeStyles.divText}>
    //       <h1>Hey,</h1>
    //       <h1>
    //         I'm
    //         <h1 className={homeStyles.myName}>Nate</h1>,
    //       </h1>
    //       <h1>{done ? <Titles /> : <h1>{null}</h1>}</h1>
    //       <div>
    //         <h2>
    //           Utah based, Full Stack Web Developer working to make the world a
    //           more creative place through code and music.
    //         </h2>
    //         <h3>
    //           This site was built to serve both as a portfolio for my work in
    //           web development, as well as an artist page for my work as a
    //           songwriter and music producer.
    //         </h3>
    //         <h3>Whatever brings you, welcome!</h3>
    //       </div>
    //       <span>
    //         <AniLink cover direction="left" bg="#c97064" to="/portfolio">
    //           <button className={homeStyles.portfolio}>.portfolio</button>
    //         </AniLink>
    //         <button
    //           onClick={() => alert("Coming Soon!")}
    //           className={homeStyles.music}
    //         >
    //           .music
    //         </button>
    //       </span>
    //       <SocialLinks />
    //     </div>
    //   </span>
    // </motion.div>
  );
}

export default Hero;
