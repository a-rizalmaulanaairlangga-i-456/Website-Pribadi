// src/components/Skill.jsx
import React, { useContext, useEffect, useRef } from 'react';
import { AnimationContext } from "../App"; // Import context untuk animasi
import { HashLink } from 'react-router-hash-link'; // Import HashLink untuk navigasi internal


// Komponen Skill yang menampilkan keahlian pengguna
const Skill = () => {
  // Mendapatkan context animasi untuk memunculkan bagian web berdasarkan visibilitas
  const { visibleSections, observeSections } = useContext(AnimationContext);

  // Referensi untuk elemen skill untuk memantau visibilitasnya
  const skillRef = useRef(null);

  // Menjalankan animasi untuk memunculkan bagian skill saat bagian tersebut terlihat
  useEffect(() => {
    observeSections([skillRef], [0.1]); // Menentukan threshold untuk animasi
  }, [observeSections]);
  
  return (
    <div
      id="skill" 
      ref={skillRef} 
      className={`xl:w-[96%] lg:w-[98%] md:w-[98%] w-full md:mx-auto grid lg:pb-12 pb-6 md:rounded-3xl z-40 transition-all duration-300
        bg-no-repeat bg-[position:50%_center] bg-[size:100%]
        ${
          visibleSections["skill"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }
      `}
      style={{
        backgroundImage: "url('Utama-Skill.jpg')",
      }}
    >
      {/* Header Keahlian Saya */}
      <div
        className="flex justify-center items-center xl:w-[22%] lg:w-[25%] md:w-[29%] sm:w-[40%] w-[42%] xl:h-14 lg:h-12 md:h-11 sm:h-12 h-20 lg:py-1 text-center font-bold text-3xl text-white rounded-3xl relative mx-auto mt-3"
        style={{ backgroundImage: "url('/tekstur abu.jpeg')" }}
      >
        Keahlian Saya
      </div>

      {/* Memberikan space di layar kecil sampai sedang */}
      <div class="lg:h-0 h-[7rem]"></div>

      {/* Konten utama */}
      <div class="grid grid-cols-1 lg:grid-cols-12 w-[96%] mx-auto mt-7 gap-5">
        {/* Bagian Deskripsi */}
        <div class="col-span-1 lg:col-span-5 backdrop-blur-sm mx-auto py-5 rounded-3xl relative overflow-hidden">
          {/* Lapisan latar gelap */}
          <div class="absolute inset-0 bg-black/30 opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div class="relative w-[90%] mx-auto">
            <div class="relative z-10">
              <h2 class="text-2xl font-semibold text-white">
                Saya menguasai Fullstack Web Development, dibuktikan lewat proyek seperti website portofolio ini. Saya menggunakan JSX untuk frontend, JavaScript dan PHP untuk backend, serta Notion dan MySQLI sebagai database. Selain itu, saya juga menguasai bahasa C untuk memperkuat logika pemrograman.
              </h2>
            </div>
          </div>
          
          <div class="relative text-xl z-10 mt-10 flex gap-4 justify-center">
            {/* Tombol GitHub */}
            <a
              href="https://github.com/a-rizalmaulanaairlangga-i-456"
              target="_blank"
              rel="noopener noreferrer"
              class="w-[45%] h-12 bg-white/85 text-black backdrop-blur-sm font-semibold rounded-3xl hover:text-white active:bg-white/40 hover:bg-white/20 border-2 border-white transition-all duration-500 flex items-center justify-center"
            >
              Git Hub
            </a>

            {/* Tombol Projek Website */}
            <HashLink
              to="/my-skill#projectWebSec"
              class="flex justify-center items-center text-center h-12 w-[45%] 
                bg-white/0 backdrop-blur-sm border-2 border-white text-white font-semibold 
                rounded-3xl active:bg-white/40 hover:bg-white/20 
                transition-[transform,color,background-color] duration-500 ease-in-out 
                transform scale-105 hover:scale-100"
            >
              Proyek
            </HashLink>
          </div>
        </div>
      </div>
    </div>  
  );
};

// Mengekspor komponen Skill
export default Skill;
