import React from "react";
import CardAchiev from './cardAchiev.jsx'; // Importing CardAchiev component for displaying achievements
import Contact from './contact.jsx'; // Importing Contact component for the contact section

const MoreAbout = () => {
  return (
    <div>
      {/* Main Container with Background Image */}
      <div
        className="w-full h-full text-white pt-20 z-30"
        style={{ backgroundImage: "url('/tekstur abu.jpeg')" }}        
      >
        {/* Wrapper for Content with Gradient Background */}
        <div className="w-[96%] mx-auto bg-gradient-to-t from-black/0 via-black/95 to-black pb-20 pt-9 mt-12 rounded-t-3xl relative">

          {/* Section for Academic Achievements */}
          <div id="academicAchiev">
            {/* Passing "academic" as a prop to the CardAchiev component */}
            <CardAchiev section="academic" />
          </div>

          {/* Section for Non-Academic Achievements */}
          <div id="nonAcademicAchiev">
            {/* Passing "non academic" as a prop to the CardAchiev component */}
            <CardAchiev section="non academic" />
          </div>

        </div>

        {/* Contact Section */}
        <div className="w-full">
          {/* Displaying the Contact component */}
          <Contact />
        </div>

      </div>
    </div>
  );
};

export default MoreAbout;
