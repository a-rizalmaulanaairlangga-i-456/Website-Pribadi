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
    observeSections([motivationRef], [0.5]); // Threshold set to 0.5 for motivation section
  }, [observeSections]);

  useEffect(() => {
    observeSections([buttonMoreAllRefs], [0.2]); // Threshold set to 0.2 for the "More All" button
  }, [observeSections]);

  return (
    <div className="w-full h-full">
      <div 
        className="w-full h-full text-white pt-20 z-30"
        style={{ backgroundImage: "url('/tekstur abu.jpeg')" }}
      >
        {/* Home Section */}
        <div className="w-[96%] mx-auto bg-gradient-to-t from-black/0 via-black/95 to-black pb-96 pt-10 mt-12 rounded-t-3xl relative" ref={homeRef}>
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
          className={`w-[78%] mx-auto mb-32 mt-24 transition-transform duration-300 ${
            visibleSections["motivation"] ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h2 className="text-2xl font-bold text-center">
            "Tak akan ada mimpi yang bisa dicapai, bila tidak diperjuangkan", tanpa aksi yang nyata mimpi kita hanyalah halusinasi, dan ingatlah bahwa dalam stiap usaha kita selalu berhadapan dengan masalah, sehingga "apapun yang terjadi, tetaplah bernapas dengan tenang", tetap kendalikan emosi kita, kendalikan hati kita, pikiran yang tenang adalah jalan terbaik di setiap masalah. Laut hanya menjadi ganas, karena ada badai bergejolak di atasnya."
          </h2>
        </div>

        {/* Main Section Wrapper */}
        <div className="w-[96%] mx-auto bg-gradient-to-b from-black/0 via-black/30 to-black rounded-3xl py-16 mb-44 scroll-smooth">
    
          {/* About Me Section */}
          <div className="w-[89%] mx-auto py-16" ref={aboutMeRef}>
            <AboutMe />
          </div>

          {/* Stack Section */}
          <div className="w-[90%] min-h-screen mx-auto py-16 my-16 flex items-center justify-center" ref={cardStackRef}>
            <StackSection />
          </div>

          {/* Skill Section */}
          <div className="w-[89%] mx-auto py-16" ref={skillRef}>
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
        <div className="w-[96%] mx-auto bg-gradient-to-t from-black/0 via-black/90 to-black pb-64 pt-5 mt-44 rounded-t-3xl" ref={queriesRef}>
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
