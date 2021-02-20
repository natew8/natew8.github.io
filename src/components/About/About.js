import scrollTo from "gatsby-plugin-smoothscroll";
import React from "react";
import Titles from "../Titles/Titles";
import aboutStyles from "./about.module.scss";
function About(props) {
  return (
    <div id="about" className={aboutStyles.about}>
      <div className={aboutStyles.quoteBox}>
        <h1>
          “Unless you try to do something beyond what you have already mastered,
          you will never grow.”
          <h5>- Ronald E. Osborn</h5>
        </h1>
      </div>
      <div className={aboutStyles.nameContent}>
        <div className={aboutStyles.pA}>
          <img
            className={aboutStyles.imageOne}
            src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/natewaite.jpg"
            alt="my face"
          />
          <h1 className={aboutStyles.intro}>
            Hey, Im <h1 className={aboutStyles.myNameFirst}>Nate</h1>,
            <Titles />
          </h1>
          For as long as I can remember I've had a passion for Creating.
          <br></br>From music to science, from theatre to web development, I
          live for the magic that comes from making something that have the
          opportunity to impact peoples lives.
          <br></br> When I'm not making sweet stuff with code, I'm usually
          working on my next music adventure. I've been producing music since
          2016 and have worked on dozens of musical projects as a singer,
          songwriter, guitar player, and music producer. I most recently
          finished executive producing{" "}
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
            href="https://open.spotify.com/album/3xbGvmH3gARaeh7LGjsq85?si=rFXkk-ZDT1u7c4q6KHJRng"
          >
            Jay Warren's album 'Give Love'
          </a>
          which went number 1 on the iTunes RnB charts.
          <br></br>
          When my computer is finally put to sleep and I come back to reality, I
          get to spend time with my incredible wife, Kaylie and our two sons.
          They are the reason for everything I do. They lift my whole world
          higher.
        </div>
      </div>
      <div className={aboutStyles.contactBox}>
        <h1>
          Im always looking for my next challenge - my next opportunity to learn
          and create.<br></br> If you have that next adventure, I'd love to hear
          from you.
        </h1>
        <button
          className={aboutStyles.contact}
          onClick={() => scrollTo("#contact")}
        >
          Contact me
        </button>
      </div>
    </div>
  );
}

export default About;
