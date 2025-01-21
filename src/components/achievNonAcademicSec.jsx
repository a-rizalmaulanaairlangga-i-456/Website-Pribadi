// Import React and required hooks
import React, { useState, useContext, useEffect, useRef } from "react";
import { AnimationContext } from "../App";

// Data for non-academic achievements
const achievements = [
  {
    id: 1,
    title: "Mural",
    image: "mural.png",
    link: "https://penssby-my.sharepoint.com/:b:/g/personal/3124600033_msoffice_pens_ac_id/EWJwjI79219AjII_bUsYlwoBAUFkkVXY6Hd5oDI0dsVB8g?e=nkrnWe",
  },
  {
    id: 2,
    title: "Photographer",
    image: "inc1.jpg",
    link: "https://penssby-my.sharepoint.com/:b:/g/personal/3124600033_msoffice_pens_ac_id/ETk__pmczEZIpoRvA5L4hz0BlKFTSFmgGBnEWQUMHO7DYA?e=a5IjCF",
  },
  {
    id: 3,
    title: "Wakil Pimpinan Redaksi",
    image: "inc2.jpg",
    link: "https://penssby-my.sharepoint.com/:b:/g/personal/3124600033_msoffice_pens_ac_id/EaZhfSqWwAFLh_gsvvgzDOIBO3DehyXISvCIANaIO3tIqA?e=7ymAMQ",
  },
  {
    id: 4,
    title: "Generus",
    image: "generus.jpg",
    link: "https://penssby-my.sharepoint.com/:b:/g/personal/3124600033_msoffice_pens_ac_id/ERW0JpDVZZ5OjUBrX6RbNFcBYenH_3FgtWtR-DKPZZCS9g?e=fvux8W",
  },
  {
    id: 5,
    title: "Big Fair Surabaya",
    image: "bigFair.png",
    link: "https://penssby-my.sharepoint.com/:f:/g/personal/3124600033_msoffice_pens_ac_id/EoxuFbRUDo1Olav7oN9f47sBMoYf3B4Z3x0SvMuMayHZag?e=TxUgCd",
  }
];

// Component for displaying non-academic achievements
function AchievNonAcademic() {
  // Use AnimationContext to handle animations
  const { visibleSections, observeSections } = useContext(AnimationContext);

  // Create refs for each achievement to track visibility
  const achievNonAcadRefs = useRef(achievements.map(() => React.createRef()));

  // Observe visibility of each achievement when component mounts
  useEffect(() => {
    observeSections([...achievNonAcadRefs.current], [0.2]); // Adjust threshold
  }, [observeSections]);

  return (
    <div className="w-[98%] mx-auto p-6 text-center">
      {/* Container for achievements */}
      <div className="flex flex-wrap justify-center gap-6">
        {achievements.map((achievement) => (
          <a
            key={achievement.id} // Unique key for each achievement
            href={achievement.link} // Link to the achievement document
            target="_blank"
            rel="noopener noreferrer"
            id={`nonAcadAchiev-${achievement.id}`} // ID for animation tracking
            ref={achievNonAcadRefs.current[achievement.id - 1]} // Ref for visibility tracking
            className={`shadow-md overflow-hidden relative group w-[45%] md:w-[30%] lg:w-[22%] grid items-center rounded-3xl transition-transform ${
              visibleSections[`nonAcadAchiev-${achievement.id}`]
                ? "translate-y-0 opacity-100 duration-300 ease-in-out"
                : "translate-y-10 opacity-0 duration-300 ease-in"
            }`}
          >
            {/* Image section with hover effects */}
            <div className="w-full overflow-hidden relative rounded-3xl h-[12rem] md:h-[9rem] lg:h-[7rem]">
              <img
                src={achievement.image} // Display achievement image
                alt={achievement.title} // Alt text for the image
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm text-gray-600 mt-1">Klik untuk lihat dokumen</p>
              </div>
            </div>

            {/* Achievement title */}
            <h2 className="text-xl font-semibold mt-5">{achievement.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}

export default AchievNonAcademic;
