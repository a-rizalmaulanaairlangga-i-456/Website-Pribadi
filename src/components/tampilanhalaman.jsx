// src/components/tampilanhalaman.jsx
import { HashLink } from 'react-router-hash-link';
import React, { useState, useContext, useEffect, useRef } from "react";
import { AnimationContext } from "../App";

// Importing other components used in the page
import Home from './home.jsx';
import Skill from './skill.jsx';
import AboutMe from './aboutMe.jsx';
import Queries from './queries.jsx';
import Contact from './contact.jsx';
import StackSection from './stackSection';

// Main Component: TampilanHalaman
const TampilanHalaman = ({ scrollToSection, homeRef, aboutMeRef, cardStackRef, skillRef, queriesRef, contactRef }) => {
  // Using context to manage animation visibility of sections
  const { visibleSections, observeSections } = useContext(AnimationContext);

  // Refs for specific elements that will be observed for visibility
  const motivationRef = useRef(null);
  const buttonMoreAllRefs = useRef(null);

  // useEffect to observe visibility of sections and trigger animations
  useEffect(() => {
    observeSections([motivationRef], [0.1]); // Threshold set to 0.1 for motivation section
  }, [observeSections]);

  useEffect(() => {
    observeSections([buttonMoreAllRefs], [0.1]); // Threshold set to 0.1 for the "More All" button
  }, [observeSections]);

  return (
    <div className="w-full h-full">
      <div 
        className="w-full h-full text-white pt-20 z-30"
        style={{ backgroundImage: "url('/tekstur abu.jpeg')" }}
      >
        {/* Home Section */}
        <div className="xl:w-[96%] lg:w-[97%] md:w-[98%] w-full mx-auto bg-gradient-to-t from-black/0 via-black/100 to-black lg:pb-96 sm:pb-80 pb-52 pt-10 mt-12 rounded-t-3xl relative" ref={homeRef}>
          <Home 
            scrollToSection={scrollToSection}  // Passing props for navigation
            homeRef={homeRef} 
            skillRef={skillRef} 
            aboutMeRef={aboutMeRef}
            queriesRef={queriesRef}
          />
        </div>

        {/* Motivation Section */}
        <div 
          id="motivation"
          ref={motivationRef}
          className={`xl:w-[78%] lg:w-[90%] w-[93%] mx-auto lg:mb-24 mb-16 md:mt-1 transition-transform duration-300 ${
            visibleSections["motivation"] ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h2 className="text-2xl font-bold text-center">
            "Tak akan ada mimpi yang bisa dicapai, bila tidak diperjuangkan", tanpa aksi yang nyata mimpi kita hanyalah halusinasi, dan ingatlah bahwa dalam stiap usaha kita selalu berhadapan dengan masalah, sehingga "apapun yang terjadi, tetaplah bernapas dengan tenang", tetap kendalikan emosi kita, kendalikan hati kita, pikiran yang tenang adalah jalan terbaik di setiap masalah. Laut hanya menjadi ganas, ketika ada badai bergejolak di atasnya."
          </h2>
        </div>

        {/* Main Section Wrapper */}
        <div className="xl:w-[96%] lg:w-[97%] md:w-[98%] w-full md:mx-auto md:bg-gradient-to-b md:from-black/0 md:via-black/30 md:to-black md:rounded-3xl py-16 md:mb-20 scroll-smooth">
    
          {/* About Me Section */}
          <div className="xl:w-[89%] lg:w-[96%] w-full mx-auto py-16" ref={aboutMeRef}>
            <AboutMe />
          </div>

          {/* Stack Section */}
          <div className="xl:w-[90%] lg:w-[96%] w-full min-h-screen mx-auto py-16 my-9 flex items-center justify-center" ref={cardStackRef}>
            <StackSection />
          </div>

          {/* Skill Section */}
          <div className="xl:w-[89%] lg:w-[96%] w-full mx-auto md:py-16 pt-16 pb-8" ref={skillRef}>
            <Skill />
          </div>

          {/* Button to navigate to more content */}
          <div className="flex justify-center my-2">
            <HashLink 
              to="/all-about-me#allAboutMe"
              id="buttonMoreAll"
              ref={buttonMoreAllRefs}
              className={`
                px-6 py-2 border-2 border-white rounded-3xl text-lg font-medium bg-black
                hover:bg-white hover:text-black
                transition-all duration-700
                ${visibleSections["buttonMoreAll"]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
                }
              `}
            >
              Lebih banyak
            </HashLink>
          </div>
        </div>
        <div className="w-full h-1"></div>

        {/* Email Me Section */}
        <div className="xl:w-[96%] lg:w-[97%] md:w-[98%] w-full md:mx-auto md:bg-gradient-to-t md:from-black/0 md:via-black/90 md:to-black md:pb-64 pt-5 md:mt-20 mt-10 md:mb-20 mb-8 rounded-t-3xl" ref={queriesRef}>
          <Queries />
        </div>

        {/* Contact Section */}
        <div className="w-full">
          <Contact contactRef={contactRef} />
        </div>

      </div>
    </div>
  );
};

export default TampilanHalaman;
