import React from "react";
import { motion } from "framer-motion";
import socialStyles from "./social.module.scss";
import { Link, useStaticQuery, graphql } from "gatsby";

function SocialLinks(props) {
  const images = useStaticQuery(graphql`
    query linkQuery {
      allFile {
        nodes {
          publicURL
        }
      }
    }
  `);
  const { nodes } = images.allFile;

  return (
    <motion.span
      className={socialStyles.iconContainer}
      initial={{ opacity: 0, translateX: 100 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ delay: 3, duration: 0.5 }}
    >
      <div>
        <a target="_blank" rel="noreferrer" href="https://github.com/natew8">
          <img
            id={socialStyles.github}
            className={socialStyles.icon}
            src={nodes[8].publicURL}
            alt="github"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/natew8/"
        >
          <img
            id={socialStyles.linked}
            className={socialStyles.icon}
            src={nodes[14].publicURL}
            alt="linkedIn"
          />
        </a>
        <Link to="/contact">
          <img
            id={socialStyles.email}
            className={socialStyles.icon}
            src={nodes[9].publicURL}
            alt="Email"
          />
        </Link>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/natew8/"
        >
          <img
            id={socialStyles.ig}
            className={socialStyles.icon}
            src={nodes[13].publicURL}
            alt="IG"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://open.spotify.com/artist/57MyPA2CqgcigML6JnIixn?si=DiuUjiZtRwq8PWTBPQGCHQ"
        >
          <img
            id={socialStyles.spotify}
            className={socialStyles.icon}
            src={nodes[22].publicURL}
            alt="Spotify"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://music.apple.com/us/artist/nate-waite/1471148574"
        >
          <img
            id={socialStyles.apple}
            className={socialStyles.icon}
            src={nodes[0].publicURL}
            alt="AppleMusic"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCq3wQFwdBIa_xCFHQvS8G2A/featured"
        >
          <img
            id={socialStyles.youtube}
            className={socialStyles.icon}
            src={nodes[23].publicURL}
            alt="youtube"
          />
        </a>
      </div>
    </motion.span>
  );
}

export default SocialLinks;
