import React from 'react';
import { Element } from 'react-scroll';
import NavBar from './NavBar';
import LandPage from './LandPage';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Project from './Projects';
import Contact from './Contact';
import SectionWrapper from './SectionWrapper';

const Porftifolio = () => {
  return (
    <div className="container">
      <NavBar />

      <Element name="home">
        <SectionWrapper>
        <LandPage />
        </SectionWrapper>
      </Element>

      <Element name="about">
        <SectionWrapper>
        <AboutMe />
        </SectionWrapper>
      </Element>

      <Element name="experience">
        <SectionWrapper>
        <Experience />
        </SectionWrapper>
      </Element>

      <Element name="project">
        <SectionWrapper>
        <Project />
        </SectionWrapper>
      </Element>

      <Element name="contact">
        <SectionWrapper>
        <Contact />
        </SectionWrapper>
      </Element>
    </div>
  );
};

export default Porftifolio;
