import React, { useState, useContext, useEffect, useRef } from "react";
import { AnimationContext } from "../App";

// Daftar pencapaian akademik dengan data berupa id, judul, gambar, dan tautan dokumen
const achievements = [
  {
    id: 1,
    title: "SEAOSM",
    image: "SEAOSM.png",
    link: "https://penssby-my.sharepoint.com/:b:/g/personal/3124600033_msoffice_pens_ac_id/ESYdQV5p_Y5ImsTVJ4ezWh0BZlX01Yi10qL3whs2kHgZ5g?e=KaD2wb",
  },
  {
    id: 2,
    title: "NLC",
    image: "NLC.png",
    link: "https://penssby-my.sharepoint.com/:b:/g/personal/3124600033_msoffice_pens_ac_id/EZLT8q7WPQpHpJXIj81HLegBwmHZJnygSw1ytQRqhm0NUg?e=b3fKHF",
  },
  {
    id: 3,
    title: "NSO VOL.2",
    image: "NSO.png",
    link: "https://penssby-my.sharepoint.com/:b:/g/personal/3124600033_msoffice_pens_ac_id/ESnD0xp8FvNAhXLboNPjWsYBO6EQzcUtvTed_J004VHLUQ?e=pootcn",
  },
  {
    id: 4,
    title: "IYSHO",
    image: "IYSHO.png",
    link: "https://penssby-my.sharepoint.com/:b:/g/personal/3124600033_msoffice_pens_ac_id/EdakbQgUgTlHllAtw5O4l2QBldAOq2G6taqmMMMVA6J-0w?e=StF1IU",
  },
  {
    id: 5,
    title: "ISMO",
    image: "ISMO.png",
    link: "https://penssby-my.sharepoint.com/:b:/g/personal/3124600033_msoffice_pens_ac_id/EbbKfSsVA0FHnCGF9vIMZFQBtxn3rzLSdw-jt09OzIkGcw?e=oCs9NY",
  },
  {
    id: 6,
    title: "FOSPAN",
    image: "FOSPAN.png",
    link: "https://penssby-my.sharepoint.com/:b:/g/personal/3124600033_msoffice_pens_ac_id/Ee5O2hazaZRPmtiL3sA_xeYBo11jG3WR51IqbetSCAqaVw?e=4y33iY",
  },
];

function AchievAcademic() {
  // Mengakses context untuk animasi pada bagian web
  const { visibleSections, observeSections } = useContext(AnimationContext);

  // Membuat referensi untuk setiap elemen pencapaian
  const achievAcadRefs = useRef(achievements.map(() => React.createRef()));

  // Menginisialisasi observer untuk memantau elemen pencapaian
  useEffect(() => {
    observeSections([...achievAcadRefs.current], [0.2]); // Mengatur threshold untuk animasi
  }, [observeSections]);

  return (
    <div className="w-[98%] mx-auto p-6 text-center">
      {/* Container utama untuk menampilkan daftar pencapaian */}
      <div className="flex flex-wrap justify-center gap-6">
        {achievements.map((achievement) => (
          <a
            key={achievement.id}
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            id={`acadAchiev-${achievement.id}`}
            ref={achievAcadRefs.current[achievement.id - 1]}
            className={`shadow-md overflow-hidden relative group w-[45%] md:w-[30%] lg:w-[22%] grid items-center rounded-3xl transition-transform ${
              visibleSections[`acadAchiev-${achievement.id}`]
                ? "translate-y-0 opacity-100 duration-300 ease-in-out"
                : "translate-y-10 opacity-0 duration-300 ease-in"
            }`}
          >
            {/* Gambar pencapaian */}
            <div className="w-full overflow-hidden relative rounded-3xl h-[12rem] md:h-[9rem] lg:h-[7rem]">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay gradient saat hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm text-gray-600 mt-1">Klik untuk lihat dokumen</p>
              </div>
            </div>
            {/* Judul pencapaian */}
            <h2 className="text-xl font-semibold mt-5">{achievement.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}

export default AchievAcademic;
