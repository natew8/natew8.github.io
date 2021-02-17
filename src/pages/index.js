import React, { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout/Layout";
import Titles from "../components/Titles/Titles";
import homeStyles from "./pageStyles/home.module.scss";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import Flower from "../components/Flower/Flower";

export default function Home() {
  const [done, setDone] = useState(false);
  setTimeout(() => [setDone(true)], 2000);

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={homeStyles.homeContainer}
      >
        <span className={homeStyles.welcome}>
          <div id={homeStyles.divText}>
            <h1>Hey,</h1>
            <h1>
              I'm
              <h1 className={homeStyles.myName}>Nate</h1>,
            </h1>
            <h1>{done ? <Titles /> : <h1>{null}</h1>}</h1>
            <div>
              <h2>
                Utah based, Full Stack Web Developer working to make the world a
                more creative place through code and music.
              </h2>
              <h3>
                This site was built to serve both as a portfolio for my work in
                web development, as well as an artist page for my work as a
                songwriter and music producer.
              </h3>
              <h3>Whatever brings you, welcome!</h3>
            </div>
            <span>
              <AniLink cover direction="left" bg="#c97064" to="/portfolio">
                <button className={homeStyles.portfolio}>.portfolio</button>
              </AniLink>
              {/* <AniLink cover direction="right" bg="black" to="/music"> */}
              <button
                onClick={() => alert("Coming Soon!")}
                className={homeStyles.music}
              >
                .music
              </button>
            </span>
            <SocialLinks />
          </div>
          <Flower />
          {/* <motion.div
            initial={{ opacity: 0, translateX: 100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 8, duration: 0.5 }}
            className={homeStyles.photoContainer}
          >
            <img
              className={homeStyles.picture}
              src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/natewaite.jpg"
              alt="me"
            />
          </motion.div> */}
        </span>
      </motion.div>
    </Layout>
  );
}
