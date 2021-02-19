import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import Flower from "../components/Flower/Flower";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Portfolio/Skills/Skills";
import Projects from "../components/Portfolio/Projects/Projects";
import Contact from "../components/Portfolio/Contact/Contact";

export default function Home() {
  const [done, setDone] = useState(false);
  setTimeout(() => [setDone(true)], 2000);

  return (
    <>
      <Layout>
        <Hero />
        <Flower />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}
