import { graphql, useStaticQuery } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import React from "react";
import Titles from "../Titles/Titles";
import aboutStyles from "./about.module.scss";
import Img from "gatsby-image";
function About(props) {
  const data = useStaticQuery(graphql`
    query Photo {
      file(relativePath: { eq: "Photos/natewaite3.jpg" }) {
        childImageSharp {
          id
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const { childImageSharp } = data.file;

  console.log(childImageSharp);

  return (
    <div id="about" className={aboutStyles.about}>
      <div className={aboutStyles.nameContent}>
        <div className={aboutStyles.photoBox}>
          <Img className={aboutStyles.photo} fixed={childImageSharp.fixed} />
        </div>

        <div className={aboutStyles.line}></div>
        <div className={aboutStyles.pA}>
          <h1 className={aboutStyles.intro}>
            Hey, I'm <h1 className={aboutStyles.myNameFirst}>Nate</h1>,
            <Titles />
          </h1>
          <p>
            For as long as I can remember I've had a passion for Creating.
            <br></br>From music to science, from theatre to web development, I
            live for the magic that comes from making something that has the
            opportunity to impact peoples lives.
            <br></br> When I'm not making sweet stuff with code, I'm usually
            working on my next music adventure. I've been producing music since
            2016 and have worked on dozens of musical projects as a singer,
            songwriter, guitar player, and music producer. Most recently i had
            the opportunity to executive produce{" "}
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
            When my computer is finally put to sleep and I come back to reality,
            I get to spend time with my incredible wife, Kaylie and our two
            sons. They are the reason for everything I do. They lift my whole
            world higher.
          </p>
          <div className={aboutStyles.contactBox}>
            <h1>
              Im always looking for my next opportunity to learn and create.
              <br></br> If you have that next adventure, I'd love to hear from
              you.
            </h1>
            <button
              className={aboutStyles.contact}
              onClick={() => scrollTo("#contact")}
            >
              Contact me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
