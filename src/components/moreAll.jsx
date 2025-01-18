import React from "react";
import AboutMe from "./aboutMe"; // Importing the AboutMe component to display information about the user
import Skill from "./skill"; // Importing the Skill component to display the user's skills
import Contact from "./contact"; // Importing the Contact component for the contact section

function MoreAll({ section }) {
  return (
    <div 
      className="w-full h-full text-white pt-20"
      style={{ backgroundImage: "url('/tekstur abu.jpeg')" }}
>
      <>
        {/* Section: All About Me with Gradient Background */}
        <div 
          id="allAboutMe" 
          className="xl:w-[96%] lg:w-[97%] md:w-[98%] w-full md:mx-auto md:bg-gradient-to-t md:from-black/0 md:via-black/95 md:to-black md:rounded-3xl md:pb-28 pt-24 rounded-t-3xl relative"
        >
          {/* Title for the section */}
          <h2 className="text-center font-bold text-3xl underline text-white mb-24">
            Semua Tentang Saya
          </h2>
          
          {/* AboutMe Component: Displays information about the user */}
          <div className="xl:w-[89%] lg:w-[96%] w-full mx-auto">
            <AboutMe />
          </div>

          {/* Skill Component: Displays the user's skills */}
          <div className="xl:w-[89%] lg:w-[96%] w-full mt-36 mx-auto">
            <Skill />
          </div>
        </div>

        {/* Section: Contact */}
        <div>
          {/* Contact Component: Displays the contact details */}
          <Contact />
        </div>

      </>
    </div>
  );
}

export default MoreAll;
