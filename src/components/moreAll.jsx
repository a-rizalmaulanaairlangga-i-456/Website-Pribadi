import React from "react";
import AboutMe from "./aboutMe"; // Importing the AboutMe component to display information about the user
import Skill from "./skill"; // Importing the Skill component to display the user's skills
import Contact from "./contact"; // Importing the Contact component for the contact section

function MoreAll({ section }) {
  return (
    <div 
      className="min-h-screen bg-cover bg-center pt-20" 
      style={{ backgroundImage: "url('/tekstur abu.jpeg')" }} // Setting background image for the section
    >
      <>
        {/* Section: All About Me with Gradient Background */}
        <div 
          id="allAboutMe" 
          className="w-[96%] mx-auto bg-gradient-to-t from-black/0 via-black/90 to-black pb-28 pt-24 rounded-t-3xl relative"
        >
          {/* Title for the section */}
          <h2 className="text-center font-bold text-3xl underline text-white mb-24">
            Semua Tentang Saya
          </h2>
          
          {/* AboutMe Component: Displays information about the user */}
          <div className="w-[89%] mx-auto">
            <AboutMe />
          </div>

          {/* Skill Component: Displays the user's skills */}
          <div className="mt-36 w-[89%] mx-auto">
            <Skill />
          </div>
        </div>

        {/* Section: Contact */}
        <div className="w-[96%] mx-auto bg-gradient-to-b from-black/0 via-black/80 to-black pb-16 mt-52 pt-48">
          {/* Contact Component: Displays the contact details */}
          <Contact />
        </div>

      </>
    </div>
  );
}

export default MoreAll;
