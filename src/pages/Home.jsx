import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Github from "../components/Github";
import Philosophy from "../components/Philosophy";
import Lifestyle from "../components/Lifestyle";
import Contact from "../components/Contact";

function Home() {
  const { section } = useParams();
  const location = useLocation();

  useEffect(() => {
    // Determine target section
    let targetId = section;

    // If user refreshes on GitHub Pages, section might be in pathname
    if (!targetId) {
      const path = location.pathname.replace(/^\/pp\/?/, ""); // remove /pp/
      if (path && path !== "") targetId = path; // e.g., "portfolio"
    }

    if (!targetId) return;

    // Scroll to the element when it exists
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [section, location.pathname]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Github />
      <Philosophy />
      <Lifestyle />
      <Contact />
    </>
  );
}

export default Home;
