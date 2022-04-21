import { useLocation } from "react-router-dom";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import WhatHappened from "./WhatHappened";
import Contact from "./Contact";
import SupportMe from "./SupportMe";

export default function LandingPage() {

  const { location } = useLocation();

  console.log('location:', location);
  
  return (
    <>
      <AboutMe />
      <WhatHappened />
      <Projects />
      <SupportMe />
      <Contact />
    </>
  );
}