import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import projectStyles from "./projects.module.scss";
import Img from "gatsby-image";

function Projects(props) {
  const data = useStaticQuery(graphql`
    query Projects {
      allFile(skip: 28) {
        edges {
          node {
            id
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const { edges } = data.allFile;
  console.log(edges);
  const projects = [
    {
      id: 1,
      primaryImage: edges[0].node.childImageSharp.fluid,
      title: "Colab",
      summary:
        "My first full-stack web application. Colab provides music production teams with all of the tools necessary to stay organized and productive in a day when working together can be hard. Utilizing Colab, users can create projects, build production teams, share song versions, and stay in constant communication throughout the production process.",
      subSummary:
        "**To view full application functionality use this login information** Email: guest@email.com - Password: hireme ",
      tech:
        "React | Redux | CSS | Axios | Framer-Motion | Moment.js | Wavesurfer.js | Amazon S3 | NodeJS | Express | PostgreSQL ",
      github: "https://github.com/natew8/colab-app-2.git",
      site: "http://143.110.157.56:5555/#/",
    },
    {
      id: 2,
      primaryImage: edges[1].node.childImageSharp.fluid,
      title: "Savvy Travels",
      summary:
        "My first team application. Savvy Travels is a flight finding web application built for the last minute adventurer. A user is able to give the application a trip budget and Savvy Travels will return all of the flights in that price range. Utilizing the users ip address Savvy Travels can also make suggestions based on the users closest airport. ",
      subSummary:
        "Savvy Travels is currently switching hosts. Link not available at this time. ",
      tech:
        "React | Redux | React Context |  SCSS | Amazon S3 | Mapbox API | Skyscanner API | Moment.js  | Axios | NodeJs | Nodemailer | Express | PostgreSQL",
      github: "https://github.com/savvy-travels/ssavvy-travels-app",
      site: "",
    },
  ];

  const mappedProjects = projects.map((proj) => {
    return (
      <div key={proj.id} className={projectStyles.projectContainer}>
        <Img
          className={projectStyles.photo}
          fluid={proj.primaryImage}
          alt="Project"
        />
        <span className={projectStyles.infoBox}>
          <h1>{proj.title}</h1>
          <p>{proj.summary}</p>
          <p className={projectStyles.subSummary}>{proj.subSummary}</p>
          <p className={projectStyles.techUsed}>{proj.tech}</p>
          <span>
            <a target="_blank" rel="noreferrer" href={proj.github}>
              <button>View Code</button>
            </a>
            <a target="_blank" rel="noreferrer" href={proj.site}>
              <button>visit Site</button>
            </a>
          </span>
          <h6>Note: Responsive design still under construction.</h6>
        </span>
      </div>
    );
  });
  return (
    <div className={projectStyles.projectView}>
      <div className={projectStyles.projects}>{mappedProjects}</div>
    </div>
  );
}

export default Projects;
