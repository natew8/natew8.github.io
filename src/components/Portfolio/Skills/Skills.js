import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import skillStyles from "./skills.module.scss";
import { motion } from "framer-motion";
const mySkills = [
  {
    id: 1,
    name: "Javascript",
    icon:
      "https://nw-portfolio-images.s3-us-west-1.amazonaws.com/javascript.svg",
    color:
      "invert(85%) sepia(92%) saturate(5503%) hue-rotate(339deg) brightness(101%) contrast(94%)",
  },
  {
    id: 2,
    name: "HTML5",
    icon: "https://nw-portfolio-images.s3-us-west-1.amazonaws.com/html5.svg",
    color:
      "invert(40%) sepia(91%) saturate(3148%) hue-rotate(350deg) brightness(94%) contrast(88%)",
  },
  {
    id: 3,
    name: "CSS3",
    icon: "https://nw-portfolio-images.s3-us-west-1.amazonaws.com/css3.svg",
    color:
      "invert(30%) sepia(53%) saturate(4114%) hue-rotate(189deg) brightness(86%) contrast(83%)",
  },

  {
    id: 4,
    name: "ReactJS",
    icon: "https://nw-portfolio-images.s3-us-west-1.amazonaws.com/react.svg",
    color:
      "invert(84%) sepia(9%) saturate(5802%) hue-rotate(164deg) brightness(103%) contrast(97%)",
  },
  {
    id: 5,
    name: "Gatsby",
    icon: "https://nw-portfolio-images.s3-us-west-1.amazonaws.com/gatsby.svg",
    color:
      "invert(21%) sepia(20%) saturate(7282%) hue-rotate(256deg) brightness(89%) contrast(87%)",
  },
  {
    id: 10,
    name: "NodeJS",
    icon:
      "https://nw-portfolio-images.s3-us-west-1.amazonaws.com/node-dot-js.svg",
    color:
      "invert(57%) sepia(11%) saturate(3178%) hue-rotate(71deg) brightness(82%) contrast(78%)",
  },
  {
    id: 11,
    name: "Express",
    icon: "https://nw-portfolio-images.s3-us-west-1.amazonaws.com/express.svg",
    color:
      "invert(100%) sepia(100%) saturate(2%) hue-rotate(284deg) brightness(109%) contrast(101%)",
  },
  {
    id: 12,
    name: "PostgreSQL",
    icon:
      "https://nw-portfolio-images.s3-us-west-1.amazonaws.com/postgresql.svg",
    color:
      "invert(35%) sepia(16%) saturate(1807%) hue-rotate(165deg) brightness(96%) contrast(87%)",
  },
  {
    id: 7,
    name: "Sass",
    icon: "https://nw-portfolio-images.s3-us-west-1.amazonaws.com/sass.svg",
    color:
      "invert(68%) sepia(24%) saturate(1937%) hue-rotate(291deg) brightness(83%) contrast(90%)",
  },
  {
    id: 13,
    name: "Postman",
    icon: "https://nw-portfolio-images.s3-us-west-1.amazonaws.com/postman.svg",
    color:
      "invert(61%) sepia(48%) saturate(5075%) hue-rotate(337deg) brightness(105%) contrast(105%)",
  },
  {
    id: 14,
    name: "Git",
    icon: "https://nw-portfolio-images.s3-us-west-1.amazonaws.com/git.svg",
    color:
      "invert(42%) sepia(51%) saturate(4130%) hue-rotate(343deg) brightness(98%) contrast(92%)",
  },
  {
    id: 15,
    name: "Github",
    icon: "https://nw-portfolio-images.s3-us-west-1.amazonaws.com/github.svg",
    color:
      "invert(33%) sepia(17%) saturate(5651%) hue-rotate(239deg) brightness(85%) contrast(94%)",
  },
  {
    id: 18,
    name: "Heroku",
    icon: "https://nw-portfolio-images.s3-us-west-1.amazonaws.com/heroku.svg",
    color:
      "invert(15%) sepia(52%) saturate(5180%) hue-rotate(265deg) brightness(78%) contrast(140%)",
  },
  {
    id: 19,
    name: "Figma",
    icon: "https://nw-portfolio-images.s3-us-west-1.amazonaws.com/figma.svg",
    color:
      "invert(57%) sepia(73%) saturate(6457%) hue-rotate(351deg) brightness(98%) contrast(93%)",
  },
  {
    id: 6,
    name: "Redux",
    icon: "https://nw-portfolio-images.s3-us-west-1.amazonaws.com/redux.svg",
    color:
      "invert(29%) sepia(59%) saturate(1613%) hue-rotate(239deg) brightness(92%) contrast(85%)",
  },
  {
    id: 8,
    name: "React Router",
    icon:
      "https://nw-portfolio-images.s3-us-west-1.amazonaws.com/reactrouter.svg",
    color:
      "invert(32%) sepia(35%) saturate(1520%) hue-rotate(315deg) brightness(105%) contrast(100%",
  },
];
const hardArr = [
  "React-Context",
  "React Routes",
  "React Hooks",
  "GaphQL",
  "AWS(S3)",
  "Axios",
  "Massive",
  "ReST",
  "NextJS",
  "SCSS",
  "React Native",
  "Relational Databases",
];
const softArr = [
  "Sales",
  "Marketing",
  "Customer Service",
  "Leadership",
  "Research",
  "Productivity Mindset",
  "Management",
  "Team Environment",
  "Strong Communication",
  "Time Management",
  "Integrity",
  "Creativity",
];

