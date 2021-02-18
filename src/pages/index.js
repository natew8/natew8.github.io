import React, { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout/Layout";
import Titles from "../components/Titles/Titles";
import homeStyles from "./pageStyles/home.module.scss";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import Flower from "../components/Flower/Flower";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Portfolio/Skills/Skills";
import Projects from "../components/Portfolio/Projects/Projects";
import Contact from "../components/Portfolio/Contact/Contact";

export default function Home() {
  const [done, setDone] = useState(false);
  setTimeout(() => [setDone(true)], 2000);

  return (
    <Layout>
      <Flower />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}
