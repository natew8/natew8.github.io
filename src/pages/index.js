import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import Flower from "../components/Flower/Flower";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Portfolio/Skills/Skills";
import Projects from "../components/Portfolio/Projects/Projects";
import Contact from "../components/Portfolio/Contact/Contact";
import About from "../components/About/About";
import homeStyles from "./pageStyles/home.module.scss";

export default function Home() {
  const [done, setDone] = useState(false);
  setTimeout(() => [setDone(true)], 2000);

  return (
    <>
      <Layout>
        <Flower />
        <Hero />
        <h1 id="about" className={homeStyles.sectionTitle}>
          Introductions
        </h1>
        <About />
        <h1 id="skills" className={homeStyles.sectionTitle}>
          Things I Know
        </h1>
        <Skills />
        <h1 id="projects" className={homeStyles.sectionTitle}>
          Things I've built
        </h1>
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}