function Skills(props) {
  const images = useStaticQuery(graphql`
    query MyQuery {
      allFile {
        nodes {
          publicURL
        }
      }
    }
  `);
  const { nodes } = images.allFile;

  const mySkills = [
    {
      id: 1,
      name: "Javascript",
      icon: nodes[14].publicURL,
      color:
        "invert(85%) sepia(92%) saturate(5503%) hue-rotate(339deg) brightness(101%) contrast(94%)",
    },
    {
      id: 2,
      name: "HTML5",
      icon: nodes[11].publicURL,
      color:
        "invert(40%) sepia(91%) saturate(3148%) hue-rotate(350deg) brightness(94%) contrast(88%)",
    },
    {
      id: 3,
      name: "CSS3",
      icon: nodes[3].publicURL,
      color:
        "invert(30%) sepia(53%) saturate(4114%) hue-rotate(189deg) brightness(86%) contrast(83%)",
    },

    {
      id: 4,
      name: "ReactJS",
      icon: nodes[16].publicURL,
      color:
        "invert(84%) sepia(9%) saturate(5802%) hue-rotate(164deg) brightness(103%) contrast(97%)",
    },
    {
      id: 5,
      name: "Gatsby",
      icon: nodes[5].publicURL,
      color:
        "invert(21%) sepia(20%) saturate(7282%) hue-rotate(256deg) brightness(89%) contrast(87%)",
    },
    {
      id: 10,
      name: "NodeJS",
      icon: nodes[15].publicURL,
      color:
        "invert(57%) sepia(11%) saturate(3178%) hue-rotate(71deg) brightness(82%) contrast(78%)",
    },
    {
      id: 11,
      name: "Express",
      icon: nodes[0].publicURL,
      color:
        "invert(100%) sepia(100%) saturate(2%) hue-rotate(284deg) brightness(109%) contrast(101%)",
    },
    {
      id: 12,
      name: "PostgreSQL",
      icon: nodes[18].publicURL,
      color:
        "invert(35%) sepia(16%) saturate(1807%) hue-rotate(165deg) brightness(96%) contrast(87%)",
    },
    {
      id: 7,
      name: "Sass",
      icon: nodes[19].publicURL,
      color:
        "invert(68%) sepia(24%) saturate(1937%) hue-rotate(291deg) brightness(83%) contrast(90%)",
    },
    {
      id: 13,
      name: "Postman",
      icon: nodes[23].publicURL,
      color:
        "invert(61%) sepia(48%) saturate(5075%) hue-rotate(337deg) brightness(105%) contrast(105%)",
    },
    {
      id: 14,
      name: "Git",
      icon: nodes[6].publicURL,
      color:
        "invert(42%) sepia(51%) saturate(4130%) hue-rotate(343deg) brightness(98%) contrast(92%)",
    },
    {
      id: 15,
      name: "Github",
      icon: nodes[7].publicURL,
      color:
        "invert(33%) sepia(17%) saturate(5651%) hue-rotate(239deg) brightness(85%) contrast(94%)",
    },
    {
      id: 18,
      name: "Heroku",
      icon: nodes[10].publicURL,
      color:
        "invert(15%) sepia(52%) saturate(5180%) hue-rotate(265deg) brightness(78%) contrast(140%)",
    },
    {
      id: 19,
      name: "Figma",
      icon: nodes[4].publicURL,
      color:
        "invert(57%) sepia(73%) saturate(6457%) hue-rotate(351deg) brightness(98%) contrast(93%)",
    },
    {
      id: 6,
      name: "Redux",
      icon: nodes[20].publicURL,
      color:
        "invert(29%) sepia(59%) saturate(1613%) hue-rotate(239deg) brightness(92%) contrast(85%)",
    },
    {
      id: 8,
      name: "React Router",
      icon: nodes[17].publicURL,
      color:
        "invert(32%) sepia(35%) saturate(1520%) hue-rotate(315deg) brightness(105%) contrast(100%",
    },
  ];

  const mappedClientSkills = mySkills.map((skill) => {
    return (
      <div className={skillStyles.skillBox} key={skill.id}>
        <object
          style={{ filter: `${skill.color}` }}
          className={skill.name}
          data={skill.icon}
        />
        <h3 className={skillStyles.title}>{skill.name}</h3>
      </div>
    );
  });
  const mappedHardSkills = hardArr.map((skill) => {
    return <h3>{skill}</h3>;
  });

  const mappedSoftSkills = softArr.map((skill) => {
    return <h3>{skill}</h3>;
  });

  return (
    <div name="skills" id="skills" className={skillStyles.skillsView}>
      <span className={skillStyles.topBox}>{mappedClientSkills}</span>
      <div className={skillStyles.skillsFooter}>
        <h1>And more...</h1>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/document/d/1PYtd-zC6tS1CFLWXfxJGD-zNNNW7mYyXOVsuOF_yGZ8/edit?usp=sharing"
          type="button"
        >
          <button>My Resume</button>
        </a>
      </div>
    </div>
  );
}

export default Skills;
