import React from "react";
import menuSocialStyles from "./menuSocial.module.scss";
import scrollTo from "gatsby-plugin-smoothscroll";

function MenuSocial(props) {
  return (
    <span className={menuSocialStyles.menuIconContainer}>
      <a
        className={menuSocialStyles.menuA}
        target="_blank"
        rel="noreferrer"
        href="https://github.com/natew8"
      >
        <img
          id={menuSocialStyles.github}
          className={menuSocialStyles.menuIcon}
          src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/github.svg"
          alt="github"
        />
      </a>
      <a
        className={menuSocialStyles.menuA}
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/natew8/"
      >
        <img
          id={menuSocialStyles.linked}
          className={menuSocialStyles.menuIcon}
          src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/linkedin.svg"
          alt="linkedIn"
        />
      </a>
      <img
        onClick={() => scrollTo("#contact")}
        id={menuSocialStyles.email}
        className={menuSocialStyles.menuIcon}
        src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/gmail.svg"
        alt="Email"
      />
      <a
        className={menuSocialStyles.menuA}
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/natew8/"
      >
        <img
          id={menuSocialStyles.ig}
          className={menuSocialStyles.menuIcon}
          src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/instagram.svg"
          alt="IG"
        />
      </a>
      <a
        className={menuSocialStyles.menuA}
        target="_blank"
        rel="noreferrer"
        href="https://open.spotify.com/artist/57MyPA2CqgcigML6JnIixn?si=DiuUjiZtRwq8PWTBPQGCHQ"
      >
        <img
          id={menuSocialStyles.spotify}
          className={menuSocialStyles.menuIcon}
          src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/spotify.svg"
          alt="Spotify"
        />
      </a>
      <a
        className={menuSocialStyles.menuA}
        target="_blank"
        rel="noreferrer"
        href="https://music.apple.com/us/artist/nate-waite/1471148574"
      >
        <img
          id={menuSocialStyles.apple}
          className={menuSocialStyles.menuIcon}
          src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/applemusic.svg"
          alt="AppleMusic"
        />
      </a>
      <a
        className={menuSocialStyles.menuA}
        target="_blank"
        rel="noreferrer"
        href="https://www.youtube.com/channel/UCq3wQFwdBIa_xCFHQvS8G2A/featured"
      >
        <img
          id={menuSocialStyles.youtube}
          className={menuSocialStyles.menuIcon}
          src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/youtube.svg"
          alt="youtube"
        />
      </a>
    </span>
  );
}

export default MenuSocial;
