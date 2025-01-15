import React from "react";
import CardProject from './cardProject.jsx'; // Importing CardProject to display different project sections
import Contact from './contact.jsx'; // Importing the Contact component to display contact details

const MoreSkill = () => {
  return (
    <div>
      {/* Main container with background image and text color */}
      <div
        className="w-full h-full text-white pt-20 z-30"
        style={{ backgroundImage: "url('/tekstur abu.jpeg')" }} // Background image applied to the section
      >
        {/* Inner container with gradient background */}
        <div className="w-[96%] mx-auto bg-gradient-to-t from-black/0 via-black/95 to-black pb-20 pt-9 mt-12 rounded-t-3xl relative">
          
          {/* Section for Web Projects */}
          <div id="projectWebSec" className="">
            {/* CardProject component for displaying web-related projects */}
            <CardProject section="web" />
          </div>

          {/* Section for Logic Projects */}
          <div id="projectLogicSec" className="">
            {/* CardProject component for displaying logic-related projects */}
            <CardProject section="logic" />
          </div>
            
        </div>

        {/* Section: Contact */}
        <div className="w-full">
          {/* Contact component to display the contact section */}
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default MoreSkill;
