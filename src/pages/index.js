import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Portfolio/Skills/Skills";
import Projects from "../components/Portfolio/Projects/Projects";
import Contact from "../components/Portfolio/Contact/Contact";
import About from "../components/About/About";
import homeStyles from "./pageStyles/home.module.scss";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <div className={homeStyles.titlesBox}>
          <h1 id="about" className={homeStyles.sectionTitle}>
            Introductions
          </h1>
          <div></div>
        </div>
        <About />
        <div className={homeStyles.titlesBox}>
          <h1 id="skills" className={homeStyles.sectionTitle}>
            Things I Know
          </h1>
          <div></div>
        </div>
        <Skills />
        <div className={homeStyles.titlesBox}>
          <h1 id="projects" className={homeStyles.sectionTitle}>
            Things I've built
          </h1>
          <div></div>
        </div>
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}
